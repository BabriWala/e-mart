// import Home from "./pages/Home"
import { RouterProvider } from "react-router-dom"
import router from "./router/router"
// import Login from "./pages/login"

function App() {


  return (
    <>
     {/* <Login></Login> */}
     <RouterProvider router={router}><App /></RouterProvider>
    </>
  )
}

export default App
