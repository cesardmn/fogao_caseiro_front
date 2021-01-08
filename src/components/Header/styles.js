import styled from 'styled-components'

export const MenuHeader = styled.header`
  height: 10vh;
  width: 100%;
  display: flex;
  position: relative;

  border-bottom: 1px solid grey;

  .bg {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: -1;
    background-image: url('https://www.fogaocaseiro.com.br/imgs/bg.png');
    background-size: cover;
    filter: blur(1px);
    -webkit-filter: blur(1px);
  }

  img {
    height: 100%;
    width:20%;
    object-fit: contain;
  }
`

export const SocialIcons = styled.div`

  height: 100%;
  width: 80%;

  /* padding: 0.5rem; */

  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;

  color: white;

  ul {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  li {
    height:100%;
    width:100%;
    display: flex;
    margin-top: 0.4rem;
    color: white;
  }

  span {
    margin-left: 0.5rem;
  }

`