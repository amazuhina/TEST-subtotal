import React from 'react'
import styled from 'styled-components'
import {useSelector} from "react-redux";
import {dataSelector, isLoadingSelector} from "../../../redux/slice";
import {Item} from "./item";
import {Sorting} from "./sorting";
import {Loader} from "../../loader/loader";


const ListStl = styled.div` 
  background-color: transparent;
`




export const List = () => {

  const data = useSelector(dataSelector)

  const isLoading = useSelector(isLoadingSelector)

  return (
    <ListStl>
      {
        isLoading
          ? <Loader/>
          : (
            <>
              <Sorting/>
              {
                data.map(i =>
                  <Item
                    name={i.name}
                    date={i.date}
                    info={i.info}
                    url={i.url}
                    success={i.success}
                    rocketId={i.rocketId}
                  />
                )
              }
            </>
          )
      }


    </ListStl>
  )
}

