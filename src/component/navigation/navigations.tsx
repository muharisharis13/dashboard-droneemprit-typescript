import React from 'react'
import styled from "styled-components";
import * as  color from "../color";
import * as assets from "../../assets";
import {Navigations_top} from "./navigations.top"

interface Props{
}

export const Navigations = (props:Props) => {

  return (
    <Container>
      <section className="row_1">
        <div className="left">
          <img src={assets.Logo} alt="" />
        </div>
        <div className="right">
          <div className="wrap-user">
            <div className="name">
              Baik Budi
            </div>
            <div className="img-profile">
              <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="row_2">
        <Navigations_top />
      </section>
    </Container>
  )
}





const Container = styled.div `


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
        width:48px;
        height:48px;
        object-fit:cover;
        margin-left:10px ;
        border-radius:100px;
        border:2px solid ${color.C_FFFFFF} ;
      }
    }
  }
};

background-color:${color.C_0078D4};
color: ${color.C_FFFFFF};
padding:10px 10px;
`
