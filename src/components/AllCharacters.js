/** @jsx jsx */

import { jsx } from '@emotion/core';
import styled from '@emotion/styled/macro';

import CharacterListEntry from './CharacterListEntry';

const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: 20px;
    margin-right: 20px;
`;

function AllCharacters(props) {
    var list = props.characters.map(c => {
        return (
            <div key={c.id}>
                <CharacterListEntry character={c} />
            </div>
        )
    });

    return (
        <Content>
            {list}
        </Content>
    );
}

export default AllCharacters;
