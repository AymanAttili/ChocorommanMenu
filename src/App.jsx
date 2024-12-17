import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainMenu from "./pages/MainMenu"
import { ThemeProvider } from "@emotion/react"
import theme from "./theme"
import HotPage from "./pages/HotPage"
import ColdPage from "./pages/ColdPage"
import MojitoPage from "./pages/MojitoPage"
import RamadanPage from "./pages/RamadanPage"
import DessertPage from "./pages/DessertPage"

function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<MainMenu />} />
          <Route path="cold" element={<ColdPage />} />
          <Route path="hot" element={<HotPage />} />
          <Route path="mojito" element={<MojitoPage />} />
          <Route path="ramadan" element={<RamadanPage />} />
          <Route path="dessert" element={<DessertPage />} />
          {/* <Route path="/*" element={<Error404 />}  */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
