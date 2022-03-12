import React, {useState} from 'react'
import styled,{css} from "styled-components"
import { C_FFFFFF, C_F13928,C_AF261A} from '../color/index'
import {Link} from "react-router-dom"

interface Props{
}


const data_nav =[
  {
    icon : "icon-home",
    name :"Home",
    path :"/dashboard/home"
  },
  {
    icon : "icon-plus",
    name :"New",
    path :"/dashboard/new"
  },
  {
    icon : "icon-clock",
    name :"Recent",
    path :"/dashboard/recent"
  },
]

export const Navigations_side = (props:Props) => {
  const [active, setActive] = useState<string>("")
  
  return (
    <Container>
      {
        data_nav.map((item:any,idx:number) =>(
          <Link_Nav active={item.path === active ? true:false}  
            to={item.path} 
            className="navigation-btn" 
            key={idx}
            onClick={()=>setActive(item.path)}
          >
            <i className={item.icon} />
            {item.name}
          </Link_Nav>
        ))
      }
    </Container>
  )
}


const Link_Nav = styled(Link)<{active:boolean}> `
${({active})=>
  active ?
  css `
    background-color:${C_AF261A};
    color:${C_FFFFFF}
  `
  : css `
    background-color:transparent;
    color:#000;
  `
}

`

const Container = styled.div `

.navigation-btn{
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  border: thin solid transparent;
  height: 83px;
  text-decoration: none;
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  cursor:pointer;
};

  background-color:${C_F13928};
  height:100vh ;
  width:94px ;
  overflow:hidden ;

`