/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled/macro';

function Article({ title, text, image }) {
    const Title = styled.h1`
        margin: 0px;
    `;

    const Content = styled.div`
        border: 1px solid black;
        border-radius: 1px;
        margin: 30px 0;
        padding: 5px;
        box-shadow: 3px 4px 4px #D7D7D7;
    `;

    const Image =styled.div`
        float:left;
        padding: 3px;
        padding-right: 10px;
        img{
            height: 100px;
        }
    `;

    return (
        <Content>
            <Image><img src={image} alt="article icon" /></Image>
            <Title>{title}</Title>
            <p>{text}</p>
        </Content>
    );
}

export default Article;
