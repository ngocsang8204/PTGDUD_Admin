import React from 'react'
import "../css/Header.css"
import { CiSearch } from "react-icons/ci";
export default function Header() {
  return (
    <div className='container-header'>
      <h4>Dashboard</h4>
      <div className="content-right">
        <div className="search">
            <CiSearch/>
            <input type="text" placeholder='Search...'/>
        </div>
        <img src="../../img/Bell 1.png" alt="" />
        <img src="../../img/Question 1.png" alt="" />
        <img src="../../img/Avatar 313.png" alt="" />
      </div>
    </div>
  )
}
