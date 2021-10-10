import React from 'react'
import styled from 'styled-components'


const ButtonCloseModalWindowStl = styled.button`   
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  color: #fff;
  background-color: #aaa;
  cursor: pointer;
  margin-bottom: 20px;
  margin-left: 95%;
  transition: 0.3s;
  &:hover {
    background-color: #666;
  }
`




export const ButtonCloseModalWindow = ({onClick}) => {

  return (
    <ButtonCloseModalWindowStl onClick={onClick}>
      x
    </ButtonCloseModalWindowStl>
  )
}

