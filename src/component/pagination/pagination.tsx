import React from 'react'
import styled from "styled-components"
import * as color from "../color"

const Pagination = () => {
  return (
    <Container>
      <div className="left">
        <span className="text">
          Rows per page
        </span> &nbsp;
        <select>
          <option value="88">8</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </div>
      <div className="right">
        <span className="text">
          1-8 of 1240
        </span>
        <span className="wrap-button">
          <span className="btn-left">
            <i className="icon-left-open" />
          </span>
          <span className="btn-right">
            <i className="icon-right-open" />
          </span>
        </span>
      </div>
    </Container>
  )
}

export default Pagination;

const Container = styled.div `
.right{
  display:flex;
  align-items:center;
  justify-content: center;
  
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

  .wrap-button {
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.3px;
    color: ${color.C_9FA2B4};
    i{
      cursor:pointer;
    }
  }

  .text{
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.3px;
    color: ${color.C_9FA2B4};
  }
  .wrap-button{
    display:flex;
    align-items:center;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }
}
.left{
  display:flex;
  align-items:center;
  justify-content: center;
  .text{
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.3px;
    color: ${color.C_9FA2B4};
  }
  select{
    border:none;
    display:flex;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.3px;
    color: ${color.C_9FA2B4};
    &:focus{
      outline:none;
    }
  }
}
display: flex;
align-items:center;
grid-template-columns: 1fr 1fr;
grid-gap: 3rem;
`