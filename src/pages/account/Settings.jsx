import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.scss";
import { useState } from "react";
import Tooltip from '@mui/material/Tooltip';

const Settings = ({ inputs, title }) => {
  const [file, setFile] = useState('');

  return (
    <div className="settings">
      <Sidebar />
      <div className="settingsContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <Tooltip title="Change your avatar">
            <img
              src={
                file ? URL.createObjectURL(file)
                  : "https://images.pexels.com/photos/10394207/pexels-photo-10394207.jpeg?cs=srgb&dl=pexels-mostafaft-shots-10394207.jpg&fm=jpg&_gl=1*xeb6ut*_ga*MzkxMzI1ODAwLjE2ODMyMjIxOTM.*_ga_8JE65Q40S6*MTY4MzIyMjE5OS4xLjEuMTY4MzIyNDMzOS4wLjAuMA.."
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
                  style={{ display: "none" }} 
            />
          </div>
          <div className="right">
            <form>
                {
                  inputs.map(( input ) => (
                    <div className="formInput" key={ input.id }>
                      <label>{ input.label }</label>
                      <input type={ input.type } placeholder={ input.placeholder } />
                    </div>
                  ))
                }
              <button>Update Account</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
