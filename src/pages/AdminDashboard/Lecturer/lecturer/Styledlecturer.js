import styled from "styled-components";

export const ContentBox = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    padding: 5px;

`
export const ExamLogo = styled.div`
    padding: 10px;
    position: relative;
    @media (max-width: 1000px){
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 10px;
        
    }


`
export const FormBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: 1000px){
        justify-content: none;
        align-items: none;
        margin: 0 auto;
        width: 100%;
        
    }


`
export const LoginText = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 22px;
    color: #000000;
    margin-bottom: 50px;
    margin-top: 50px;
    @media (max-width: 1000px){
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        color: #000000;
        margin-bottom: 5px;
        margin-top: none;
        
    }



` 
export const FormInput = styled.div`
    width: 100%;
    @media (max-width: 1000px){
        padding: 20px;

    }


`
export const InputBox = styled.div`

    & label{
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        letter-spacing: 0.03em;
        color: #000000;
        margin-bottom: 3px;

    }

    & input{
        color: #8B8B8B;
        width: 650px;
        padding: 17px;
        border-radius: 10px;
        border: 1px solid #CFCFCF;
        margin-top: 7px;
        margin-bottom: 7px;
        @media (max-width: 1000px){
            width: 100%;
        
    }



    }

    & p{

        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        @media (max-width: 1000px){
            font-size: 12px;
        
    }



        & a{

            text-decoration: none;
            font-weight: 400;
            color:#F59E0B;

        }
    }

`

export const SubmitButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 40px;
    @media (max-width: 1000px){
        margin-top: 20px;
        margin-bottom: 20px;
        
    }

    & input{
        background-color: #F59E0B;
        width: 522px;
        padding: 17px;
        border-radius: 10px;
        border: 1px solid #CFCFCF;
        margin-top: 7px;
        margin-bottom: 7px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        color: #FFFFFF;
    @media (max-width: 1000px){
        width: 100%;
        
    }
    }


`
export const FooterBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

`
export const QuickLinks = styled.div`
    display: flex;
    flex-direction: row;

    & ul{
        display: flex;
        text-decoration: none;
        flex-direction: row;
        justify-content: center;

    }

    & span{
        width: 100%;
        text-align: center;

        & a{
            text-decoration: none;
            color: #CFCFCF;
            width: 100%;
            padding: auto;
            text-align: center;
            text-overflow: none;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 22px;
            text-transform: none;
            @media (max-width: 1000px){
                text-decoration: none;
            color: #CFCFCF;
            width: 100%;
            /* padding: auto; */
            text-align: center;
            text-overflow: none;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 22px;
            text-transform: none;
            
    }


        }
    }

`
export const FooterIcon = styled.div`
    margin-top: 15px;
    margin-bottom: 15px;

`

export const Copyright = styled.div`

    & p{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: #CFCFCF;

    }

`
