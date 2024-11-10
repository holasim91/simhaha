import Header from "@/components/Header.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "@/routes/home/Home.tsx";
import Humor from "@/routes/humor/Humor.tsx";
import HumorDetail from "@/routes/humor/HumorDetail.tsx";



function App() {
  
  return (
      <>
        <Header />
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/humor"  element={<Humor/>} />
        <Route path="/humor/:id"  element={<HumorDetail/>} />
      </Routes>
      </>
  )
}

export default App
