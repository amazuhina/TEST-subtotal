import React from 'react'
import styled from 'styled-components'


const ButtonStartStl = styled.button` 
  width: 220px;
  padding: 10px 20px;
  border: 3px solid #fff;
  background-color: transparent;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  display: block;
  margin: 50px auto;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #fff;
    color: #282c34;
  }
`



export const ButtonStart = ({text, onClick}) => {

  return (
    <ButtonStartStl onClick={onClick}>
      {text}
    </ButtonStartStl>
  )
}

