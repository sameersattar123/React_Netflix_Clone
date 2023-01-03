import React from 'react'
import netflixLogo from "../images/Netflix-logo-red-black-png.png"
import { Link } from 'react-router-dom'
import { ImSearch } from "react-icons/im"


const Header = () => {
  return (
    <div>
      <nav className="header">
        <img src={netflixLogo} alt="" />
        <div className="">
            <Link to="/tvshows">TV Shows</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/recentlymovies">Recently Added</Link>
            <Link to="/mylist">my List</Link>
        </div>
        <ImSearch/>
      </nav>
    </div>
  )
}

export default Header
