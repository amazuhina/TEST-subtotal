import React from 'react'
import styled from 'styled-components'


const ButtonModalWindowStl = styled.button` 
  width: 300px;
  padding: 5px 10px;
  border: 2px solid rgba(255, 255, 255, .4);
  background-color: transparent;
  color: rgba(255, 255, 255, .4);
  font-weight: 700;
  text-transform: uppercase;  
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: rgba(255, 255, 255, .4);
    color: #282c34;
  }
`




export const ButtonModalWindow = ({text, onClick}) => {

  return (
    <ButtonModalWindowStl onClick={onClick}>
      {text}
    </ButtonModalWindowStl>
  )
}

