import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import axios from '../axios';


function Login () {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [ ,dispatch] = useStateValue();

  const login = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/auth/login", { email, password });

      if (!response.data.error) {
        dispatch({
          type: "SET_USER",
          user: response.data,
        });

        localStorage.setItem("user", JSON.stringify(response.data));

        // Navigate to the desired page after successful login
        navigate("/");
      } else {
        alert(response.data.error);
      }
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  };
  return (
    <section style={styles.section}>
      <div style={styles.logo} className="logo" onClick={() => navigate("/")}>
        <img style={styles.logoimg} src="./amazon_logo.png" alt="" />
      </div>

      <div style={styles.formcontainer} className="formatcontainer">
        <h3 style={styles.formcontainerh3}>Sign-In</h3>

        <div style={styles.formcontainerinputcontainer} className="inputcontainer">
          <p style={styles.formcontainerinputcontainerp}>Email</p>
          <input style={styles.formcontainerinputcontainerinput}
            type="email"
            placeholder="example@example.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div style={styles.formcontainerinputcontainer} className="inputcontainer">
          <p style={styles.formcontainerinputcontainerp}>Password</p>
          <input style={styles.formcontainerinputcontainerinput}
            type="password"
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button style={styles.formcontainerloginbutton} className="loginbutton" onClick={login}>Login</button>

        <div style={styles.formcontainerinfotext} className="infotext">
          By continuing, you agree to Amazon's <span>Conditions of Use </span>
          and <span style={styles.formcontainerinfotextspan}> Privacy Notice</span>
        </div>
      </div>
      <button style={styles.formcontainersignupbutton} className="signupbutton" onClick={() => navigate("/signup")}>
        Create Account in Amazon
      </button>
    </section>
  
  )
}

const styles = {
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
    width: "100%",
  },
  formcontainer:{
    border: "1px solid lightgray",
    width: "55%",
    height: "400px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "15px",
  },
  formcontainerh3:{
    fontSize: "28px",
    fontWeight: "400",
    lineHeight: "33px",
    alignSelf: "flex-start",
  
    marginBottom: "10px",
  },
  formcontainerinputcontainer:{
    width: "100%",
    padding: "10px",
  },
  formcontainerinputcontainerp:{
    fontSize: "14px",
    fontWeight: "600",
  },
  formcontainerinputcontainerinput:{
    width: "95%",
    height: "33px",
    paddingLeft: "5px",
    borderRadius: "5px",
    border: "1px solid lightgray",
    marginTop: "5px",
  
    hover :{
       border: "1px solid orange",
    }
  },
  formcontainerloginbutton:{
    width: "70%",
    height: "35px",
    backgroundColor: "#f3b414",
    border: "none",
    outline: "none",
    borderRadius: "10px",
    marginTop: "30px",
  },
  formcontainerinfotext:{
    fontSize: "12px",
    width: "100%",
    wordWrap: "normal",
    wordBreak: "normal",
    marginTop: "20px",
  },
  formcontainerinfotextspan:{
    color: "#426bc0",
  },
  formcontainersignupbutton:{
    width: "55%",
    height: "35px",
    fontSize: "12px",
    marginTop: "20px",
  
    hover :{
       backgroundColor: "#dfdfdf",
       border: "1px solid gray",
    }
  },
  
}

export default Login
