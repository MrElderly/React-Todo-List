import React from "react";
import './Modal.css'

export default class Modal extends React.Component {
  state = {
    show: false
    };


    render() {
    return(
        <React.Fragment>
            <button className="modalButton" onClick={() => this.setState({show: true})}>Open modal</button>

           {this.state.show && (<div className="modal">
                <div className="modal-content">
                    <h1>Modal Title</h1>
                    <p>My first modal window</p>
                    <button className="modalButton" onClick={() => this.setState({show: false})}>Close</button>
                    </div>
                    </div>)}
            </React.Fragment>
    )
    }
}

