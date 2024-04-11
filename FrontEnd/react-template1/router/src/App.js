import { React } from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './style/global'

const theme = {
  color: {
      textColor: 'white'
  } 
}

const Wrapper = styled.div`
display: grid;
place-items: center;
height: 100vh;
`
let myColor = 'red';

const Button = styled.button`
  background-color: ${(props) => props.bg};
  color: ${ ({theme}) => theme.color.textColor};
  padding: 15px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  transition: 100ms all ease-in-out;

  &:hover{
    color: lightblue;
    background: white;
    border: 2px solid lightblue;
    border-radius: 8px;
  }
  &:focus{
    color: tomato;
    background: white;
    border: 2px solid tomato ;
    border-radius: 8px;
  }

  &:after{
    content: '👌';
  }

  span{
    color: ${myColor};
    b{
      color: #5adaff
    }
    .b{
      font-weight: 800;
    }
    &:hover{
      color: #3c4fe0;
    }
  }

`
const Para = styled.p` 
  color: tomato;
  font-weight: 600;
  font-size: 20px;
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <Wrapper> */}
      <GlobalStyle />
        <Button bg='green'>
          Button
          <span> like and share <b className='b'>bold</b></span>
        </Button>
        <Para>Paragraph</Para>
  
      {/* </Wrapper> */}
    </ThemeProvider>
  )
}

export default App;
