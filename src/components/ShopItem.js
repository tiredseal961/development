import './ShopItem.css';
import {Button} from "@chakra-ui/react";
import React from "react";

function ShopItem(props) {
    const [name, price, mainIngredient, dietaryRestriction, description, image] = props.item;
    const addToCart = props.addToCart;
    const removeFromCart = props.removeFromCart;
    const alreadyInCart = props.alreadyInCart;

    function addOrRemoveButton(incart) {
        if (incart) {
            return (<Button width = "250" colorScheme='orange' variant='solid' onClick={() => removeFromCart(props.item)}>Remove from Cart</Button>)
        } else {
            return (<Button width = "250" colorScheme='green' variant='solid' onClick={() => addToCart(props.item)}>Add to Cart</Button>)
        }
    }
  return (
      <div>
          <div className="row">
                  <img id="item-img" src={image}/>
                  <div className="item-info">
                      <h1 className="itemName">{name}</h1>
                      <h2 className="itemPrice">${price}</h2>
                      <br/>
                      <p className="itemLine"> <span className="bold">Main Ingredient:</span> {mainIngredient}</p>
                      <p className="itemLine"><span className="bold">Dietary Restriction:</span> {dietaryRestriction}</p>
                      <br/>
                      <p className="itemLine">{description}</p>

                      <br/>
                      {addOrRemoveButton(alreadyInCart)}

                  </div>
          </div>
          <br/>
      </div>  );
}

export default ShopItem;
