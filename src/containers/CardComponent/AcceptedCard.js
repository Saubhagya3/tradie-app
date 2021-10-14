import React from 'react';
import Axios from 'axios'
import './AcceptedCard.css'
import FormattedDate from '../DateConverter';

const AcceptedCard = (props) => {
    const clickAccept = (id) => {
        Axios.put(`https://test-fullstack-project.herokuapp.com/api/update/status/${id}`, {
            status: "new"
        }).then(window.location.reload(false))
    }
    return(
        <div className="accepted-card-container">
            <div style={{display: "flex", "align-items": "center"}}>
                <div className="profile-image">{props.name.charAt(0)}</div>
                &nbsp;&nbsp;&nbsp;
                <div className="info">
                    <h4>{props.name}</h4>
                    <p className="small-text">{FormattedDate(props.date)}</p>
                </div>
            </div>
            <hr/>
            <p className="second-row">
                <svg width="14px" height="20px" viewBox="0 0 14 20" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>location_on</title><desc>Created with Sketch.</desc><g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Rounded" transform="translate(-377.000000, -1306.000000)"><g id="Communication" transform="translate(100.000000, 1162.000000)"><g id="-Round-/-Communication-/-location_on" transform="translate(272.000000, 142.000000)"><g><polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon><path d="M12,2 C8.13,2 5,5.13 5,9 C5,13.17 9.42,18.92 11.24,21.11 C11.64,21.59 12.37,21.59 12.77,21.11 C14.58,18.92 19,13.17 19,9 C19,5.13 15.87,2 12,2 Z M12,11.5 C10.62,11.5 9.5,10.38 9.5,9 C9.5,7.62 10.62,6.5 12,6.5 C13.38,6.5 14.5,7.62 14.5,9 C14.5,10.38 13.38,11.5 12,11.5 Z" id="🔹Icon-Color" fill="#1D1D1D"></path></g></g></g></g></g></svg>
                &nbsp;
                {props.location}&nbsp;&nbsp;&nbsp;&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24"><g><path fill="none" d="M0 0h24v24H0z"/><path d="M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4zM4 16v3h16v-3H4zm0-2h16V7H4v7zM9 3v2h6V3H9zm2 8h2v2h-2v-2z"/></g></svg>
                &nbsp;
                {props.job}&nbsp;&nbsp;&nbsp;&nbsp;
                Job ID: {props.jobId} &nbsp;&nbsp;&nbsp;&nbsp;
                <strong>${props.price}</strong> Lead Invitation
            </p>
            <hr />
            <div className="contact">
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" style={{color: "black"}} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    &nbsp;
                    {props.phone}&nbsp;&nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" style={{color: "black"}} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    &nbsp;
                    {props.email}
                </p>
            </div>
            <p className="small-text">{props.description}</p>
            <hr/>
            <button className="undo-button" onClick={() => {clickAccept(props.jobId)}}>Undo</button>
        </div>
    )
}

export default AcceptedCard
