import React from "react";

import "./Header.css";
import ProfileAvatar from "../../images/profile-img.jpg";


function Header() {
    return (
        <div className="header">
            <div className="welcome-user">
                <div className="welcome">Welcome back Isabella!</div>
                <div className="check-weather">Check out today's weather information</div>
            </div>
            <div className="user">
                <div className="user-settings">
                    <span className="material-icons-outlined user-settings-icon">more_horiz</span>
                </div>
                <div className="user-avatar">
                        <img src={ProfileAvatar} alt="User Avatar" className="avatar"/>
                    </div>
            </div>
        </div>
    );
}

export default Header;