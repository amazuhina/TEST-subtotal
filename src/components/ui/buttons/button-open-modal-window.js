import React from 'react'
import styled from 'styled-components'


const ButtonOpenModalWindowStl = styled.button` 
  max-width: 300px;
  padding: 5px 10px;
  border: 2px solid rgba(255, 255, 255, .4);
  background-color: transparent;
  color: rgba(255, 255, 255, .4);
  font-weight: 700;
  text-transform: uppercase;  
  cursor: pointer;
  margin-bottom: 15px;
  transition: 0.3s;
  &:hover {
    background-color: rgba(255, 255, 255, .4);
    color: #282c34;
  }
`



export const ButtonOpenModalWindow = ({text, onClick}) => {

  return (
    <ButtonOpenModalWindowStl onClick={onClick}>
      {text}
    </ButtonOpenModalWindowStl>
  )
}

