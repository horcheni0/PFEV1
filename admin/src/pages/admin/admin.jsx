import React from "react"
import'./admin.css'
import Sidebar from "../../components/sidebar/sidebar"
import { Routes,Route } from "react-router-dom"
import Addproduct from "../../components/addproduct/addproduct"
import Listprodcut from "../../components/listprodcut/listprodcut"
const Admin = () => {
  return(
    <div className="admin">
        <Sidebar/>
        <Routes>
          <Route path="/addproduct" element={<Addproduct/>}/>
          <Route path="/listproduct" element={<Listprodcut/>}/>
        </Routes>

    </div>
  )
}
export default Admin