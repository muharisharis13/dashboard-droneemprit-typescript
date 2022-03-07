import React, {useState,Suspense,lazy} from 'react'
import {Routes, Route,Navigate} from "react-router-dom"
// import * as View from "../views";
import * as Component from "../component";
import styled from "styled-components"

const Projects = lazy(()=>import("../views/projects/projects"))
const Projects_new = lazy(()=>import("../views/projects/projects.new"))

export const Routes_dashboard = () => {
  const [show_side, setShow_side] = useState<boolean>(true)

  return (
    <section>
      <section>
        <Component.Navigations />
      </section>
      <NavSide className='nav_side'>
        <Component.Navigations_side />
      </NavSide>

      <StyledRouter id="router">
        <Suspense fallback={<Component.Loading.Loading_page />}>
          <Routes>
            <Route path="projects" element={<Projects />} />
            <Route path="projects/new" element={<Projects_new />} />
            <Route
                path="*"
                element={<Navigate to="projects" />}
            />
          </Routes>
        </Suspense>
      </StyledRouter>
    </section>
  )
}

const NavSide = styled.div `
position:fixed;


`

const StyledRouter = styled.section `
transition: 300ms;
margin-left:90px ;
`
