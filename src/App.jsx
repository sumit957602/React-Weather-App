import { useState, useEffect } from 'react'
import './App.css'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { Info } from '@mui/icons-material'

function App() {

  return (
    <>
      <SearchBox />
      <InfoBox />
    </>
  )
}

export default App
