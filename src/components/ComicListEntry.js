/** @jsx jsx */

import { jsx } from '@emotion/core';
import styled from '@emotion/styled/macro';

const Content = styled.div`
    display: block;
    text-align: center;
    margin: 50px;
    width:33%
    img{
        object-fit: contain;
        background-size: cover;
    }
    .contain{
        object-fit: contain;
    }
`;

const Title = styled.span`
    display: inline-block;
`;

function ComicListEntry(props) {
    return (
        <Content>
            <a href={`/comics/${props.comic.id}`}><img width="500vh" height="500vh" class="contain" src={props.comic.photoUrl} alt="comic photo" /></a>
            <br />
            <Title>{props.comic.title}</Title>
        </Content>
    )
}

export default ComicListEntry;