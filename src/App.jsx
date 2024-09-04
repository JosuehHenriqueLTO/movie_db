import { Link, Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'

function App() {
  return (
      <div>
        <Navbar />
        <nav id='navbar'>
          <h2>
            <Link to='/'/>
          </h2>
          <Link to='/movie/1'/>
          <Link to='/search'/>
        </nav>
        <Outlet />
      </div>
  )
}

export default App
