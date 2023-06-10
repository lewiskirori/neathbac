import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.scss";
import { useContext, useState } from "react";
import Tooltip from '@mui/material/Tooltip';
import { AuthContext } from "../../context/AuthContext";

const Settings = ({ inputs, title }) => {
  const {userDetails} = useContext(AuthContext)
  const [file, setFile] = useState('');
  console.log(userDetails)
  const data =[userDetails.firstname,userDetails.lastname,userDetails.email,userDetails.phone]

  const submit=(event)=>{
    event.preventDefault();

    let myArray = [];
    for (let index = 0; index < event.target.length - 1; index++) {
      if (
        event.target[index].nodeName != "BUTTON" &&
        event.target[index].className != "ql-header" &&
        event.target[index].dataset.formula != "e=mc^2"
      ) {
        // console.log(event.target[index].dataset.formula);
        myArray.push(event.target[index].value);
      }
    }
    console.log(myArray)
    // action(myArray);

  }

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
                  : userDetails.img
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
            <form method="post" onSubmit={submit}>
                {
                  inputs.map(( input,index ) => (
                    input.label == "Email"?
                    <div className="formInput" key={ input.id }>
                      <label>{ input.label }</label>
                      <input type={ input.type } placeholder={ input.placeholder } disabled defaultValue={data[index]}/>
                    </div>:
                    <div className="formInput" key={ input.id }>
                    <label>{ input.label }</label>
                    <input type={ input.type } placeholder={ input.placeholder } defaultValue={data[index]}/>
                  </div>
                  ))
                }
              <button type="submit" >Update Account</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
