

// provide a local override to the editor because we are now using solid and react is
// our default until we migrate over
/** @jsxImportSource solid-js */


// import in useStore
import { useStore } from '@nanostores/solid';
// impprt in createSignal, onMount and the Show component
import { createSignal, onMount, Show } from 'solid-js';
// import in the hashPassword function
import { handleUserName } from '../../../utils/handle-user-name';
// import in the Logout component
import Logout from '../user-account/logout';
// import in $cartItemCount store
import { $cartItemCount } from '../../../stores/cart';
// import in the $user store
import { $user } from '@/stores/user';
// import the User type
import type { User } from '../../../types';
// import in the Bootstrap svg bag icon 
import BsBag from '../icons/shopping-bag';
// import in our stylesheet
import styles from './nav.module.scss';


// define type InitialUserProps
type InitialUserProps = {

    initialUser : User | null;

}



// in solid, we have to pass in props instead of using destructuring like in react
export default function NavComponent( props : InitialUserProps ) {

    // ==============================
    // component state
    // ==============================

    // we are getting a hydration error so to fix this we will create a signal or a piece
    // of state and then set the state to true once the browser has mounted and then use
    // it below in the Show component

    // create a signal to track if we are in the browser
    const [ isClient, setIsClient ] = createSignal( false );

    // ==============================
    // nanostore state
    // ==============================

    /*
        The Rule for Solid Islands in Astro:

        Use props for initial data that never changes ( like a sandwich name or a blog post ID ).

        Use useStore() ( Stores ) for anything that can change while the user is sitting on the
        site ( like login status, cart counts, or user initials ).
    */

    // $cartItemCount is our store

    // useStore subscribes our component to the nano store and const cartItemCount
    // is the actual value
    const cartItemCount = useStore( $cartItemCount );

    // $user is our store

    // useStore subscribes our component to the nano store and const user is the
    // actual value
    const user = useStore( $user );

    // ==============================
    // define currentUser
    // ==============================

    // ==============================
    // *** IMPORTANT ***
    // what we are saying here is either use the user state from the $user store and if that
    // is not available then use the user state from the server or Astro.locals; either way,
    // we will get the last user value and we can then use that in our code below
    // ==============================

    // ==============================
    // this code solved the stripe state issue, which was happening after stripe did a hard
    // page refresh upon completing the payment and sending the user to the oredr/success.astro
    // page
    //
    // what was happening is that the Logout component is showing sign in, even though the
    // user is still signed in and to boot, the user initials were still showing a signed in user
    // 
    // stripe was doing a hard page refresh when sending the user back to the success page and
    // stripe was not using the clientRouter to redirect the user to the success page so the
    // state was being lost in the process
    // ==============================

    // first, get currentUser

    // the first check will be user() and this will look at our nano store and if the store
    // has been hydrated ( the client-side JS has run and filled in the store ) then we will
    // use that value

    // if the store is null or undefined ( which is always true during the initial server side
    // render ) then we will skip to the second part and use props.initialUser, which is the
    // data passed to the Nav component in the Header component from Astro.locals or the server

    /*
        Remember, to get reactivity in solid, we have to choose one of these two paths:

        Path A: direct signal ( no fallback variable )

        If we don't care about the initialUser fallback and just want the store then we can
        just do : return <div>{ user()?.name }</div>

        Path B: the "live calculation" using the arrow function

        If we want the fallback logic or props.initialUser then we must wrap it in an arrow
        function to keep it reactive
    */

    // by using an arrow function, we are creating a "derived signal" so that every time
    // user() changes, solid knows it needs to re-run that function and update the UI
    const currentUser = () => user() || props.initialUser;

    // ==============================
    // onMount
    // ==============================

    // this only runs in the browser after the first render
    onMount( () => {

        setIsClient( true );

    } ); // end of onMount

    // ==============================
    // define variables
    // ==============================

    // ==============================
    // functions
    // ==============================

    return (

        // ==============================
        // container
        // ==============================

        <div class={ styles.navContainer }>

            {
                /*
                    // ==============================
                    // container > div:nth-child( 1 ) ( container left )
                    // ==============================
                */
            }
            <div class={ styles.navContainerLeft }>

                <span role="img" aria-label="hotdog">🌭</span>
                <a href="/">
                    sndwch
                </a>

            </div>

            {
                /*
                    // ==============================
                    // container > div:nth-child( 2 ) ( container right )
                    // ==============================
                */
            }
            <div class={ styles.navContainerRight }>

                <ul>

                    <li>
                        <a href='/shop'>Shop</a>
                    </li>
                    <li>
                        <a href='/blog'>Blog</a>
                    </li>
                    <li>
                        <a href='/about'>About</a>
                    </li>
                    <li>
                        <a href='/dashboard'>Dashboard</a>
                    </li>
                    <li>
                        <a href="/shop">

                            <BsBag style={ { 'vertical-align': '0px', 'font-size': '3.6rem' } } />
                            {
                                /*
                                    only show if isClient is true and the cartItemCount is greater than 0
                                */
                            }
                            {
                                /*
                                    
                                    by wrapping the dynamic parts in isClient(), the Server renders nothing, and the
                                    Client initially renders nothing ( matching the server ) and once the page is "live,"
                                    onMount flips the switch, and the cart count pops in safely

                                */
                            }
                            <Show when={ isClient() && cartItemCount() > 0 }>

                                <span>{ cartItemCount() }</span>

                            </Show>
                        </a>
                    </li>
                    <li>
                        {
                            /*
                                
                                pass currentUser to the logout component so we can use : 
                                const currentUser = () => user() || props.initialUser; and make
                                sure we are using the correct state data

                            */
                        }
                        <Logout initialUser={ currentUser() } />
                    </li>
                    <li>
                        {
                            /*
                                
                                by wrapping the dynamic parts in isClient(), the Server renders nothing, and the
                                Client initially renders nothing ( matching the server ) and once the page is "live,"
                                onMount flips the switch, and the user initials pop in safely

                            */
                        }
                        <Show when={ isClient() && currentUser() }>

                            <span style={ { opacity : 1, transition : 'opacity 0.5s ease 0.5s' } }>{ handleUserName( currentUser()?.name ) }</span>

                        </Show>
                    </li>

                </ul>

            </div>

        </div>

    );

}

