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

    @media (max-width: 500px){
        margin: 0 0 0 5px;
        min-height: 30px;
        margin-left: 0;
        margin-top: -10px;
        border-radius:10px;
    }
`;