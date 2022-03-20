import React from 'react'
import styled from "styled-components"

const Tables = (props:{header:any,children:any}) => {
  const {header,children} = props


  return (
    <div>
      <Container>
        <thead>
          <tr>
            {
              header?.map((item:any,idx:any)=>(
                <th key={idx}>{item}</th>
              ))
            }
          </tr>
        </thead>
        {
          children
        }
      </Container>
    </div>
  )
}

export default Tables;

const Container = styled.table`

tbody{
  border:1px solid transparent;
  tr{
    border:1px solid transparent;
    width: 100% !important;

    &:last-child{
      border-bottom:none
    }
    td{
      border:1px solid #ddd; 
      border-bottom:none;
      padding:7px;
      flex-wrap: wrap;
      word-break: break-all;
      text-align:center;
      &:first-child{
        border-left:none;
      }
      &:last-child{
        border-right:none;
      }
    }
  }
}

thead{
  border:1px solid transparent;
  tr{
    th{
      border:1px solid #ddd;
      border-top:none;
      padding:7px;
      cursor:default;
      &:first-child{
        border-left:none
      }
      &:last-child{
        border-right:none;
      }

    }
  }
}

border-collapse: collapse;
padding:0;
margin:0;
box-sizing: border-box;
width:100% !important;
border:none;
`