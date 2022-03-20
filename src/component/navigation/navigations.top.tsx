import React, {useState} from 'react'
import styled from "styled-components"
import {Button_top_nav} from "../button/button.top.nav";
import * as assets from "../../assets"


const data_nav = [
  {
    icon:"icon-sqeure-double",
    name:"Gallery",
    path:"/dashboard/gallery"
  },
  {
    icon:"icon-chart-multiple",
    name:"Report Builder",
    path:"/dashboard/report_builder"
  },
  {
    icon:"icon-history",
    name:"History",
    path:"/dashboard/history"
  },
  {
    icon:"icon-shape",
    name:"My Template",
    path:"/dashboard/my_template"
  },
  {
    icon:"icon-vector",
    name:"Scenario",
    path:"/dashboard/scenario"
  },
]

export const Navigations_top = () => {
  const [active, setActive] = useState<string>(window.location.pathname)

  return (
    <Container>
      {
        data_nav.map((item:any,idx:number)=>(
          <Button_top_nav 
            key={idx} 
            to={item.path}
            onClick={()=>setActive(item.path)}
            active={window.location.pathname === item.path ? window.location.pathname:""}
            >
              <i className={item.icon} />
              {item.name}
          </Button_top_nav>
        ))
      }
    </Container>
  )
}

const Container = styled.div `
  display:flex ;
`
