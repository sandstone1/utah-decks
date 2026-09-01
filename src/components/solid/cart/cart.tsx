
// provide a local override to the editor because we are now using solid and react is
// our default until we migrate over
/** @jsxImportSource solid-js */

// this component will be working with our stores


// ==============================
// imports
// ==============================

// add the navigate function so I can keep the transition smooth
import { navigate } from 'astro:transitions/client';
// import in the createSignal, onCleanuo, onMount and Show components
import { createSignal, onCleanup, onMount, Show } from 'solid-js';
// import in useStore
import { useStore } from '@nanostores/solid';
// import in $cart store, $subtotal store and removeItemFromCart function
import { $cart, $subtotal,removeItemFromCart  } from '../../../stores/cart';
// import in CheckoutNotice
import { CheckoutNotice } from './checkout-notice';
// import in EmptyState
import { EmptyState } from './empty-state';
// import in the clearCart function
import { clearCart } from '../../../stores/cart';
// import in the formatCurrency function
import { formatCurrency } from '../../../utils/format-currency';
// import in the shopping cart icon
import FaSolidCartShopping from '../icons/shopping-cart';
// import in the CartItem types
import type { CartItem } from '../../../types';
// import in UserProps from types
import type { UserProps } from '../../../types';
// import in our styles
import styles from './cart.module.scss';


// ==============================
// cart component
// ==============================

// ==============================
// TS explaination
// ==============================

// in TypeScript, this file is like a separate room and it doesn't know what a User or Props is until we
// "bring them in" from our types.ts file

// we apply Props to the function signature so the component knows it's receiving a user object or null

// even though Props uses User, we sometimes you need to use the User type directly inside the component

// since Props depends on User, it's best practice to import both so the whole "blueprint" is available
// to the component

// Component<Props> says, this is a Solid component of type Props

// ==============================
// end of TS explaination
// ==============================


// remember, use props in Solid
export const Cart = ( props: UserProps ) => {

    // ==============================
    // create signal
    // ==============================

    // set up a signal
    const [ showNotice, setShowNotice ] = createSignal( false );
    const [ isOpen, setIsOpen ]         = createSignal( false );
    const [ width, setWidth ]           = createSignal( window.innerWidth );

    // ==============================
    // useStore
    // ==============================

    // $cart is our store
    // useStore subscribes our component to the nano store
    // const cart is the actual value
    const cart = useStore( $cart );

    // $subtotal is our store
    // useStore subscribes our component to the nano store
    // const subtotal is the actual value
    const subtotal = useStore( $subtotal );

    // ==============================
    // purpose : determine the browser width so we can modify placement of structure of the cart
    // ==============================

    // ==============================
    // onMount 1
    // ==============================

    // updateWidth function

    // remmeber, we can get the width value inside the return statement below
    const updateWidth = () => setWidth( window.innerWidth );

    // onMount runs once after the initial render but it sets up a persistent addEventListener
    // that lives on the window object until the component is destroyed
    onMount( () =>

        {

            // everytime the window resizes, call the updateWidth function and this will
            // set the width value and we can use this in the html below
            window.addEventListener( 'resize', updateWidth );

            // remove event listener when the component unmounts
            onCleanup( () => window.removeEventListener( 'resize', updateWidth ) );

        }

    ); // end of onMount

    // ==============================
    // end
    // ==============================

    // ==============================
    // purpose : close the cart when clicking outside the cart boundaries and when pressing
    // the escape key
    // ==============================

    // ==============================
    // define variable
    // ==============================

    // let cartContainerRef : HTMLElement | undefined;
    // let buttonRef        : HTMLButtonElement | undefined;

    // ==============================
    // handleClickOutside function
    // ==============================
/*
    const handleClickOutside = ( e : MouseEvent ) => {

        // if the user clicks anywhere outside the cart container and the cart is open
        // then close the cart
        if (
            cartContainerRef &&
            !cartContainerRef.contains( e.target as Node ) &&
            buttonRef &&
            !buttonRef.contains( e.target as Node ) &&
            isOpen()
        ) {

            // close the container
            setIsOpen( false );

        } // end of if

    }; // end of handleClickOutside
*/
    // ==============================
    // handleKeyPress function
    // ==============================

    const handleKeyPress = ( e : KeyboardEvent ) => {

        // had to disable the Space Bar key since it was causing the page to move downward
        if ( e.key === " " ) {

            e.preventDefault();

        } // end of if

        // if the user presses the escape key and the cart is open then close the cart
        if (

            e.key === "Escape" &&
            isOpen()

        ) {

            // close the container
            setIsOpen( false );

        } // end of if

    }; // end of handleKeyPress

    // ==============================
    // onMount 2
    // ==============================

    onMount( () =>

        {

            // if we press any key then we will call the handleKeyPress function above
            document.addEventListener( 'keydown', handleKeyPress, false );
            // if we click outside the modal ( anywhere in the document ) then we will call the
            // handleClickOutside function
            // document.addEventListener( 'click', handleClickOutside, false );
        
            onCleanup( () => {
    
                // make sure we remove the event listeners after we call the handleKeyPress and
                // handleClickOutside functions
                document.removeEventListener( 'keydown', handleKeyPress, false );
                // document.removeEventListener( 'click', handleClickOutside, false );
    
            } );

        }

    ); // end of onMount

    // ==============================
    // end
    // ==============================

    // ==============================
    // function
    // ==============================

    const handleCheckout = async () => {

        // no need for e.preventDefault(); since we are triggering handleCheckout inside a
        // button
        // e.preventDefault();

        // ==============================
        // step 1
        // ==============================

        // create our endpoint
        const endpoint = `/api/orders/post/create`;

        // create our data object

        // create our config object

        // STEP 3
        // make the fetch request and save the result to the const called res
        const res = await fetch(

            endpoint,

            // include the config object
            {
                method : 'POST',
                body   : JSON.stringify(
                    {
                        cart  : Object.values( cart() ), // change the $cart store object into an array so we can loop through the cart array inside the API route
                        total : subtotal() // the current total at checkout
                    }
                ),
                headers : {
                    'Content-Type' : 'application/json'
                }
            }
        );

        // STEP 4(a)
        // first, check to see if there is a request error
        if ( !res.ok ) {

            // STEP 4(b)
            // the fetch request above returns a response object and then we can apply the
            // json(); method to the reponse object and this will convert the response
            // object into a JavaScript object that we can use and we will call this JavaScript
            // object " data " and the data object in this case is the response we get back from
            // the api route
            const data = await res.json();

            // STEP 4(c)
            // console.log the error
            console.log( data );

        } else {

            // STEP 5(a)
            // the fetch request above returns a response object and then we can apply the
            // json(); method to the reponse object and this will convert the response
            // object into a JavaScript object that we can use and we will call this JavaScript
            // object " data " and the data object in this case is the response we get back from
            // the api route
            const data = await res.json();

            // STEP 5(b)
            // console.log the success message
            console.log( data );

            // STEP 5(c)
            // clear the user's cart before sending them to the order/[ id ] page
            clearCart();

            // STEP 5(f)
            // once the user clicks the checkout button and after we make a successful request
            // to the backend, where we create the order and add to the cart items table then we
            // want to redirect the user to the /order/[id] page and from there they can review
            // their order and click on the payment button to pay for the order
            setTimeout( () => {

                // remember, we want dynamic data, because if we write navigate('/order/data.orderId'),
                // the browser literally looks for a folder named "data.orderId" and that is why
                // we use backticks and the ${} syntax
                navigate( `/order/${ data.orderId }` );

            }, 0 );

        } // end of if else

        // ==============================
        // end of fetch API
        // ==============================

    } // end of handleCheckout



    return (

        <>

            {
                // ==============================
                // show the shoping cart icon and text when the conditions below are true
                // ==============================

                // ==============================
                // buttonMobile
                // ==============================

                // ==============================
                // h2Mobile
                // ==============================
        
                <button
                    class={ styles.buttonMobile }
                    onClick={ ( e ) => 
                        { 
                            e.stopPropagation(); 
                            setIsOpen( !isOpen() ); 
                        }
                    }
                >
                    <FaSolidCartShopping />

                    <Show when={ width() > 480 && width() <= 768 }>
                        { isOpen() ? 'Close Cart' : 'Your Cart' }
                    </Show>

                    <Show when={ width() <= 480 && isOpen() }>
                        &nbsp;&nbsp;Close Cart
                    </Show>

                </button>

            }

            {

                // ==============================
                // show the cart when the width is greater than 768 or isOpen is true
                // ==============================

                ( width() > 768 || isOpen() ) && (

                    // ==============================
                    // container
                    // ==============================

                    <aside class={ styles.cartContainer }>
    
                        { 
                            /*
                                <h2 onClick={ () => setIsOpen(false) }>Your Cart</h2>
                            */ 
                        }

                        <h2>Your Cart</h2>

                        { 
                            /*
                                when "Object.values( cart ).length > 0" is true show the cart; if not, use the fallback
        
                                Object.values( cart ) reaches into the object and pulls out only the data, turning it into an Array
                            */ 
                        }
            
                        <Show when={ Object.values( cart() ).length > 0 } fallback={ <EmptyState /> }>
        
                            {
                                /*
                                    // ==============================
                                    // container > ul ( cart items )
                                    // ==============================
                                */
                            }
                            <ul>
        
                                {
        
                                    // turn the cart object into a list
                                    Object.values( cart() ).map( ( entry : CartItem ) => {
        
                                        // no cart item
                                        if ( !entry ) {
                                            
                                            return null;
        
                                        } // end of if
        
                                        // otherwise, return the following cart item( s )
                                        return (
        
                                            <li>
        
                                                <span>{ entry.quantity }</span>
                                                <span>{ entry.item.title }</span>
                                                <span>
                                                    <button title="remove item" onClick={ () => removeItemFromCart( entry.item.id ) }>
                                                        &times;
                                                    </button>
                                                </span>
                                                <span>{ entry.item.price }</span>
                                            </li>
        
                                        )
        
                                    } )
        
                                }
        
                            </ul>
        
                            {
                                /*
                                    // ==============================
                                    // container > div ( cart details )
                                    // ==============================
                                */
                            }
                            <div>
        
                                <p>
                                    <span>Subtotal:</span>{ ' ' }
                                    { formatCurrency( subtotal() ) }
                                </p>
        
                                <p>
                                    <span>Shipping:</span>{ ' ' }
                                    <del>$10.00</del>
                                    <ins>Free</ins>
                                </p>
        
                                <p>
                                    <span class={ styles.cartContainerDetailsTotalLabel }>Total:</span>{ ' ' }
                                    { formatCurrency( subtotal() ) }
                                </p>
        
                                <p>
                                    <button
                                        onClick={ () => props.user ? handleCheckout() : setShowNotice( true ) }
                                    >
                                        Check Out
                                    </button>
                                </p>
        
                                {
                                    /*
                                        // ==============================
                                        // container > show notice
                                        // ==============================
                                    */
                                }
                                { 
                                    /*
                                        when showNotice is true then we want to show the CheckoutNotice
                                    */ 
                                }
                                <Show when={ showNotice() }>
        
                                    <CheckoutNotice />
        
                                </Show>
        
                            </div>
        
                        </Show>
        
                    </aside>

                )

            }

        </>

    )

}


