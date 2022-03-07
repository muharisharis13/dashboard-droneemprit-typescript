import React from 'react'
import styled from "styled-components"
import * as Button from "../button";
import * as assets from "../../assets"


const data_nav = [
  {
    icon:"sqeure-double",
    name:"Gallery",
    path:"/gallery"
  },
  {
    icon:null,
    name:"Report Builder",
    path:"/report_builder"
  },
  {
    icon:null,
    name:"History",
    path:"/history"
  },
  {
    icon:null,
    name:"My Template",
    path:"/my_template"
  },
  {
    icon:null,
    name:"Scenario",
    path:"/scenario"
  },
]

export const Navigations_top = () => {
  return (
    <Container>
      {
        data_nav.map((item:any,idx:number)=>(
          <Button.Button_top_nav key={idx} to={item.path}><i className={item.icon}></i>{item.name}</Button.Button_top_nav>
        ))
      }
    </Container>
  )
}

const Container = styled.div `
  display:flex ;

`
