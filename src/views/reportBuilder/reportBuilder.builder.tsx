import React from 'react';
import styled from "styled-components";
import * as Color from "../../component/color"

const ReportBuilderBuilder = () => {
  return (
    <Container>
      <section className="left">
        <div className="text-slide-preview">
          Slide Preview
        </div>

        <section className="wrap-content">

        </section>

      </section>
      <section className="center">cennter</section>
      <section className="right">
        <div className="wrap-button">
          <span className="text">
            Cover
          </span>
          <div className="button">
            <button>Add Slide</button>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default ReportBuilderBuilder

const Container = styled.div `
.right{
  .wrap-button{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:6px 9px;
    .text{
      font-family: 'Mulish';
      font-style: normal;
      font-weight: 700;
      font-size: 13px;
      line-height: 16px;
      letter-spacing: 0.2px;
      color: ${Color.C_0078D4};
    }
    .button{
      button{
        background:none;
        border:thin solid ${Color.C_0078D4};
        display: flex;
        align-items:center;
        justify-content: center;
        overflow: hidden;
        flex-wrap:wrap;
        word-wrap: break-word;
        width:98px;
        padding:5px 0px;
        font-family: 'Helvetica';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        cursor:pointer;

        color: ${Color.C_0078D4};
      }
    }
  }
  border:1px solid ${Color.C_A7A7B0};
  border-right:none;
  border-bottom:none;
  border-top:none;
  background-color: ${Color.C_F5F6F8};
  width:245px;
}
.center{
  background:${Color.C_E5E5E5};
  width:65%;
}
.left{
  .text-slide-preview{
    padding:10px 20px;
    background-color:${Color.C_F5F6F8};
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    /* or 160% */

    display: flex;
    align-items: center;
    letter-spacing: 0.04em;

    color: ${Color.C_A7A7B0};
    border: 1px solid ${Color.C_A7A7B0};
    border-left:none;
    border-right:none;
  }
  border:1px solid ${Color.C_A7A7B0};
  border-left:none;
  border-bottom:none;
  border-top:none;
  background-color: ${Color.C_F5F6F8};
  width:245px;
}
display: flex;
/* align-items: center; */
margin-top:-20px;
min-height:88vh;
`