import React, {Suspense,lazy} from 'react'
import {Routes, Route,Navigate} from "react-router-dom"
// import * as View from "../views";
import * as Component from "../component";
import styled from "styled-components"

const Homes = lazy(()=>import("../views/home/home"));
const Gallery = lazy(()=>import("../views/gallery/gallery"));
const ReportBuilder = lazy(()=>import("../views/reportBuilder/reportBuilder"));
const ReportBuilderBuilder = lazy(()=>import("../views/reportBuilder/reportBuilder.builder"));

export const Routes_dashboard = () => {

  return (
    <section >
      <section >
        <Component.Navigations  />
      </section>

      <StyledRouter id="router">
        <Suspense fallback={<Component.Loading_page />}>
          <Routes>
            <Route path="/" element={<Homes />} />
            <Route path="home" element={<Homes />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="report_builder" element={<ReportBuilder />} />
            <Route path="report_builder/builder" element={<ReportBuilderBuilder />} />
            {/* <Route
                path="*"
                element={<Navigate to="/dashboard/home" />}
            /> */}
          </Routes>
        </Suspense>
      </StyledRouter>
    </section>
  )
}


const StyledRouter = styled.section `
padding-top: 100px;
transition: 300ms;
margin-left:94px;
overflow-x:hidden;
background-color: hsla(228, 45%, 98%, 1);
min-height: 100vh;
`
