import styled, { createGlobalStyle } from 'styled-components'


export  const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'S-CoreDream-3Light';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  *{
    font-family: 'S-CoreDream-3Light', sans-serif;

  }
body {
  font-size: 62.5%;
  background-color: #fff;
  overflow: hidden;
  user-select: none;
  
}
h1 {
  width: 100%;
}
input {
  outline: none;
  padding: 0.8rem;
  margin: 0.8rem;
  
}
button {
  padding: 0.8rem;
  margin: 0.8rem;
  outline: none;
  border: none;
  cursor: pointer;
}
label {
  padding: 0.8rem;
  margin: 0.8rem;
}
`

 export const Title = styled.h1`
  margin: 0.8rem;
  font-size: 2.4rem;
`
 export const SubTitle =styled.h2`
  position: relative;
  font-size: 0.8rem;
  color: #eff2fa;
  background-color: #0004;
  padding: 0.4rem 0.8rem;
  margin: 0.8rem;
  border-radius: 0.8rem;
  box-shadow: inset .05rem .05rem .5em 0.05rem rgba(0,0,0,0.1);
  font-weight: 300;
`
 export const Total = styled.p`
  text-align: left;
  margin-left: 1.2rem;
  width: 100%;
  color: #080808;
  font-weight:700;
  font-size: 0.8rem;
  //background-color: orange;
  
`
 export const Div = styled.div`
width: 100%`
 export const Wrapper = styled.div`
display: flex;
  flex-wrap: wrap;
  height: 100%;
  max-height: 93vh;
  width: 50vw;
  min-width: 440px;
  background-color: #eee;
  border-radius: 1.2rem;
  margin: 0 auto;
  margin-top: 0.8rem;
  box-shadow: inset .05rem .05rem .5em 0.05rem rgba(0,0,0,0.1);
  overflow: auto;
  padding: 1.2rem 0.8rem;
  padding-bottom: 2.8rem;
  &{
    ::-webkit-scrollbar {
      display: none; /* 크롬, 사파리, 오페라, 엣지 */
    }
  }
  
`
