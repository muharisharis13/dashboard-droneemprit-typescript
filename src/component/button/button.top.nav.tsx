import React from 'react'
import styled from "styled-components";
import * as color from "../color"
import {Link} from "react-router-dom"

interface Props{
children:any,
to:string,
onClick:Function,
active:boolean
}
export const Button_top_nav = (props:Props) => {
  const {children,to,onClick,active} = props

  return (
    <Button to={to} onClick={()=>onClick()} active={active}>
      {children}
    </Button>
  )
}

const Button = styled(Link)<{active:boolean}>`
 border:thin solid transparent ;
 transition:300ms ;
 cursor:pointer ; 
 text-decoration:none ;
 padding:6px 9px;
 display :flex ;
 
 font-family: Helvetica;
 font-style: normal;
 font-weight: normal;
 font-size: 14px;
 line-height: 20px;
 
 background-color:${({active})=> active ? color.C_FFFFFF :"transparent"} ;
 color:${({active})=> active ? color.C_0078D4 : color.C_FFFFFF};
&:hover{
  background-color:${color.C_FFFFFF} ;
  color:${color.C_0078D4};
}

`
