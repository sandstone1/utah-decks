
// provide a local override to the editor because we are now using solid and react is
// our default until we migrate over
/** @jsxImportSource solid-js */


// import in our addItemToCart function from our store
import { addItemToCart } from "../../../stores/cart";
// import in the ShopItem types
import type { ShopItem } from "../../../types";
// import in our styles
import styles from './add-to-cart.module.scss';


// ==============================
// create components
// ==============================

// AddToCart component
export const AddToCart = ( props : { item : ShopItem } ) => {

    return (

        <button class={ styles.addToCartButton } onClick={ () => addItemToCart( props.item ) }>
            Add To Cart
        </button>

    )

} // end of AddToCart component














