import React from 'react';
import styled from "styled-components";
import {Container} from "../../style";
import * as component from "../../component"

 const Homes = () => {
  return (
    <ContainerHomes>
      <section className="wrap-template-theme">
        <div className="title">
          Template Theme
        </div>
        <div className="list-template">
          {
            [2,2,2,2,2,2,2,2,2,2].map((item:any, idx:number)=>(
              <div className="thmb-template" key={idx}>
                <img src="https://images.unsplash.com/photo-1504691342899-4d92b50853e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                <div className="captions-template">
                  Lorem ipsum.
                </div>
              </div>
            ))
          }
        </div>
      </section>

      <section className="wrap-table-data">
        asdasdad
      </section>
    </ContainerHomes>
  )
}


export default Homes;


const ContainerHomes = styled(Container) `

.wrap-table-data{
  background-color: ${component.Color.C_FFFFFF};
}

.wrap-template-theme{
  .list-template{
    .thmb-template{

      img{
        width: 153px;
        height: 89.26px;
        object-fit: cover;
      }

      .captions-template{
        font-family: 'Helvetica';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        text-align: center;
        letter-spacing: 0.2px;
        color: #252733;
      }
      display:flex;
      flex-direction: column;
      align-items:center;
      justify-content: center;
    }
    display: flex;
    grid-gap: 0.6rem;
    grid-template-columns: repeat(auto-fit,minmax(15rem,1fr));
    flex-wrap:wrap;
  }
  .title{
    margin-top:30px;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 19px;
    letter-spacing: 0.3px;
    color: #252733;
    margin-bottom:16px;
  }
}
`

