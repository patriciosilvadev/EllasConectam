import styled from 'styled-components';

export const Container = styled.div`
    height:100vh;
    background-color: #c6f1ec;
    padding: 120px 0 100% 0;
`;

export const Content = styled.div`
    position:sticky;
    
    > h1{
        padding: 0 0 0 6%;
        align-items:center;
    }
    > img{
        width:100%
    }
    .subscrib{
        padding: 50px 6% 120px 6%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 30px;
        background-color: #c6f1ec;
        .change{
            >img{
                border-radius:100px;
                max-width:300px;
                max-height:220px;
            }
            >h1{
                font-size: 27px;
            }
            > h2{
                font-size: 20px;
            }
        }
        .change1{
            >img{
                border-radius:150px;
                max-width:300px;
                max-height:220px;
            }
            >h1{
                font-size: 27px;
            }
            > h2{
                font-size: 20px;
            }
        }
        .change2{
            >img{
                border-radius:150px;
                max-width:300px;
                max-height:220px;
            }
            >h1{
                font-size: 27px;
            }
            > h2{
                font-size: 20px;
            }
        }
        .change3{
            >img{
                border-radius:150px;
                max-width:300px;
                max-height:220px;
            }
            >h1{
                font-size: 27px;
            }
            > h2{
                font-size: 20px;
            }
        }
    }
    @media (max-width: 900px){
        .subscrib{
            grid-template-columns: 1fr 1fr ;
            gap: 30px;
        }
    }
    @media (max-width: 650px){
        > h1{
            opacity: 0;
        }
        .subscrib{
            margin-top:20px;
            grid-template-columns: 1fr  ;
            gap: 50px;
            padding: 0 0 20% 15%;
        }
    }
`;
