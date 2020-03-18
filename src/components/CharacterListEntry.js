/** @jsx jsx */

import { jsx } from '@emotion/core';
import styled from '@emotion/styled/macro';

const Content = styled.div`
    display: block;
    text-align: center;
    margin: 50px;
    width:33%
`;

const Title = styled.span`
    display: inline-block;
`;

function CharacterListEntry(props) {
    return (
        <Content>
            <a href={`/characters/${props.character.id}`}><img width="500vh" height="500vh"src={props.character.photoUrl} alt="comic photo" /></a>
            <br />
            <Title>{props.character.name}</Title>
        </Content>
    )
}

export default CharacterListEntry;