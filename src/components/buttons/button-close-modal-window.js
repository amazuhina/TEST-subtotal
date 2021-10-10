import React from 'react'
import styled from 'styled-components'


const ButtonCloseModalWindowStl = styled.button`   
  width: 20px;
  height: 20px;
  border: 1px solid #000;
  border-radius: 50%;
  color: #000;
  background-color: #fff;
  cursor: pointer;
  margin-bottom: 20px;
  transition: 0.3s;
  &:hover {
    background-color: rgba(255, 255, 255, .4);
    color: #282c34;
  }
`




export const ButtonCloseModalWindow = ({onClick}) => {

  return (
    <ButtonCloseModalWindowStl onClick={onClick}>
      x
    </ButtonCloseModalWindowStl>
  )
}

