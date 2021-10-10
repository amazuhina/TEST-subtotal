import styled from 'styled-components'
import {Container} from "./components/container";


const AppStl = styled.div` 
  min-width: 320px;
  overflow-x: hidden;
`



export const App = () => {
  return (
    <AppStl>
      <Container/>
    </AppStl>
  )
}

