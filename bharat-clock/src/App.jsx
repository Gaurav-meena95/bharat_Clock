import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Head from './components/head'
import Slogn from './components/slogon'
import CurrentTime from './components/cuurent_time'

function App() {
  

  return (
    <center className='container'>
      <Head/>
      <Slogn/>
      <CurrentTime/>


    </center>
  )
}

export default App
