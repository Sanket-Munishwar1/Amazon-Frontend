import React from 'react'
import { Rating } from '@material-ui/lab';
import { useStateValue } from '../StateProvider';

function Card({ id, image,title,price,rating})  {

    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = (e) => {
        e.preventDefault();
    
        dispatch({
          type: "ADD_TO_BASKET",
          item: {
            id,
            title,
            price,
            image,
            rating,
          },
        });
    }
  return (
    <section style={styles.section}>
    <div className="image" style={styles.image}>
      <img src={image} alt="" style={styles.imageimg} />
    </div>
    <div className="description" style={styles.description}>
      <h5 style={styles.descriptionh5}>{title}</h5>
      <Rating
        name="text-feedback"
        value={rating}
        readOnly
        precision={0.5}
      />
      <p style={styles.descriptionp}>₹ {price}</p>

      <button style={styles.descriptionbutton} onClick={addToBasket}>Add to Cart</button>
    </div>
  </section>
  )
}
const styles = {
  section:{
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    zIndex: "10",
  },
  image:{
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
    flex:" 0.3",
  },
  imageimg:{
    width: "180px",
    height: "200px"
  },
  description:{
    width: "90%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    flex:" 0.7"
  },
  descriptionh5:{
    fontSize:"16px",
    fontWeight:"600"
  },
  descriptionp:{
    fontWeight:"600"
  },
  descriptionbutton:{
    width:"100%",
    height:"33px",
    backgroundColor:"#fa8900",
    border:"none",
    borderRadius:"10px",
    cursor:"pointer"
  }
}

export default Card
