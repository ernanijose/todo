import styled from 'styled-components';

export const Container = styled.div`
    width: 260px;
    height: 60px;
    background: ${props => props.actived ? '#EE6b26' : '#20295f'};
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    transition: background 0.3s;

    img {
        width: 35px;
        height: 35px;
    }

    span{
        color: #fff;
        font-size: 18px;
        font-weight: bold;
        align-self: flex-end;
    }

    &:hover{
        background: #EE6b26;
    }
`;