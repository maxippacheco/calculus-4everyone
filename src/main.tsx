import React from 'react'
import ReactDOM from 'react-dom/client'

import { ChakraProvider } from '@chakra-ui/react'

import CalculusApp from './CalculusApp.tsx'

import 'katex/dist/katex.min.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <CalculusApp />
    </ChakraProvider>
  </React.StrictMode>,
)
