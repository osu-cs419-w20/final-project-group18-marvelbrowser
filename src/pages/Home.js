import React from 'react';
import styled from '@emotion/styled/macro';
import { jsx, css } from '@emotion/core';

function Home() {
    const Home = styled.div`
       img{
        //    height: 80%;
           width:70%;
           display: block;
           margin-left: auto;
           margin-right: auto;
           margin-top: 30px;
       }
    `;

    return (
        <Home>
            <img src="https://i.4pcdn.org/tv/1551365034349.jpg"/>
        </Home>
    );
}

export default Home;
