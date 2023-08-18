import { Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import LoginSuccess from "./components/LoginSuccess"
import LoginError from "./components/LoginError"
import Button from "./components/Button"

function App() {
  return (
    <div className="App">
      
      <Routes>
        
        <Route path="/" element={ <Home/>} />
        <Route path="loginsuccess" element={ <LoginSuccess/> } />
        <Route path="loginerror" element={ <LoginError/> } />
        
      </Routes>
      
      
    </div>
  )
}

export default App


