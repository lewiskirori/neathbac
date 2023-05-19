import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";

const New = ({ inputs, title, action }) => {
  const [file, setFile] = useState("");

  // console.log(inputs);

  const submit = (event) => {
    event.preventDefault();
    console.log(event.target.length);
    // console.log(event.target[0].value);
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <Tooltip title="Your image">
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
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
              style={{ display: "none" }}
            />
          </div>
          <div className="right">
            <form method="post" onSubmit={submit}>
              {inputs.map(
                (input) => console.log(input)
                // input.entryType == "input" ? (
                //   <div className="formInput" key={input.id}>
                //     <label>{input.label}</label>
                //     <input type={input.type} placeholder={input.placeholder} />
                //   </div>
                // ) : (
                //   <div className="formInput" key={input.id}>
                //     <label>{input.label}</label>
                //     <select>
                //       {/* {input.options.map((option, index) => (
                //         <option value={option} key={index}>
                //           {option}
                //         </option>
                //       ))} */}
                //     </select>
                //   </div>
                // )
              )}
              <button type="submit">Add...</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
