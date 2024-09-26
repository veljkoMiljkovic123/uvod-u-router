
import { Outlet } from 'react-router-dom';
import './App.css'
import NavbarComponent from './components/NavbarComponent'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
 let pathname = window.location.pathname.slice(1);

  return (
    <div>
     <NavbarComponent />
    <ToastContainer />
    <Outlet />
    </div>
  )
}

export default App
