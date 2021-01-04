import styled from 'styled-components'

export const Container = styled.header`
  height: 10vh;
  width: 100vw;
  border: 2px solid black;
  display: flex;
  align-items: center;
`

export const Logo = styled.div`
  div {
    height: 10vh;
    width:30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    padding:0.5rem; 
  }
  h3 {
    font-family: 'Dancing Script', cursive;
    color: #046d32;
    margin:0;
  }

  span {
    font-size: 8px;
    color: #ff5700;
  }

`
export const Info = styled.div`
  height: 100%;
  width: 35%;
  border: 2px solid orange;
`