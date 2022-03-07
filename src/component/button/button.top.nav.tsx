import React from 'react'
import styled from "styled-components";
import * as color from "../color"
import {Link} from "react-router-dom"

interface Props{
children:any,
to:string
}
export const Button_top_nav = (props:Props) => {
  const {children,to} = props

  return (
    <Button to={to}>
      {children}
    </Button>
  )
}

const Button = styled(Link)`
 border:thin solid transparent ;
 background-color:transparent ;
 transition:300ms ;
 color:${color.C_FFFFFF};
 cursor:pointer ; 
 text-decoration:none ;
 padding:6px 9px;
 display :flex ;

font-family: Helvetica;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 20px;

&:hover{
  background-color:${color.C_FFFFFF} ;
  color:${color.C_0078D4};
}

`
