import React, { useState } from 'react';
import AcceptedTab from './AcceptedTab';
import InvitedTab from './InvitedTab';
import './Tabs.css';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("tab1")

    const handleTab1 = () => {
        setActiveTab("tab1")
    }

    const handleTab2 = () => {
        setActiveTab("tab2");
    }

    return(
        <div className="tabs">
            <ul className="nav">
                <li className={activeTab === "tab1" ? "active" : ""} onClick={handleTab1}>Invited</li>
                <li className={activeTab === "tab2" ? "active" : ""} onClick={handleTab2}>Accepted</li>
            </ul>
            <div className="outlet">
                {activeTab === "tab1" ? <InvitedTab /> : <AcceptedTab />}
            </div>
        </div>
    )
}

export default Tabs
