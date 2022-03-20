import React from 'react'
import styled from "styled-components";
import * as  color from "../color";
import * as assets from "../../assets";
import {Navigations_top} from "./navigations.top";
import {Navigations_side} from "./navigations.side";
import {Dropdowns} from ".."

interface Props{
}

const data_dropdowns = [
  {
    icon :"icon-user-setting",
    name:`Profile`,
    onclick:null
  },
  {
    icon :"icon-user-setting",
    name:"User Management",
    onclick:null
  },
  {
    icon :"icon-out",
    name:"Log Out",
    onclick:null
  },
]

export const Navigations = (props:Props) => {

  return (
    <Container>
      {
        window.location.pathname === "/dashboard/report_builder" ? null :
          <section className="row_0">
            <Navigations_side />
          </section>
      }
      <section className="row_1">
        <div className="left">
          <img src={assets.Logo} alt="" />
        </div>
        <div className="right">
          <Dropdowns data_dropdowns={data_dropdowns}>
            <div className="wrap-user">
              <div className="name">
                Baik Budi
              </div>
              <div className="img-profile">
                <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="" />
              </div>
            </div>
          </Dropdowns>
        </div>
      </section>
      <section className="row_2">
        <Navigations_top />
      </section>
    </Container>
  )
}





const Container = styled.div `

.row_0{
  position: fixed;
  left:0;
  top:80px;
  z-index:99999999999;
}

.row_2{
  margin-left:156px ;
};

.row_1{
  display:flex ;
  justify-content:space-between ;
  align-items:center ;
  line-height:0 ;
  .right{
    .wrap-user{
      display:flex;
      align-items:center;

      .img-profile img{
        width:37px;
        height:37px;
        object-fit:cover;
        margin-left:10px ;
        border-radius:100px;
        border:2px solid ${color.C_FFFFFF} ;
      }
    }
  }
};
z-index: 999;
position: fixed;
width: 100%;
background-color:${color.C_F13929};
color: ${color.C_FFFFFF};
padding:0px 10px;
padding-top:10px;
display: flex;
flex-direction: column;
justify-content: center;
/* height:80px; */
/* overflow:hidden; */
`
