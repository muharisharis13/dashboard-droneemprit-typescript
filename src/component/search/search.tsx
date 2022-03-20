import React from 'react'
import styled from "styled-components";
import * as component from "../";

interface Props{
  placeholder:string;
}



const Search = (props:Props) => {
  const {placeholder} = props

  return (
    <Container onSubmit={Search}>
      <input type="text" placeholder={placeholder} />
      <button type="submit">
        <i className="icon-search" />
      </button>
    </Container>
  )

  function Search(e:any){
    e.preventDefault();
    alert("Search")
  }
}

Search.defaultProps = {
  placeholder: "Search..."
}

export default Search;


const Container = styled.form `
display: flex;
position:relative;


button{
  position: absolute;
  font-size:13pt;
  border:none;
  background:none;
  height:auto;
  top:auto;
  bottom:auto;
  height:100%;
  cursor:pointer;
};

input{
  height:33px;
  width:100%;
  border:thin solid ${component.Color.C_0078D4} !important;
  border-color: ${component.Color.C_0078D4} !important;
  min-width:300px;
  padding-left:30px !important;

  &:focus{
    outline: none;
  }
}
`