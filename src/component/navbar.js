import React, { Component } from "react";

export default class Navbar extends Component{
    render()
    {
        return(
           <header>
        <div className="nav-bar">
          <div className="subbrand">TEAM</div>
          <div className="brand">VELOCITY</div>
          <div className="menu-right">
            {/* <span onclick="Myfunction()">&#9776;</span> */}
            <ul id="menu">
              <button className="logout_btn" id="logid" onclick="openForm()">Log in</button>
              <button className="logout_btn" id="logid" onclick="opForm()">Sign in</button>
              {/* <li><a href="#">Log in</a></li>
            <li><a href="#">sign in</a></li> */}  
            </ul>
          </div>
        </div>
        {/* <label for="check">
        <i class="fas fa-bars" id="sidebar_btn"></i>
           </label> */}
      </header>
            
        )
    }
}

