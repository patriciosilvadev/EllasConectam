import styled from 'styled-components';

export const Container = styled.div`

    display:flex;
    flex-direction:column;
    justify-content:space-between;
    flex:1;
`;

export const Heading = styled.div`

    margin-top:16.5vh;
    text-align: center;

    > h1 {
        font-weight: 500;
        font-size: 40px;
        line-height: 48px;
        color: #393c41;
        margin: 0 70px 0 250px;
    }
    > h2 {
        font-weight: normal;
        font-size:24px;
        line-height:20px;
        color: #5c5e62;
        margin: 30px 60px 0 400px;
    }
    .Divs{
        margin: 5px 100px 0 400px;
        >h2{
            font-weight: normal;
            font-size:24px;
            line-height:20px;
            color: #5c5e62;
        }
        >h1{
        font-weight: 500;
        font-size: 40px;
        line-height: 30px;
        color: #393c41;
        margin: 20px 70px 0 70px;
        }
    }
    .DivSubjectAll{
        margin: 5px 100px 0 100px;
        >h2{
            margin: 5px 90px 0 90px;
            font-weight: 500;
            font-weight: normal;
            font-size:24px;
            line-height:20px;
            color: #5c5e62;
        }
    }
    @media (max-width: 1100px){
        .DivSubjectAll{
            > h2 {
                margin: 30px 60px 0 60px;
            }
            >h1{
                margin: 0 70px 0 70px;
            }
        }
        .Divs{
            margin: 5px 50px 0 60px;
        }
        >h1{
            margin: 0 70px 0 70px;
            font-size: 30px;
        }
        >h2{
            margin: 0 70px 0 70px;
            font-size: 20px;
        }
        
    }  
    @media (max-width: 800px){
         .DivSubjectAll{
            > h2 {
                margin: 0 180px 0 180px;
            }
        }
        .Divs{
            > h2 {
                margin: 0 20px 0 10px;
                font-size:18px;
            }
            >h1{
                font-size:28px;
            }
        }
        > h1{
            margin: -60px 200px 0 200px;
            font-size: 28px;
        }
        > h2 {
                margin: 0 180px 0 180px;
        }
    }
`;
export const Buttons = styled.div`
    display:flex;
    flex-direction:column;  
    justify-content:space-between;
    align-items: center;
    margin-bottom:130px;
    margin: 0 200px ;
    > button{
        background-color: #1a1720;
        color:#fff;
        opacity: 0.8;

        font-size:12px;
        font-weight:500;
        letter-spacing: 0.4px;
        text-transform: uppercase;

        padding: 13px 40px;
        border-radius: 20px;
        border: none;
        outline: 0;
        cursor:pointer;

        &.white {
            background: #fff;
            color:  #1a1720;
            opacity: 0.65;
        }
        & + button{
            margin: 10px 0 0;
        }
    }
    @media (min-width: 800px){
            flex-direction: row;
            margin-bottom: 90px;
        
        > button + button {
            margin: 0 0 0 10px ;
        }
        > h2 + h2 {
            margin: 30px 60px 0 60px;
        }
    }  
    @media (max-width: 500px){
        flex-direction: row;
        >.black{
            padding: 8px 35px;
            margin: 0 10px 50px 0  ;
            font-size: 11px;
            text-align: row;
        }
        >.white{
            padding: 13px 40px;
            margin-bottom:55px;
        }
    }

`;
export const Img = styled.div`
    > img {
        max-height: 60vh;
        max-width: 32% ;
        display:table-cell;
        float:left;
        opacity:1;
        border-radius: 40px;
        margin-left:20px;
    }
    @media (max-width: 800px){
        > img{
            max-height: 0;
            max-width: 0;
            opacity: 0;
        }
    }
    @media (max-width: 500px){}

`;
