import React from "react";
import Application from './loggedout/loggedout_application'
import button_image from './misc/navigation_drawer.png'
const Button = () => {
    return(
        <div id='button_wrapper'>
            <img id="navigation_button" src={button_image}/>
        </div>
    )
};

export default Button
