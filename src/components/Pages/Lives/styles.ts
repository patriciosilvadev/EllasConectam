import styled from 'styled-components';

export const Container = styled.div`
    position:sticky;
    flex-wrap:wrap;
    background-color: #c6f1ec;

    display:flex;
    flex-direction: column;
    align-items:center;

    
`;


export const Iframes = styled.div`
padding: 120px 0 0 6%;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 30px;
background-color: #c6f1ec;
margin-bottom:70px;

.teste{
    margin-top: 10px;
    
    .MyIframe{
            border:none;
            width:90%;
    }
    > h1 {
    }
    
}
@media (max-width: 900px){
    padding: 100px 0 0 6%;
    grid-template-columns: 1fr 1fr ;
    align-content:space-between;
    background-color: #c6f1ec;
    gap: 10px;
    .teste{
        .MyIframe{
            width:100%;
            border:none;
        }
    }
}
@media (max-width: 650px){
    padding: 100px 0 0 6%;
    grid-template-columns: 1fr  ;
    align-content:space-between;
    background-color: #c6f1ec;
    gap: 10px;
    .teste{
        .MyIframe{
            width:100%;
            border:none;
        }
    }
}

    
`;
