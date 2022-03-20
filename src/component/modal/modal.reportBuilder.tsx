import React from 'react';
import ModuleModal from "../module/module.modal";
import styled from "styled-components";
import * as Asset from "../../assets";
import {Link} from "react-router-dom"

const Modal = (props:{onHide:Function,show:boolean}) => {
  const {show, onHide} = props
  
  return (
    <ModuleModal show={show} onHide={onHide}>
      <Container>
        <section className="wrap-title">
          <span className="text">
            Choose Slide
          </span>
        </section>

        <section className="wrap-content">
          {
            [2,2,2,2,2,2].map((item:any,idx:any)=>(
                <Link to="/dashboard/report_builder/builder" style={{textDecoration:"none",color:"#000"}}>
                    <div className="wrap-card" key={idx}>
                        <img src={Asset.Image6} alt="" />
                        <span className="text">Cover</span>
                    </div>
                </Link>
            ))
          }
        </section>
      </Container>
    </ModuleModal>
  )
}

export default Modal;

const Container = styled.div `
  .wrap-content{
    .wrap-card{
      .text{
        font-family: 'Helvetica';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 24px;
        display: flex;
        align-items: center;
        letter-spacing: -0.025em;
      }
      cursor: pointer;
      display:flex;
      flex-direction: column;
      align-items:center;
      justify-content: center;
    }
    display:flex;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 3rem ;
    flex-wrap: wrap;
  }
  .wrap-title{
    margin-bottom: 34px;
    .text{
      font-family: 'Helvetica';
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      display: flex;
      align-items: center;
      letter-spacing: -0.025em;
    }
  }
  padding:35px;
  display: flex;
  flex-direction: column;
`