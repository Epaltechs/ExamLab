import React from 'react'
import styled from "styled-components"


function SimpleHeader({title, subTitle}) {
  return (
    <ContainerMain>
        
        { subTitle !== undefined ? (
            <>
            <TitleContainer>{title}/ <SubtitleContainer>{subTitle}</SubtitleContainer></TitleContainer>
            </>
        ): (
            <>
            <TitleContainer>{title}</TitleContainer>
            </>
        )}
    </ContainerMain>
  )
}

export default SimpleHeader


const ContainerMain = styled.div`
    display: flex;
    flex-direction: row;
`

const TitleContainer = styled.h4`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height, or 140% */

    text-align: center;
    letter-spacing: 0.02em;

    color: #000000;
`

const SubtitleContainer = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    /* identical to box height, or 187% */

    text-align: center;
    letter-spacing: 0.02em;

    color: #54565A;
`