import styled from "styled-components";

export const Card = styled.div`
    border: black solid 2px;
    border-radius: 8px;
    width: 50vw;
    background: #1d2352;
    margin-bottom: 15px;
    z-index: -1;
`

export const CardHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0px 50px 0px 50px;
`

export const UserTitle = styled.h5`
    font-size: 16px;
    color: white;
`

export const PostDate = styled.h5`
    font-size: 16px;
    color: #7d8a50;
`

export const CardBody = styled.div`
    margin: 0px 50px 0px 50px;
`

export const UserPost = styled.p`
    color: white;
    font-size: 10;
`