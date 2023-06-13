import React, { Component } from 'react';
import { TextButton } from 'vhp-component-library';
class Dock extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className='dock'>
                <TextButton
                    text="Open App"
                    buttonClass="dock-app-button"
                    ClickFunction = {this.props.ChangeApp}
                    data={1}
                />
            </div>
        )
    }
}

/**
 * Dock app class
 * TODO: Lift currentApp state out of dock and into App, so you can exit out of an app using the home button
 */
export class DockApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: true,
            Apps:[
				<div>Application!</div>
            ]
        }
        
        this.DisplayApp = this.DisplayApp.bind(this)
    }

    DisplayApp() {
        if (this.props.currentApp == 0) {
            return(<Dock ChangeApp = {this.props.ChangeApp}/>)
        } else {
            return(this.state.Apps[this.props.currentApp - 1])
        }
    }

    render() {
        return(
            <>
                {this.DisplayApp()}
            </>  
        );
    }
}