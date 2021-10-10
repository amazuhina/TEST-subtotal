import React from 'react'
import { css } from "@emotion/react";
import {BounceLoader} from "react-spinners";



const override = css`
  display: block;
  margin: 0 auto;
`

export const Loader = () => {

  return (
    <div className="sweet-loading">
      <BounceLoader
        color={'#fff'} css={override} size={60} />
    </div>
  );
}
