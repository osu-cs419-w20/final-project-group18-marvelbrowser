/** @jsx jsx */
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled/macro';
import { jsx, css } from '@emotion/core';

function Navbar() {

    const Nav = styled.nav`
        background-color: black;
        overflow: hidden;
        text-align:right;
        margin: 0;
        padding: 0;
        // height:px;
        img{
            max-height:50px;
            float:left
        }
        a{        
            font-size: 36px;
            font-family: 'Roboto';
            color:white;
            // float: right;
            text-align:center;
            padding: 10px;
        }
        a:last-child{
            padding-right: 20px;
        }

        

        // @media(min-width: 769px) {

        // }
    `;

    return (
        <Nav>
            <NavLink exact to="/"><img src="https://lh3.googleusercontent.com/proxy/xCQUEJPAhd1EbsErefc0gqcC9drrBwPoDmOnLN6b8kIaTUVhKAHbMlnXBup3JKLNL6VJ2MQpyqh-zeRKCGoXyhnAhjnHQlM5dJey1-JyNO2SlPODka2vDO8tr9P2-t5s_qD0mXRz"/></NavLink>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/characters">Characters</NavLink>
            <NavLink to="/about">About</NavLink>
        </Nav>
    );
}

export default Navbar;
