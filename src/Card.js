import { useState } from "react";

function Card({id, name, info,  image, price, removeTour}) {
    
    const[reedmore, setReedMore] = useState(false);
    function reedMoreHandler() {
        setReedMore(!reedmore);
    }
    const description = reedmore ?  info : `${info.substring(0,200)}....`;
    return (
       <div className="card">
           <img className="image" src={image} alt=""></img>
           <div className="tour-info">
             <h4 className="tour-price">₹{price}</h4>
             <h4 className="tour-name">{name}</h4>
           </div>
           <div className="desc">
              {description}
              <span onClick={reedMoreHandler} className="reedMore">
                {reedmore ? 'Show Less' : 'Reed More'}
              </span>
           </div>
           <button className="btnRed" onClick={() => removeTour(id)}>Not Interested</button>
       </div>
    );
}

export default Card;