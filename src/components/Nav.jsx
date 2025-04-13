import React from 'react'
import "../css/Nav.css"

export default function Nav() {
  return (
    <div className='container-nav'>
        <img src="../../img/Image 1858.png" alt="" />
        <ul className='menu'>
            <li><img src="../../img/dashboard.png" alt="" /><a href="">Dashboard</a></li>
            <li><img src="../../img/Folder.png" alt="" /><a href="">Projects</a></li>
            <li><img src="../../img/Groups.png" alt="" /><a href="">Teams</a></li>
            <li><img src="../../img/Pie chart.png" alt="" /><a href="">Analytics</a></li>
            <li><img src="../../img/Chat.png" alt="" /><a href="">Messages</a></li>
            <li><img src="../../img/Code.png" alt="" /><a href="">Intergrations</a></li>
        </ul>
        <div className='ad'>
            <img src="../../img/Group.png" alt="" />
            <h3>V2 is available</h3>
            <button>Try now</button>
        </div>
    </div>
  )
}
