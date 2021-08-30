import styled from 'styled-components';

export const Container = styled.div`
    width: 250px;
    height: 200px;
    box-shadow: -7px 5px 20px -2px rgba(0,0,0,0.61);
    border-radius: 10px;


    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin: 20px;

    cursor: pointer;
    transition: all 0.3s ease;

    &:hover{
        opacity: 0.7;
    }
`;

export const TopCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`;

export const BottomCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;

    strong{
        color: #EE6B26;
        font-weight: bold; 
    }

    span{
        color: #707070;
    }
`;