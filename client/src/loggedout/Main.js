import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Main.css'
import Logo from '../Logo.js'
import SearchBar from '../SearchField.js'
import NavButton from '../NavigationButton.js'
class Main extends Component{
    render(){
        return(
            <div>
                <SearchBar />
                <Logo />
                <NavButton/>
            </div>

        )
    }

}

export default Main
