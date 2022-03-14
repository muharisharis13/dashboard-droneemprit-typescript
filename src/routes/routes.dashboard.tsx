import React, {Suspense,lazy} from 'react'
import {Routes, Route,Navigate} from "react-router-dom"
// import * as View from "../views";
import * as Component from "../component";
import styled from "styled-components"

const Homes = lazy(()=>import("../views/home/homes"))

export const Routes_dashboard = () => {

  return (
    <section>
      <section>
        <Component.Navigations  />
      </section>

      <StyledRouter id="router">
        <Suspense fallback={<Component.Loading_page />}>
          <Routes>
            <Route path="home" element={<Homes />} />
            <Route
                path="*"
                element={<Navigate to="home" />}
            />
          </Routes>
        </Suspense>
      </StyledRouter>
    </section>
  )
}


const StyledRouter = styled.section `
padding-top: 100px;
transition: 300ms;
margin-left:94px ;
overflow-x:hidden;
background-color: hsla(228, 45%, 98%, 1);
min-height: 100vh;
`
