import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;

`
export const Content = styled.div`
    display: flex;
    justify-content: space-between;



`

export const LeftDiv = styled.div`
    width: 1000px;
    height: 700px;
    margin-right: 45px;
    padding: 20px;

    & h2{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 28px;
        /* identical to box height, or 156% */


        color: #54565A;
    }
    & h3 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 28px;
        /* identical to box height, or 200% */


        color: #54565A;
        margin-bottom: 20px;

   
    }

`



export const FormBox = styled.div`
    width: 100%;

        & form{
            width: 100%;
        }
`

export const InputDiv = styled.div`
    width: 460px;
    margin-bottom: 18px;

    & label{
        font-family: 'Inter';
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        margin-bottom: 5px;
        /* line-height: 20px; */
        /* identical to box height, or 143% */

        display: flex;
        align-items: center;

        color: #171717;
    }

        & input{
            width: 100%;
            padding: 15px;
            background: #FFFFFF;
            border: 1px solid #E5E5E5;
            border-radius: 6px;

        }

        & select{
            width: 100%;
            padding: 15px;
            background: #FFFFFF;
            border: 1px solid #E5E5E5;
            border-radius: 6px;

        }
`
export const PasswordBox = styled.div`
    & label {
        font-family: 'Inter';
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        margin-bottom: 5px;
        /* line-height: 20px; */
        /* identical to box height, or 143% */

        display: flex;
        align-items: center;

        color: #171717;

    }
`

export const PasswordDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    background: #FFFFFF;
    border: 1px solid #E5E5E5;
    border-radius: 6px;

        & input{
            width: 700px;
            padding: 10px;
            border: none;
            background: none;

        }
        & p{
            & a{
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 20px;
                /* identical to box height, or 143% */

                display: flex;
                align-items: center;

                text-decoration: none;

                color: #F59E0B;
            }
        }
    
`

export const Note = styled.div`
    margin-top: 15px;
    width: 100%;
    height: 92px;
    background: rgba(253, 223, 173, 0.1);
    border: 1px solid rgba(91, 60, 222, 0.1);
    border-radius: 6px;
    display: flex;
    padding: 12px;
`

export const Icon = styled.div`
    margin-right: 12px;
`
export const NoteText = styled.div`

        & h5 {
            font-family: 'Inter';
            font-style: normal;
            font-weight: bold;
            font-size: 14px;
            line-height: 20px;
            margin-bottom: 4px;
            color: #F59E0B;
        }

        & p{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            /* or 143% */


            color: #F59E0B;
        }
`

export const RightDiv = styled.div`
    width: 296px;
    margin-left: 45px;
    height: 556px;
    padding: 20px;
    


`

export const ProImg = styled.div`
`

export const Details = styled.div`
    padding-left: 10px;

        & h1 {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 22px;
            letter-spacing: 0.05em;
            margin-top: 25px;
            margin-bottom: 25px;


            color: #54565A;
        }
`

export const Text = styled.div`
    margin-bottom: 10px;

        & p{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 22px;
            letter-spacing: 0.05em;

            color: #A6A6A6;
       }

        & h3{
            font-family: 'Inter';
            font-style: normal;
            font-weight: bold;
            font-size: 12px;
            line-height: 22px;
            letter-spacing: 0.05em;

            color: #54565A;
        }
`