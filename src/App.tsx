
import React from 'react'
import * as Routers from "./routes"
import {BrowserRouter, Routes, Route,Navigate} from 'react-router-dom';
import * as View from "./views"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard/*" element={<Routers.Routes_dashboard />} />
        <Route path="/auth" element={<View.auth.Login />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;
