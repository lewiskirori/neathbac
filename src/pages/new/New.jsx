import "./new.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Tooltip from '@mui/material/Tooltip';
import { useState } from "react";


const New = ({ inputs, title }) => {
  const [file, setFile] = useState ('');

  return (
    <div className="new">
        <Sidebar />
        <div className="newContainer">
          <Navbar />
          <div className="top">
            <h1>{ title }</h1>
          </div>
          <div className="bottom">
            <div className="left">
              <Tooltip title="Your image">
              <img
              src={
                file ? URL.createObjectURL(file)
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMHWq8PbZOi3fK-eM5DmNzsLkmyEy9Ldf8ykOmJ-vERlPX1_I&s"
              }  
              alt=""
              onClick={() => document.getElementById("file").click()}
              style={{ cursor: "pointer" }} 
              />
              </Tooltip>
              <input 
                  type="file" 
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])} 
                  style={{ display: "none" }} />
            </div>
            <div className="right">
              <form >
                {
                  inputs.map(( input ) => (
                    <div className="formInput" key={ input.id }>
                      <label>{ input.label }</label>
                      <input type={ input.type } placeholder={ input.placeholder } />
                    </div>
                  ))
                }
                <button>Add...</button>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default New