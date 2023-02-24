import React from "react";

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
                    <span class="material-icons-outlined">more_horiz</span>
                    <div className="userAvatar">
                        <img src={ProfileAvatar} alt="User Avatar" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;