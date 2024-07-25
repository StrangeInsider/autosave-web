import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "./containers/home";
import ContentProvider from './providers/content.provider';

const App = () => {


  return (
    <Routes>
        <Route path="/" element={<ContentProvider><Home /></ContentProvider>} />
    </Routes>
  )
}

export default App