
// ==============================
// imports
// ==============================

// import in computed from nanostores
import { computed } from 'nanostores';
// import in persistentMap from nanostores/persistent, which means we will have persistant
// state and persistentMap creates a separate localStorage entry for every single item in
// the cart
import { persistentMap } from '@nanostores/persistent';
// import in the CartItem and ShopItem types from types.ts
import type { CartItem, ShopItem } from '../types';


// ==============================
// define stores
// ==============================

// cart nanostore
// this generic type is a way of telling TypeScript: "This object is a collection where the key is a
// string ( the Product ID ) and the value is a CartItem object "

// we are using Record instead of Array since it is much faster to find a specific item with Records 
export const $cart = persistentMap<Record<string, CartItem>>(
    'cart:', // tells nano stores to save these items in localStorage with keys like cart:1, cart:2,
    {}, // initial state is an empty object
    // since our CartItem is an object, we must provide the encode and decode functions so that nano stores knows how to turn our objects into strings for storage
    {
        encode: JSON.stringify, // nano stores runs this to flatten our cart item into a string so it can fit into localStorage
        decode: JSON.parse // when the page refreshes, nano stores pulls the string out of localStorage and runs this to convert it back into a usable JavaScript object
    }
);


// subtotal nanostore
// computed is a "smart" store that automatically updates whenever another store changes
// and in this case that store is $cart and entries are all the items stored in the $cart

// remember, subtotal will be a new store, hence $subtotal
export const $subtotal = computed( $cart, ( entries ) => {

    let subtotal = 0;

    // in JS, objects are "collections of keys", while arrays are "ordered lists" and since objects
    // don't have built-in list methods like .forEach or .map, we have to "extract" the data first
    // using statement like Object.values( entries )

    // since our $cart store is an object, we can't loop through it directly like an Array so we
    // have to use Object.values( entries ) to convert our "id-based" map or object into an array
    // that we can loop through using forEach

    // Object.values: converts our "id-based" map into a list that we can count
    Object.values( entries ).forEach( ( entry ) =>
        
        {
            // if entry does not exist, exit the function
            if ( !entry ) {
                return;
            }

            // get subtotal
            subtotal += entry.quantity * entry.item.price;

        } 

    );

    // return subtotal
    return subtotal;

} ); // end of const subtotal


// cart item count nanostore
// computed is a "smart" store that automatically updates whenever another store changes
// and in this case that store is $cart and entries is the current value of the $cart or
// all the items stored in the $cart

// remember, subtotal will be a new store, hence $subtotal
export const $cartItemCount = computed( $cart, ( entries ) => {

    // in JS, objects are "collections of keys", while arrays are "ordered lists" and since objects
    // don't have built-in list methods like .forEach or .map, we have to "extract" the data first
    // using statement like Object.values( entries )

    // since our $cart store is an object, we can't loop through it directly like an Array so we
    // have to use Object.values( entries ) to convert our "id-based" map or object into an array

    // convert our cart object, which consist of cart item objects into an array of cart items
    const cartArray = Object.values( entries );

    // use reduce to sum up the quantities in the cartArray
    const cartItemsCount = 
        cartArray.reduce( ( accumlator, currentElement ) => // remember, we implicitly returing the 2 statements below
            accumlator + Number( currentElement.quantity || 0 ), // fallback to 0 if quantity is missing
            0
        );

    // return the total items in our $cart nano store
    return cartItemsCount;

} ); // end of const $cartItemCount


// ==============================
// functions
// ==============================

// add items to cart function
export function addItemToCart( item : ShopItem ) {

    // get the cart
    const cart = $cart.get();
    // get cartItem by item.id
    const cartItem = cart[ item.id ];
    // get the quantity
    const quantity = cartItem ? cartItem.quantity : 0;

    // set the new cart
    $cart.setKey( 
        
        item.id.toString(), 

        {
            item,
            quantity : quantity + 1

        }

    )

} // end of addItemToCart function


// remove one item from the cart function
export function removeItemFromCart( itemId : number ) {

    // @ts-ignore
    // this will remove the item from the cart and this is the way you do it in nanostores
    $cart.setKey( itemId, undefined );

} // end of removeItemFromCart function


// remove all items from the cart function
export function clearCart() {

    // reset the $cart nanostore to an empty object
    $cart.set( {} );

} // end of clearCart function

