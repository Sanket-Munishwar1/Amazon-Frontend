import React from "react";
import { useStateValue } from "../StateProvider";
import Navbar from "./Navbar";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../reducer";
import { useNavigate } from "react-router-dom";

function Checkout(){
    const [{ basket }, dispatch] = useStateValue()
    const navigate = useNavigate()
    const removeFromBasket = (e, id) => {
        e.preventDefault();
    
        dispatch({
          type: "REMOVE_FROM_BASKET",
          id: id,
        });
    };
    return(
      <section style={styles.section}>
      <Navbar />

      <div className="main" style={styles.main}>
        <div className="shoppingcart" style={styles.shoppingcart}>
          <h2 style={styles.shoppingcarth2}>Shopping Cart</h2>

          {basket?.map((product) => (
            <div style={styles.product} className="product">
              <div style={styles.image} className="image">
                <img style={styles.imageimg} src={product.image} alt="" />
              </div>
              <div style={styles.description} className="description">
                <h4 style={styles.descriptionh4}>{product.title}</h4>

                <p style={styles.descriptionp}>₹ {product.price}</p>

                <button style={styles.descriptionbutton} onClick={(e) => removeFromBasket(e, product.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div style={styles.subtotal} className="subtotal">
          <CurrencyFormat 
            renderText={(value) => (
              <>
                <p style={styles.subtotalp}>
                  Subtotal ( {basket.length} items ) : <strong> {value}</strong>
                </p>
                <small style={styles.subtotalsmall}>
                  <input type="checkbox" />
                  <span style={styles.subtotalspan}>This order contains a gift.</span>
                </small>
              </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType="text"
            thousandSeparator={true}
            prefix={"₹ "}
          />

          <button style={styles.subtotalbutton} onClick={() => navigate("/address")}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </section>
    )
}





const styles={
  section:{
    width: "100%",
    maxWidth: "1400px",
    height: "fit-content",
    margin: "auto",
    backgroundColor: "rgb(234, 237, 237)",
    border: "1px solid red",
    position: "relative",
    // paddingTop:"100px",
  },
  main:{
    display: "flex",
    padding: "15px",
    marginTop:"20px"
  },
  // @mediaonlyscreenand(max-width: 1200px): {
  //   flex-direction: "column"
  // },
  shoppingcart:{
    padding: "15px",
    backgroundColor: "#fff",
    flex: "0.7",
    display:"flex",
    marginBottom:"50rem"
  },
  shoppingcarth2:{
    fontWeight: "500",
    borderBottom: "1px solid lightgray",
    paddingBottom: "15px"
  },
  subtotal:{
    flex: "0.3",
    backgroundColor: "#fff",
    marginLeft: "15px",
    height: "200px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom:"50rem"
  },
  subtotalp:{
    fontSize: "20px"
  },
  subtotalsmall:{
    display: "flex",
    alignItems: "center",
    marginTop: "10px",
  },
  subtotalspan:{
    marginLeft: "10px"
  },
  subtotalbutton:{
    width: "65%",
    height: "33px",
    marginTop: "20px",
    backgroundColor: "#ffd814",
    border: "none",
    outline: "none",
    borderRadius: "8px"
  },
  product:{
    display: "flex",
    alignItems: "center"
  },
  image:{
    flex: "0.3"
  },
  imageimg:{
    width: "100%"
  },
  description:{
    flex: "0.7"
  },
  descriptionh4:{
    fontWeight: "600",
    fontSize: "18px",
  },
  descriptionp:{
    fontWeight: "600",
    marginTop: "10px"
  },
  descriptionbutton:{
    backgroundColor: "transparent",
    color: "#1384b4",
    border: "none",
    outline: "none",
    marginTop: "10px",
    cursor: "pointer",
    textDecoration: "underline"
  },
}

export default Checkout