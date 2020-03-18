/** @jsx jsx */

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
    var list = props.comics.map(c => {
        return (
            <div key={c.id}>
                <ComicListEntry comic={c} />
            </div>
        )
    });

    return (
        <Content class="flex-container space-between">
            {list}
        </Content>
    );
}

export default AllComics;