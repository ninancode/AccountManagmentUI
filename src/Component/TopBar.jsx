import React from "react";
import '../styling/TopBarStyles.css';

export default function TopBar(user) {
    // roleId = user.roleId;
    let roleId = 1;


    return(
        <>
            {roleId === 1 ?
                <ul>
                    <li><a href="default.asp">Home</a></li>
                    <li><a href="news.asp">News</a></li>
                    <li><a href="contact.asp">Contact</a></li>
                    <li><a href="about.asp">About</a></li>
                    <div class="navBar"><p>Welcome back Manager!</p></div>
            </ul>
        :
            <ul>
                <li class="navBar"><a href="default.asp">Home</a></li>
                <li><a href="news.asp">News</a></li>
                <li><a href="contact.asp">Contact</a></li>
                <li><a href="about.asp">About</a></li>
                <p class="navBar">Welcome back Customer!</p>
            </ul>
            }
        </>
    )
}