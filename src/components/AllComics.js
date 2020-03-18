/** @jsx jsx */

import React from 'react';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled/macro';

import ComicListEntry from './ComicListEntry';

const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: 20px;
    margin-right: 20px;
`;

function AllComics(props) {
    console.log(props.comics);
    var list = props.comics.map(c => {
        return (
            <div key={c.id}>
                <ComicListEntry comic={c} />
            </div>
        )
    });

    return (
        <Content>
            {list}
        </Content>
    );
}

export default AllComics;