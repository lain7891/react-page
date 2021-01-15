import React from 'react';

// You can remove the props word since it is an object and replace it with
// {} and inside all the props found in the app.js. 
// You can then remove the props for the jsx elements below. This is considered best practice. 
const Card = ({link, title, image, description}) => {
    const styles = {
        images: {width: "18rem"}
    }
    return (
        <div>
         <div className="card" style={styles.images}>
  <img src={image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={link} className="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
    );
};

export default Card;