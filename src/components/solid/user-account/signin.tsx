


// provide a local override to the editor because we are now using solid and react is
// our default until we migrate over
/** @jsxImportSource solid-js */



// impprt in createSignal
import { createSignal } from 'solid-js';
// add the navigate function so I can keep the transition smooth
import { navigate } from 'astro:transitions/client';
// import in the Spinner component
import Spinner from '../spinner/spinner-bounce-dark';
// import in the ErrorMessageComponent component
import ErrorMessageComponent from '../error-message/em-signin';
// import in the SuccessMessageComponent component
import SuccessMessageComponent from '../success-message/sm-signin';
// import in our stylesheet
import styles from './signin.module.scss';



export default function SignInPage() {

    // ==============================
    // component state
    // ==============================

    // set component level state
    const [ email, setEmail ]                                   = createSignal( '' );
    const [ password, setPassword ]                             = createSignal( '' );
    const [ isLoading, setIsLoading ]                           = createSignal( false );
    const [ frontendErrorMessage, setFrontendErrorMessage ]     = createSignal( '' );
    const [ frontendSuccessMessage, setFrontendSuccessMessage ] = createSignal( '' );

    // ==============================
    // nanostore state
    // ==============================

    // ==============================
    // define variables
    // ==============================

    // ==============================
    // functions
    // ==============================

    // ==============================
    // handleSubmit function
    // ==============================

    const handleSubmit = async ( e : SubmitEvent ) => {

        e.preventDefault();

        // ==============================
        // step 1
        // ==============================

        // ==============================
        // frontend validation
        // ==============================

        // everytime we submit the form we need to clear out any prior error messages
        setFrontendErrorMessage( '' );

        // before we dispatch the userRegisterActionCreator let's do some front end validation
        if ( email() === '' || password() === '' ) {

            // if the user did not enter the required information in the email and / or
            // password fields then set a new error message
            setFrontendErrorMessage( 'All fields must be filled out in order to sign in. Please try again.' );

            // reset state here
            setEmail( '' );
            setPassword( '' );

            // exit the funtion at this point in the code
            return;
    
        } // end of if

        // initially, isLoading is set to true
    
        // remember we use the isLoading state primarily when we are communicating with the
        // database from the frontend since there may be a short delay between the time from
        // when the request is made to the time from when the server response is returned
        setIsLoading( true );

        // STEP 2
        // create our endpoint
        const endpoint = `/api/user/post/signin`;

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
                        email    : email(),
                        password : password()
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
            // once we get the data, set isLoading to false
            setIsLoading( false );

            // STEP 4(d)
            // set the error message
            setFrontendErrorMessage( data.message );

            // STEP 4(e)
            // reset the component state
            setEmail( '' );
            setPassword( '' );

        } else {

            // STEP 5(a)
            // the fetch request above returns a response object and then we can apply the
            // json(); method to the reponse object and this will convert the response
            // object into a JavaScript object that we can use and we will call this JavaScript
            // object " data " and the data object in this case is the response we get back from
            // the api route
            const data = await res.json();

            // STEP 5(b)
            // once we get the data, set isLoading to false

            // remember, to comment this out when we uncomment createCustomerData();
            setIsLoading( false );

            // STEP 5(c)
            // console.log data for the moment
            // console.log( data );

            // STEP 5(d)
            // set the success message
            setFrontendSuccessMessage( data.message );

            // STEP 5(e)
            // reset the component state
            setEmail( '' );
            setPassword( '' );

            // STEP 5(f)
            // redirect the signed in user
            setTimeout( () => {

                navigate( '/' );

            }, 0 ); // skip the json success message and send the user directly to the home page

        } // end of if else

        // ==============================
        // end of fetch API
        // ==============================

    } // end of handleSubmit


    return (

        <>

            {

                isLoading() ? (

                    <div class={ styles.spinnerContainer }>

                        <Spinner />

                    </div>

                ) : frontendErrorMessage() ? (

                    <div class={ styles.errorMessageContainer }>

                            <ErrorMessageComponent                    
                                resetFrontendErrorMessage={ () => setFrontendErrorMessage( '' ) }
                            >
                                { frontendErrorMessage() }
                            </ErrorMessageComponent>

                    </div>

                ) : frontendSuccessMessage() ? (

                    <div class={ styles.successMessageContainer }>

                        <SuccessMessageComponent                    
                            resetFrontendSuccessMessage={ () => setFrontendSuccessMessage( '' ) }
                        >
                            { frontendSuccessMessage() }
                        </SuccessMessageComponent>

                    </div>

                ) : ( 

                    // ==============================
                    // container
                    // ==============================

                    <div class={ styles.signInFormContainer }>


                            <h5>Sign In</h5>

                            <form noValidate onSubmit={ handleSubmit } >

                                {
                                    /*
                                        // ==============================
                                        // input field - email
                                        // ==============================
                                    */
                                }
                                <div class={ styles.signInFormContainerFormEmailInputContainer }>
                                    <input
                                        name="email"
                                        type="email"
                                        id="sign-in-email"
                                        required
                                        autocomplete='email' // this helps password managers suggest the right input
                                        value={ email() }
                                        onChange={ ( e ) => setEmail( e.target.value ) }
                                    />                        
                                    <label
                                        for="sign-in-email"
                                        class={

                                            email() === '' ? 
                                            styles.signInFormContainerFormEmailInputContainerLabel :
                                            styles.signInFormContainerFormEmailInputContainerLabelShrink
                                        }
                                    >
                                        Email
                                    </label>
                                </div>

                                {
                                    /*
                                        // ==============================
                                        // input field - password
                                        // ==============================
                                    */
                                }
                                <div class={ styles.signInFormContainerFormPasswordInputContainer }>
                                    <input
                                        name="password"
                                        type="password"
                                        id="sign-in-password"
                                        required
                                        autocomplete='current-password'
                                        value={ password() }
                                        onChange={ (e) => setPassword( e.target.value ) }
                                    />                        
                                    <label
                                        for="sign-in-password"
                                        class={

                                            password() === '' ? 
                                            styles.signInFormContainerFormPasswordInputContainerLabel :
                                            styles.signInFormContainerFormPasswordInputContainerLabelShrink

                                        }
                                    >
                                        Password
                                    </label>
                                </div>

                                {
                                    /*
                                        // ==============================
                                        // sign in button
                                        // ==============================
                                    */
                                }
                                <div class={ styles.signInFormContainerFormButtonContainer }>
                    
                                    <button
                                        type="submit"
                                        class={ styles.signInFormContainerFormButtonContainerButton }
                                    >
                                        Sign in
                                    </button>
                        
                                </div>
                    
                            </form>

                            {
                                /*
                                    // ==============================
                                    // sign in link
                                    // ==============================
                                */
                            }
                            <div class={ styles.signInFormContainerFormSignInContainer }>
                                New customer?&nbsp;&nbsp;
                                <a
                                    class={ styles.signInFormContainerFormSignInContainerLink }
                                    href="/register"
                                >
                                    <span>Create a new account</span>
                                </a>
                            </div>

                        </div>

                )

            }

        </>

    );

}

