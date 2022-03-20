import React, {useState} from 'react'
import * as Style from "../../style";
import styled from "styled-components";
import * as Asset from "../../assets";
import * as color from "../../component/color";
import * as component from "../../component"

const ReportBuilder = () => {
  const [modal, setModal] = useState<boolean>(false)

  return (
    <Container>
      {/* Modal */}
        <component.ModalReportBuilder show={modal} onHide={()=>setModal(false)} />
      {/* Modal */}
      <span className="wrap-image">
        <img src={Asset.LaptopTangan} alt="" />
      </span>
      <span className="wrap-text-tengah">
        <p className="text">
            Hello <strong>Budi Baik</strong>, Welcome to Report Builder
        </p>
      </span>
      <span className="wrap-text-bawah">
        <span className="text">
          Click &nbsp; <button onClick={()=>setModal(true)}>Add Slide</button> &nbsp; button to make slide
        </span>
      </span>
    </Container>
  )
}

export default ReportBuilder;

const Container = styled(Style.Container) `

.wrap-image{
  margin-bottom:27px;
}
.wrap-text-tengah{
  .text{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.3px;
    color: #000000;
  }
}
.wrap-text-bawah{
  margin-top:15px;
  .text{
    display: flex;
    align-items:center;
    justify-content: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.3px;

    color: #000000;
    button{
      background:none;
      border:thin solid ${color.C_0078D4};
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

      color: ${color.C_0078D4};
    }
  }
}

display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
min-height: 80vh;
`