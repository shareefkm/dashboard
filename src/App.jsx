import { useState } from 'react'
import Main from './page/Main'
import './App.css'
import { Box } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box>
     <Main/>
    </Box>
  )
}

export default App
