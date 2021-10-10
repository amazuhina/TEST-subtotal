import React from 'react'
import styled from 'styled-components'
import {sortList} from "../../../consts";
import {useDispatch, useSelector} from "react-redux";
import {setSortStatus, sortIncrease, sortStatusSelector, SortStatusType} from "../../../redux/slice";
import {useFetchCards} from "../../hooks/fetchCards";



const SortingStl = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-end;
`


const SelectStl = styled.select`
  min-width: 250px;
  height: 27px;
  outline: none;
  border: 1px solid #d6d0d0;
  font-size: 14px;
  margin-right: 15px;
  color: #251c1c;
  border-radius: 3px;
  padding: 0 5px;
  cursor: pointer;
`

export const Sorting = () => {

  const [fetchCards] = useFetchCards()

  const sortStatus = useSelector(sortStatusSelector)

  const dispatch = useDispatch()



  const onSelect = (event) => {
    const value = event.target.value

    const payload = {
      sortStatus: value
    }
    dispatch(setSortStatus(payload))
    console.log('Selected')
    console.log(sortStatus)

    setTimeout(() => {
      console.log('Selected async')
      console.log(sortStatus)
    }, 1000)

    fetchCards()
  }

  return (
    <SortingStl>
      <SelectStl onChange={onSelect}>

            <option selected={sortStatus === SortStatusType.DESC} value={SortStatusType.DESC}>В порядке убывания</option>
            <option selected={sortStatus === SortStatusType.ASC} value={SortStatusType.ASC}>В порядке возрастания</option>

      </SelectStl>
    </SortingStl>
  )
}

