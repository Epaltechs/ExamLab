import styled from "styled-components";

export const MainBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
`

export const MainContent = styled.div`
    height: 100%;
    width: 100%;
    margin-top: -120px;
    overflow-y: auto;
    overflow-x: hidden;

`
export const Content = styled.div`
    /* padding: 25px; */
    @media (max-width: 1000px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
     
    }

    & h4 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 18px;
        margin-bottom: 10px;
        margin-left: 40px;
        color: #000000;


    }

    & h2 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 25px;
        line-height: 22px;
        color: #000000;
        /* margin-top: 20px; */
        margin-bottom: 20px;

    }

`
export const SecondRow = styled.div`
    /* padding: 25px; */
    margin-top: 20px;
    @media (max-width: 1000px){
        display: flex;
        flex-direction: column;
        align-items: center;
     
    }

    & h4{
         color: #8B8B8B;


    }

`
export const BoxContent = styled.div`
    margin-left: 40px;
    display: flex;
    flex-direction: column;
    width: 304px;
    /* margin-top: 20px; */
    border-radius: 7px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    @media (max-width: 1000px){
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 240px;
        margin-top: 20px;
        border-radius: 7px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
     
    }

`
export const SubContent = styled.div`
     margin-left: 40px;
     display: flex;
     @media (max-width: 1000px){
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
     
    }


`
export const BoxContent1 = styled.div`
    margin-right: 60px;
    flex-direction: column;
    width: 304px;
    height: 170px;
    margin-top: 20px;
    border-radius: 7px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    @media (max-width: 1000px){
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 240px;
        margin-top: 20px;
        border-radius: 7px;
        margin-right: 0px;
        margin-right: 0px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
     
    }
 

`
export const BoxContent2 = styled.div`
    margin-right: 60px;
`
export const BoxOne = styled.div`
    height: 160px;
    background: #000;
    border-radius: 7px;

`
export const BoxTwo = styled.div`
    padding: 12px;
    border-radius: 7px;
    height: 200px;
    background-color: #fff;

`
export const Course = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-style: normal;
    align-items: center;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    margin-top: 15px;
    margin-bottom: 15px;

    /* identical to box height */



    color: #000000;

`
export const Courses = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-style: normal;
    align-items: center;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    margin-top: 15px;
    margin-bottom: 15px;

    /* identical to box height */



    color: #000000;

`
export const Setting = styled.div`
    display: flex;

`
export const Icon = styled.div`
    width: 10.5px;
    height: 13.5px;

`
export const Icons = styled.div`
    width: 10.5px;
    height: 13.5px;
    color: #8B8B8B;

`
export const DateIcon = styled.div`

`
export const Date = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    & P{
        font-size: 12px;
        color: #8B8B8B;

    }

`
export const Title = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    margin-top: 20px;
    line-height: 17px;
    color: #8B8B8B;

`
export const Author = styled.div`
    display: flex;
    flex-direction: row;

`
export const AuthorName = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    & p{
        margin-left: 10px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        /* identical to box height */

        letter-spacing: -0.01px;

    }

`
export const Name = styled.p`
    color: #8B8B8B;

`