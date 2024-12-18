import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import MainMenu from "./pages/MainMenu"
import { ThemeProvider } from "@emotion/react"
import theme from "./theme"
import HotPage from "./pages/HotPage"
import ColdPage from "./pages/ColdPage"
import MojitoPage from "./pages/MojitoPage"
import RamadanPage from "./pages/RamadanPage"
import DessertPage from "./pages/DessertPage"
import { Container } from "@mui/material"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClientProvider } from "@tanstack/react-query"

import queryClient from './cache/queryClient'
import ItemsEdit from "./pages/Admin/ItemsEdit"
import Login from "./pages/Admin/Login"

function App() {
  return (
    <Container maxWidth={'sm'}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="" element={<MainMenu />} />
              <Route path="cold" element={<ColdPage />} />
              <Route path="hot" element={<HotPage />} />
              <Route path="mojito" element={<MojitoPage />} />
              <Route path="ramadan" element={<RamadanPage />} />
              <Route path="dessert" element={<DessertPage />} />
              <Route path="editMenu" element={<ItemsEdit />} />
              <Route path="login" element={<Login />} />
              <Route path="/*" element={<Navigate replace to='/' />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
        <ReactQueryDevtools
          initialIsOpen={false}
          buttonPosition="bottom-left"
        />
      </QueryClientProvider>
    </Container>
  )
}

export default App
