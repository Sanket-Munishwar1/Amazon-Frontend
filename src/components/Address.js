import React, { useState } from 'react'
import Navbar from './Navbar';
import { useStateValue } from '../StateProvider';
import { useNavigate } from 'react-router-dom';

function Address() {


    const [ dispatch] = useStateValue();
    const [fullName, setFullName] = useState("")
    const [phone, setPhone] = useState("");
    const [flat, setFlat] = useState("");
    const [area, setArea] = useState("");
    const [landmark, setLandmark] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");

    const navigate = useNavigate()
    const deliver = (e) => {
        e.preventDefault();
    
        // dispatch({
        //   type: "SET_ADDRESS",
        //   item: {
        //     fullName,
        //     phone,
        //     flat,
        //     area,
        //     city,
        //     state,
        //   },
        // });
        navigate('/')
        
    };
    return (
      <section style={styles.section}>
      <Navbar />
      <div className="main" style={styles.main}>
        <div className="formcontainer" style={styles.formcontainer}>
          <div className="inputcontainer" style={styles.inputcontainer}>
            <p style={styles.inputcontainerp}>Full Name</p>
            <input style={styles.inputcontainerinput}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="John Smith"
              value={fullName}
            />
          </div>
          <div className="inputcontainer" style={styles.inputcontainer}>
            <p style={styles.inputcontainerp}>Phone Number</p>
            <input style={styles.inputcontainerinput}
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </div>
          <div className="inputcontainer" style={styles.inputcontainer}>
            <p style={styles.inputcontainerp}>Flat, House no. Building, Company</p>
            <input style={styles.inputcontainerinput}
              type="text"
              onChange={(e) => setFlat(e.target.value)}
              value={flat}
            />
          </div>
          <div className="inputcontainer" style={styles.inputcontainer}>
            <p style={styles.inputcontainerp}>Area, Colony, Street</p>
            <input style={styles.inputcontainerinput}
              type="text"
              onChange={(e) => setArea(e.target.value)}
              value={area}
            />
          </div>
          <div className="inputcontainer" style={styles.inputcontainer}>
            <p style={styles.inputcontainerp}>Landmark</p>
            <input style={styles.inputcontainerinput}
              type="text"
              onChange={(e) => setLandmark(e.target.value)}
              value={landmark}
            />
          </div>
          <div className="inputcontainer" style={styles.inputcontainer}>
            <p style={styles.inputcontainerp}>Town/City</p>
            <input style={styles.inputcontainerinput}
              type="text"
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
          </div>
          <div className="inputcontainer" style={styles.inputcontainer}>
            <p style={styles.inputcontainerp}>State/Province</p>
            <input style={styles.inputcontainerinput}
              type="text"
              onChange={(e) => setState(e.target.value)}
              value={state}
            />
          </div>

          <button style={styles.formcontainerbutton} onClick={deliver}>Deliver to this Address</button>
        </div>
      </div>
    </section>
    );
}

const styles = {
  section:{
    width:"100%",
    height:"fit-content",
    maxWidth:"1400px",
    margin:"auto",
    backgroundColor:"rgb(234, 237, 237)",
    position:"relative",

  },
  main:{
    padding:"15px",
    marginTop:"20px",
    marginLeft:"650px",
  },
  formcontainer:{
    border:"1px solid lightgray",
    width:"55%",
    minWidth:"400px",
    height:"fit-content",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    padding:"15px",
    // backgroundColor:"#fff",
    margin:"auto",
    backgroundColor:"lightblue"
  },
  formcontainerbutton:{
    alignSelf:"flex-start",
    height:"33px",
    width:"250px",
    marginTop:"20px",
    backgroundColor:"#ffa32a",
    border:"none",
    outline:"none",
    borderRadius:"5px",
    cursor:"pointer"
  },
  inputcontainer:{
    width:"100%",
    padding:"10px"
  },
  inputcontainerp:{
    fontSize:"14px",
    fontWeight:"600"
  },
  inputcontainerinput:{
    width:"95%",
    height:"33px",
    paddingLeft:"5px",
    borderRadius:"5px",
    border:"1px solid lightgrey",
    marginTop:"5px",
    hover:{
     backgroundColor: "1px solid orange"
    }
  },
  
}
export default Address
