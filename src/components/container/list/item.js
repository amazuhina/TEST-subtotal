import React, {useState} from 'react'
import styled from 'styled-components'
import {ButtonModalWindow} from "../../buttons/button-modal-window";
import {ModalWindow} from "../../modal-window";


const ItemStl = styled.div` 
  width: 100%;
  border: 2px solid rgba(255, 255, 255, .4);
  padding: 15px 10px;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  margin-bottom: 15px;
  font-size: 14px;
`

const TextBlockStl = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
`

const RowStl = styled.p`
  display: flex;
  color: #ddd;
  text-align: left;
`



const ImageStl = styled.img`
  width: 256px;
  height: 256px;
`


export const Item = ({name, date, info, url, success, rocketId}) => {

  const [isShowModalWindow, setIsShowModalWindow] = useState(false)

  const [imageLink, setImageLink] = useState(null)

  const getImages = () => {
    fetch('https://api.spacexdata.com/v4/rockets/'+ rocketId)
      .then(res => res.json())
      .then(res => setImageLink(res.flickr_images[0]))
      .catch(errorMessage => {
        console.log(errorMessage.error)
      })
  }

  const onOpenModalWindow = () => {
    getImages()
    setIsShowModalWindow(true)
  }

  const onCloseModalWindow = () => {
    setIsShowModalWindow(false)
  }


  return (
    <ItemStl>
      <TextBlockStl>
        <RowStl>
          Название миссии: {name}
        </RowStl>
        <RowStl>
          Дата запуска: {date}
        </RowStl>
        <RowStl>
          Информация о запуске: {info}
        </RowStl>
        <RowStl>
          Миссия состоялась: {success ? 'да' : 'нет'}
        </RowStl>
        <ButtonModalWindow text={'Посмотреть фото ракеты'} onClick={onOpenModalWindow}/>
        {
          isShowModalWindow ? <ModalWindow onClose={onCloseModalWindow} /> : null
        }
      </TextBlockStl>
      <ImageStl src={url}/>
    </ItemStl>
  )
}

