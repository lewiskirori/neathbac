import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import { actions } from "../../formAction";
import ImagePicker from "../../components/imagehandler/imagepicker";

const New = ({ inputs, title, action, imageType = "none" }) => {
  const [file, setFile] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [getUrls, setGetUrls] = useState([]);

  // console.log(inputs);

  const submit = (event) => {
    event.preventDefault();
    // console.log(event.target.length);
    setIsSubmit(true);
    let myArray = [];
    for (let index = 0; index < event.target.length - 1; index++) {
      myArray.push(event.target[index].value);
    }
    action(myArray);
    console.log(myArray);
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
            {imageType == "user" ? (
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
            ) : (
              <ImagePicker
                isSubmit={isSubmit}
                toggleSubmit={() => setIsSubmit(false)}
                getUrls={setGetUrls}
              />
            )}

            {/* <input
              type="file"
              id="file"
              accept="images/*"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            /> */}
          </div>
          <div className="right">
            <form method="post" onSubmit={submit}>
              <div className="content">
                {inputs.map((input) =>
                  input.entryType == "input" ? (
                    <div className="formInput" key={input.id}>
                      <label>{input.label + getUrls.length}</label>
                      <input
                        type={input.type}
                        placeholder={input.placeholder}
                      />
                    </div>
                  ) : input.entryType == "select" ? (
                    <div className="formInput" key={input.id}>
                      <label>{input.label}</label>
                      <select>
                        {/* <option value=""></option> */}
                        {input.options.map((option, index) => (
                          <option value={option} key={index}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  ) : (
                    <div className="formInput" key={input.id}>
                      <label>{input.label}</label>
                      <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                  )
                )}
              </div>
              <br />
              <button type="submit">Add...</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
