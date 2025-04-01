import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Chisiamo from "./pages/Chisiamo"
import Posts from "./pages/Posts"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" Component={Home} />
            <Route path="/chisiamo" Component={Chisiamo} />
            <Route path="/posts" Component={Posts} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
