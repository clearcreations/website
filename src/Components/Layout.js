import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import '../App.css'

const Layout = () => {
  return (
    <div className="App">
      <Header />
      <div className="page">
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}

export default Layout