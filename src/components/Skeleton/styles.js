import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  

  display: flex;
  align-items: center;
  justify-content: center;

  * {
    margin: 0;
    box-sizing: border-box;
    margin: 0;
    list-style: none;

    text-decoration:none;

    color: inherit;
  }
`
export const Print = styled.div`
  height: 100%;
  width: 100%;
  flex-direction:row;
  min-width:360px;
  max-width: 700px;
  border: 1px solid #e2e2e2;

  span {
    font-size: 1rem;
  }

`

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
    /* justify-content: space-around; */
  }

  li {
    height:100%;
    width:100%;
    display: flex;
    margin-top: 0.4rem;
  }

  span {
    margin-left: 0.5rem;
  }

`

export const MenuMain = styled.main`
  height: 85vh;
  width: 100%;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items:center;

  padding: 0.5rem;

  overflow: hidden;

  h1 {
    font-size:1rem;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.4rem;

    font-size: 0.6rem;

    h1 {
      color: #046d32;
    }

    p {
      margin-left: 0.5rem;
      color: grey;
    }

  }

  ul {
    width: 100%;
    height: 100%;
    padding: 0.5rem;

    display:flex;
    flex-direction: column;
    align-items:center;
  }

  li {

    display:flex;
   

    /* width: 100%; */
    margin-bottom: 0.5rem;

    .itemID {
      color: #ff5700;
    }

    .salePrice {
      color: green;
      font-size:0.8rem
    }
  }




`

export const MenuFooter = styled.footer`
  height: 7vh;
  width: 100%;

  

  border-top: 1px solid #e3e3e3;

  display: flex;
  flex-direction: column;
  align-items:  center;

  span {
    color: orange;
    margin-top: 0.3rem;
  }
  p {
    color: grey;
    font-size: 0.7rem;
  }

`
