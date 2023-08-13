import React, {useState} from 'react';
import Logo from '../assets/cat.png';
import { Link } from 'react-router-dom';
import ViewListIcon from '@mui/icons-material/ViewList';
import '../styles/Navbar.css';

function Navbar() {

  const[openLinks, setOpenLinks] = useState(false)

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  }

  return (
    <div className = 'navbar'>
        <div className = 'left' id = {openLinks ? 'open' : 'close'} >
            <img src = {Logo} alt = 'logo'/>
            <div>wonko's wonderful website </div>
            <div className = 'hiddenLinks'>
              <Link to = '/'> Home </Link>
              <Link to = '/lor'> Legends of Runeterra </Link>
              <Link to = '/about'> About </Link>
              <Link to = '/contact'> Contact </Link>
            </div>
        </div>
        <div className = 'right'>
            <Link to = '/'> Home </Link>
            <Link to = '/lor'> Legends of Runeterra </Link>
            <Link to = '/about'> About </Link>
            <Link to = '/contact'> Contact </Link>
            <button onClick = {toggleNavbar}>
              <ViewListIcon />
            </button>
        </div>
    </div>
  )
}

export default Navbar