import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/Home'
import Layout from "./component/shared/layout";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route index element={<Home />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App