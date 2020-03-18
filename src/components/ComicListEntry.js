/** @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';
import styled from '@emotion/styled/macro';

const Content = styled.div`
    display: block;
    text-align: center;
    margin: 50px;
`;

const Title = styled.span`
    display: inline-block;
`;

function ComicListEntry(props) {
    // return (
    //     <div>
    //         <a href={`/comics/${props.comic.id}`}>{props.comic.title}</a>
    //     </div>
    // );
    return (
        <Content>
            <a href={`/comics/${props.comic.id}`}><img height="400" src={props.comic.photoUrl} alt="comic photo" /></a>
            <br />
            <Title>{props.comic.title}</Title>
        </Content>
    )
}

export default ComicListEntry;