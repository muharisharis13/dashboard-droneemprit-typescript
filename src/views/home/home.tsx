import React from 'react';
import styled from "styled-components";
import {Container} from "../../style";
import * as component from "../../component";
import {thumbnail,Powerpoint} from "../../assets"

const header = ["Client", "File Name", "Last Opened", "Account"]

 const Homes = () => {
  return (
    <ContainerHomes>
      <section className="wrap-template-theme">
        <div className="title">
          Last Template
        </div>
        <div className="list-template">
          {
            [2,2,2,2,2,2].map((item:any, idx:number)=>(
              <div className="thmb-template" key={idx}>
                <img src={thumbnail} alt="" />
                <div className="captions-template">
                  Lorem ipsum
                </div>
              </div>
            ))
          }
        </div>
      </section>

      <section className="wrap-table-data">
        <div className="search">
          <component.Search />
        </div>
        <div className="tables">
          <component.Tables header={header}>
            {
              [2,2,2,2].map((item:any,idx:number)=>(
                <tbody key={idx}>
                  <tr>
                    <td rowSpan={3}>spanrow</td>
                    <td><img src={Powerpoint} /> aaaa</td>
                    <td>aaaa</td>
                    <td>aaaa</td>
                  </tr>
                  <tr>
                    <td><img src={Powerpoint} /> aaaa</td>
                    <td>aaaa</td>
                    <td>aaaa</td>
                  </tr>
                  <tr>
                    <td><img src={Powerpoint} /> aaaa</td>
                    <td>aaaa</td>
                    <td>aaaa</td>
                  </tr>
                </tbody>
              ))
            }
          </component.Tables>
        </div>
        <div className="paginations">
          <component.Pagination />
        </div>
      </section>
    </ContainerHomes>
  )
}


export default Homes;


const ContainerHomes = styled(Container) `

.wrap-table-data{
  .search{
    display:flex;
    align-items:center;
    justify-content:center;
  }
  .paginations{
    margin-top:20px;
    display:flex;
    align-items: center;
    justify-content:flex-end;
  }
  .tables{
    margin-top:20px;
  }
  background-color: ${component.Color.C_FFFFFF};
  margin-top:30px;
  padding:37px;
  display: flex;
  flex-direction: column;
  justify-content:center;
  margin-bottom:100px;
}

.wrap-template-theme{
  .list-template{
    .thmb-template{

      img{
        width: 153px;
        height: 89.26px;
        object-fit: cover;
        cursor:pointer;
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
    grid-gap: 3rem;
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
    margin-bottom:36px;
  }
}
`

