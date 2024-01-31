import axios from '../axios';
import React, { useState } from 'react'



function AddProduct(){


    const [title, setTitle] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [price, setPrice] = useState(0);
    const [rating, setRating] = useState(0);


    const addProduct = (e) => {
        e.preventDefault();
    
        axios
          .post("/products/add", { title, imageURL, price, rating })
          .then(() => {
            setTitle("");
            setImageURL("");
            setPrice(0);
            setRating(0);
          })
          .catch((error) => alert(error.message));
    };

    return (
        <section style={styles.section}>
      <div className="logo" style={styles.logo}>
        <img style={styles.logoimg} src="./amazon_logo.png" alt="" />
      </div>

      <div className="formcontainer" style={styles.formcontainer}>
        <h3 style={styles.formcontainerh3}>Add Product</h3 >

        <div className="inputcontainer" style={styles.formcontainerinputcontainer}>
          <p style={styles.formcontainerinputcontainerp}>Title</p>
          <input style={styles.formcontainerinputcontainerinput}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="inputcontainer" style={styles.formcontainerinputcontainer}>
          <p style={styles.formcontainerinputcontainerp}>ImageURL</p>
          <input  style={styles.formcontainerinputcontainerinput}
            type="text"
            onChange={(e) => setImageURL(e.target.value)}
            value={imageURL}
          />
        </div>
        <div className="inputcontainer" style={styles.formcontainerinputcontainer}>
          <p style={styles.formcontainerinputcontainerp}>Price</p>
          <input style={styles.formcontainerinputcontainerinput}
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
        <div className="inputcontainer" style={styles.formcontainerinputcontainer}>
          <p style={styles.formcontainerinputcontainerp}>Rating</p>
          <input style={styles.formcontainerinputcontainerinput}
            type="number"
            onChange={(e) => setRating(e.target.value)}
            value={rating}
          />
        </div>

        <button onClick={addProduct} style={styles.button}>Add Product</button>
      </div>
    </section>
    )
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
      marginBottom: "20px"
    },
    logoimg:{
      width: "100%"
    },
    formcontainer :{
      border: "1px solid lightgray",
      width: "55%",
      height: "fit-content",
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
      hover:{
        border:"1px solid orange"
      }
      
    },
    button:{
      width: "70%",
      height: "35px",
      backgroundColor: "#f3b414",
      border: "none",
      outline: "none",
      borderRadius: "10px",
      marginTop: "30px",
    }
  
} 
export default AddProduct