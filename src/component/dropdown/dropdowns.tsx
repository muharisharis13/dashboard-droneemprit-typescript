import React from 'react';
import styled from "styled-components"


interface Props{
  children:any;
  data_dropdowns:any;
}

const Dropdowns = (props:Props) => {
  const {children, data_dropdowns} = props

  return (
    <Container>
      <div className="title">
        {children}
      </div>
      <div className="container-menu">
        {
          data_dropdowns.map((item:any, idx:number)=>(
            <button className="list-dropdown" key={idx} onClick={item.onClick}>
              {item.icon && <i className={item.icon} />}
              {item.name}
            </button>
          ))
        } 
      </div>
    </Container>
  )
}


const Container = styled.div `



.container-menu{

  .list-dropdown{

    transition:450ms;
    padding: 10px 0px;
    padding-left:10px;
    padding-right:10px;
    cursor: pointer;
    border-bottom: thin solid #ccc !important;
    
    flex-direction: row;
    align-items: center;
    border:thin solid transparent;
    background-color: transparent;
    display: inline-flex;
    text-align: left;

    &:last-child{
      border-bottom: none !important;
    }
    &:hover{
      background:hsla(206, 100%, 64%, 1);
      color:hsla(0, 0%, 100%, 1);
    }

  }
  
  /* overflow: hidden; */
  right:0;
  position: absolute;
  font-size:11.5pt;
  border:thin solid #ccc;
  background-color: #fff;
  color:#000;
  opacity:0;
  transform:scaleY(0);
  visibility:hidden;
  transform-origin:0% 0%;
  transition: all 0.35s;
  display: flex;
  flex-direction: column;
  /* min-width: 170px; */
  z-index:1000;

  &:hover {
    opacity:1;
    transform:scaleY(1);
    visibility: visible;
  }

}

.title{
  cursor: default;
  box-sizing: border-box;
  &:hover ~ .container-menu{
    opacity:1;
  transform:scaleY(1);
  visibility: visible;
  }
}

position:relative;
`

export default Dropdowns