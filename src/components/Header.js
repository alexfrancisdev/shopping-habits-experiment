import React from 'react'

import styled from 'styled-components';

const HeaderBanner = styled.div`
    width: 100vw;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 5px #C4D600 solid;
    background-color: white;
`

const HeaderContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
`

const HeaderTitle = styled.h2`
    color: #154734;
    // font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
    font-size: 45px;
`

function Header(props) {
    return (
        <HeaderBanner>
            <HeaderContent>
                <HeaderTitle>Roobarbs</HeaderTitle>
            </HeaderContent>
        </HeaderBanner>
    )
}

export default Header