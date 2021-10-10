import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {ButtonStart} from "../buttons/button-start";
import {useDispatch, useSelector} from "react-redux";
import {finishLoading, pushData, sortStatusSelector, SortStatusType, startLoading} from "../../redux/slice";
import {List} from "./list/list";
import {Loader} from "../loader/loader";
import {useFetchCards} from "../hooks/fetchCards";


const ContainerStl = styled.div`
  padding: 0 20px;
  max-width: 900px;
  margin: 0 auto;
`

const TitleStl = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: right;
`



export const Container = () => {

  const [showList, setShowList] = useState(false)

  const [fetchCards] = useFetchCards()

  const onStart = () => {
    fetchCards()
    setShowList(true)
  }

  return (
    <ContainerStl>
      <TitleStl>Успешные космические миссии SpaceX за 2015-2019 года</TitleStl>
      <ButtonStart
        text={'Показать'}
        onClick={onStart}
      />
      {
        showList ? <List/> : null
      }
    </ContainerStl>
  )
}

