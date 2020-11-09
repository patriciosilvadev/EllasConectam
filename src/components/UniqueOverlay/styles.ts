import styled from 'styled-components';

export const Container = styled.div`
    position:sticky;
    top: 0;
    left:0;
    right:0;
    bottom:0;
`;
export const Header = styled.header`
    position:fixed;
    top: 0;
    left:0;
    right:0;

    
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 0 20px;
    min-height: 100px;
    margin-left:50px;
    border-radius:10px;
    
`;
export const Logo = styled.div`
    cursor: pointer;
    > img{
        max-height: 100px;
    }
`;
export const Burguer = styled.div`
    width: 24px;
    height: 24px;
    cursor: pointer;
    padding-right:5px;
`;
export const Footer = styled.footer`
    position:fixed;
    left:0;
    right:0;
    bottom:0;

    ul{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;

        li{
            list-style: none;

            font-size: 14px;
            &+li{
               margin: 10px 0 0 ; 
            }

            a{
                text-decoration: none;
                color: #939c41;
                &:hover {
                    color: #000;
                }
            }
        }
    }

    margin-bottom:30px;

`;