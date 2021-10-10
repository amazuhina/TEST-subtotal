import React, {useState} from 'react'
import styled from 'styled-components'
import {ButtonStart} from "./ui/buttons/button-start";
import {useSelector} from "react-redux";
import {sortStatusSelector} from "../redux/slice";
import {List} from "./list/list";
import {useFetchCards} from "./hooks/fetchCards";


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

  const actualSortType = useSelector(sortStatusSelector)

  const onStart = () => {
    fetchCards(actualSortType)
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

