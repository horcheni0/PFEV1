import React from "react"
import'./sidebar.css'
import {Link} from 'react-router-dom'


const Sidebar = () => {
  return(
    <div className="sidebar">
        <Link to={'/addproduct'} state={{textDecoration:"nome"}}>
            <div className="sideba-item">
             
                <p>add product</p>
            </div>

        </Link>
        <Link to={'/listproduct'} state={{textDecoration:"nome"}}>
            <div className="sideba-item">
               
                <p>list product</p>
            </div>

        </Link>
    
    

    </div>
  )
}
export default Sidebar