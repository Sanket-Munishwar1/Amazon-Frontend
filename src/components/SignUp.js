import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from '../axios';

function SignUp() {

  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = (e) => {
    e.preventDefault();
    axios
      .post("/auth/signup", { email, password, fullName })
      .then((res) => alert(res.data.message))
      .catch((err) => console.warn(err));

    navigate("/login");
  };
  return (
    <section style={styles.section}>
      <div style={styles.logo} className="logo" onClick={() => navigate("/")}>
        <img style={styles.logoimg} src="./amazon_logo.png" alt="" />
      </div>
      <div style={styles.formcontainer} className="formcontainer">
        <h3 style={styles.formcontainerh3}>Sign-Up</h3>
        <div style={styles.inputcontainer} className="inputcontainer">
          <p style={styles.inputcontainerp}>FullName</p>
          <input style={styles.inputcontainerinput}
            type="text"
            placeholder="John Smith"
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
          />
        </div>
        <div style={styles.inputcontainer} className="inputcontainer">
          <p style={styles.inputcontainerp}>Email</p>
          <input style={styles.inputcontainerinput}
            type="email"
            placeholder="example@example.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div style={styles.inputcontainer} className="inputcontainer">
          <p style={styles.inputcontainerp}>Password</p>
          <input style={styles.inputcontainerinput}
            type="password"
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div style={styles.signupbutton} className="signupbutton" onClick={signup}>Create Account in Amazon</div>
      </div>

      <div style={styles.loginbutton} className="loginbutton" onClick={() => navigate("/home")}>
        Back to Login
      </div>
    </section>
  );
}
const styles ={
  section:{
    width: "40%",
    minWidth: "450px",
    height: "fit-content",
    padding: "15px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logo:{
    width: "120px",
    marginBottom: "20px",
  },
  logoimg:{
    width:"100%",
  },
  formcontainer:{
    border: "1px solid lightgray",
    width: "55%",
    height: "400px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: "15px",
  },
  formcontainerh3:{
    fontSize: "28px",
    fontWeight: "400",
    lineHeight: "33px",
    alignSelf: "flex-start",
    marginBottom: "10px",
  },
  inputcontainer:{
    width:"10%",
    padding:"10px",
    paddingRight:"250px"
  },
  inputcontainerp:{
    fontSize:"14px",
    fontWeight:"600"
  },
  inputcontainerinput:{
    width:"250px",
    height:"33px",
    // paddingReft: "500px",
    borderRadius: "5px",
    border: "1px solid lightgray",
    marginTop: "5px",
   
    hover: {
       border: "1px solid orange"
     }
  },
  signupbutton:{
    width:"60%",
    height:"30px",
    fontSize:"15px",
    marginTop:"20px",
    backgroundColor: "#dfdfdf",
    border: "1px solid gray"
  },
  loginbutton:{
    width:"55%",
    height:"35px",
    backgroundColor:"#f3b414",
    border: "none",
    outline: "none",
    borderRadius: "10px",
    marginTop: "30px"

  }
}


export default SignUp
