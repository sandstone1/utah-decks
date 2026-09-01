

// provide a local override to the editor because we are now using solid and react is
// our default until we migrate over
/** @jsxImportSource solid-js */



// add the navigate function so I can keep the transition smooth
import { navigate } from 'astro:transitions/client';
// import in useStore
import { useStore } from '@nanostores/solid';
// import in the $user store
import { $user } from '@/stores/user';
// import the User type
import type { User } from '../../../types';
// import in our stylesheet
import styles from './logout.module.scss';


// define type InitialUserProps
type InitialUserProps = {

    initialUser : User | null;

}


// Logout component
// pass in currentUser from Nav component
export default function Logout( props : InitialUserProps ) {

    // ==============================
    // component state
    // ==============================

    // ==============================
    // nanostore state
    // ==============================

    /*
        The Rule for Solid Islands in Astro:

        Use props for initial data that never changes ( like a sandwich name or a blog post ID ).

        Use user() ( stores ) for anything that can change while the user is sitting on the site
        ( like login status, cart counts, or user initials ).
    */

    // $user is our store

    // useStore subscribes our component to the nano store and const user is the
    // actual value
    const user = useStore( $user );

    // then get currentUser
    const currentUser = () => user() || props.initialUser;

    // ==============================
    // define variables
    // ==============================

    // ==============================
    // functions
    // ==============================

    // ==============================
    // handleLogout function
    // ==============================

    const handleLogout = async () => {

        // no need for e.preventDefault(); since we are triggering handleLogout inside a
        // button
        // e.preventDefault();

        // ==============================
        // step 1
        // ==============================

        // ==============================
        // frontend validation
        // ==============================

        // STEP 1
        // create our endpoint
        const endpoint = `/api/user/post/logout`;

        // create our data object

        // create our config object

        // STEP 3
        // make the fetch request and save the result to the const called res
        const res = await fetch(

            endpoint,

            // include the config object
            {
                method  : 'POST',
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
            // console.log data
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
            // console.log data
            console.log( data );

            // remember, nanostore rules are : read using " const user = useStore( $user ); " and
            // write using " $user.set(); " or write to the store directly 

            /*
                <h3>{ user()?.name }</h3> 

                // 2. To change the name ( Writing )
                const updateName = () => {
                    $user.set( { name: 'New Name' } );
                }
            */

            // STEP 5(f)
            // redirect to the home page
            navigate( '/' );

            // STEP 5(g)
            // set user to null so that user() will be null after the user logs out; thereby,
            // making the nav item for user initials disappear after logging out
            setTimeout( () => {

                $user.set( null );

            }, 200 ); // delay this change from user initials so that the change does
            // appear until after the user has been redirected to the home page and this work great
            // with the rotating cube transaction

        }

    } // end of handleLogout

    // ==============================
    // end of fetch API
    // ==============================

    return (

        <>

            {

                currentUser() ? (

                    <div class={ styles.logoutContainer }>

                        <button onClick={ handleLogout }>
                            Logout
                        </button>

                    </div>
                
                ) : (
                
                    <div class={ styles.logoutContainer }>
    
                        <a href='/signin'>
                            Sign in
                        </a>

                    </div>

                )

            }

        </>

    )

} // end of Logout component


