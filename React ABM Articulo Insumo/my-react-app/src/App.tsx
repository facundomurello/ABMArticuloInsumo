
import AppRoutes from "./routes/AppRoutes"
import Header from "./components/Header/Header"
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from "./components/Footer/Footer";



function App() {
  

  return (
    <>
    <Router>
      <Header/>
      <AppRoutes/>
      <Footer/>
    </Router>
    </>
  )
}

export default App
