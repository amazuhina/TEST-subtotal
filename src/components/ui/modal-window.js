import React from 'react'
import styled from 'styled-components'
import {Gallery} from "./gallery/gallery";
import {ButtonCloseModalWindow} from "./buttons/button-close-modal-window";


const ModalWindowStl = styled.div``

const OverlayStl = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0,0,0,.7);
`

const FormModalWindowStl = styled.div`
  position: fixed;
  top: 5vh;
  left: 20%;
  z-index: 100;
  width: 50%;
  max-height: 90vh;
  background: white;
  margin: 0 auto;
  padding: 1em;
`



export const ModalWindow = ({onClose, images}) => {

  return (
    <ModalWindowStl>
      <OverlayStl onClick={onClose}/>
      <FormModalWindowStl>
        <ButtonCloseModalWindow onClick={onClose}/>
        <Gallery images={images}/>
      </FormModalWindowStl>
    </ModalWindowStl>
  )
}