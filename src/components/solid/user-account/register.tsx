


// provide a local override to the editor because we are now using solid and react is
// our default until we migrate over
/** @jsxImportSource solid-js */



// impprt in createSignal
import { createSignal } from 'solid-js';
// add the navigate function so I can keep the transition smooth
import { navigate } from 'astro:transitions/client';
// import in the Spinner component
import Spinner from '../spinner/spinner-bounce-dark';
// import in the ErrorMessage component
import ErrorMessageComponent from '../error-message/em-register';
// import in the SuccessMessage component
import SuccessMessageComponent from '../success-message/sm-register';
// import in our stylesheet
import styles from './register.module.scss';



export default function RegisterPage() {

    // ==============================
    // component state
    // ==============================

    // set component level state
    const [ name, setName ]                                     = createSignal( '' );
    const [ email, setEmail ]                                   = createSignal( '' );
    const [ password, setPassword ]                             = createSignal( '' );
    const [ confirmPassword, setConfirmPassword ]               = createSignal( '' );
    const [ isAdmin, _setIsAdmin ]                              = createSignal( false ); // getting TS warning since isAdmin is not being used so did _setIsAdmin
    // to make teh TS warning to go away
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
        // frontend validation
        // ==============================

        // everytime we submit the form we need to clear out any prior error messages
        setFrontendErrorMessage( '' );

        // front end validation
        if ( name() === '' || email() === '' || password() === '' || confirmPassword() === '' ) {

            // if the user did not enter the required information in the name, email or message
            // field then set a new error message
            setFrontendErrorMessage( 'All fields must be filled out in order to register. Please try again.' );

            // reset state here
            setName( '' );
            setEmail( '' );
            setPassword( '' );
            setConfirmPassword( '' );

            // exit the funtion at this point in the code
            return;
    
        } // end of if

        // ==============================
        // fetch API
        // ==============================

        // next we need to send the name, email, password, confirmPassword and isAdmin key
        // value pairs to the register api route so that we can save the user's
        // information in the database

        // we want to send an http request when the form is submitted

        // STEP 1
        // initially, isLoading is set to true
    
        // remember we use the isLoading state primarily when we are communicating with the
        // database from the frontend since there may be a short delay between the time from
        // when the request is made to the time from when the server response is returned
        setIsLoading( true );

        // STEP 2
        // create our endpoint
        const endpoint = `/api/user/post/register`;

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
                        name            : name(),
                        email           : email(),
                        password        : password(),
                        confirmPassword : confirmPassword(),
                        isAdmin         : isAdmin()
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
            setName( '' );
            setEmail( '' );
            setPassword( '' );
            setConfirmPassword( '' );

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
            setIsLoading( false );

            // STEP 5(c)
            // console.log data for the moment
            // console.log( data );

            // STEP 5(d)
            // set the success message
            setFrontendSuccessMessage( data.message );

            // STEP 5(e)
            // reset the component state
            setName( '' );
            setEmail( '' );
            setPassword( '' );
            setConfirmPassword( '' );

            // STEP 5(f)
            // redirect the new created user
            setTimeout( () => {

                navigate( '/' );

            }, 1500 );

        }

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
    
                    <div class={ styles.registerFormContainer }>


                        <h5>Register</h5>

                        <form class={ styles.registerFormContainerForm } noValidate onSubmit={ handleSubmit } >

                            {
                                /*
                                    // ==============================
                                    // input field - name
                                    // ==============================
                                */
                            }
                            <div class={ styles.registerFormContainerFormNameInputContainer }>
                                <input
                                    name="name"
                                    type="text"
                                    id="sign-in-name"
                                    required
                                    autocomplete='name' // this helps password managers suggest the right input
                                    value={ name() }
                                    onChange={ ( e ) => setName( e.target.value ) }
                                />                        
                                <label
                                    for="sign-in-name"
                                    class={

                                        name() === '' ? 
                                        styles.registerFormContainerFormNameInputContainerLabel :
                                        styles.registerFormContainerFormNameInputContainerLabelShrink

                                    }
                                >
                                    Name
                                </label>
                            </div>

                            {
                                /*
                                    // ==============================
                                    // input field - email
                                    // ==============================
                                */
                            }
                            <div class={ styles.registerFormContainerFormEmailInputContainer }>
                                <input
                                    name="email"
                                    type="email"
                                    id="sign-in-email"
                                    required
                                    autocomplete='email'
                                    value={ email() }
                                    onChange={ ( e ) => setEmail( e.target.value ) }
                                />                        
                                <label
                                    for="sign-in-email"
                                    class={

                                        email() === '' ? 
                                        styles.registerFormContainerFormEmailInputContainerLabel :
                                        styles.registerFormContainerFormEmailInputContainerLabelShrink

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
                            <div class={ styles.registerFormContainerFormPasswordInputContainer }>
                                <input
                                    name="password"
                                    type="password"
                                    id="sign-in-password"
                                    required
                                    autocomplete='new-password'
                                    value={ password() }
                                    onChange={ ( e ) => setPassword( e.target.value ) }
                                />                        
                                <label
                                    for="sign-in-password"
                                    class={

                                        password() === '' ? 
                                        styles.registerFormContainerFormPasswordInputContainerLabel :
                                        styles.registerFormContainerFormPasswordInputContainerLabelShrink

                                    }
                                >
                                    Password
                                </label>
                            </div>

                            {
                                /*
                                    // ==============================
                                    // input field - confirm password
                                    // ==============================
                                */
                            }
                            <div class={ styles.registerFormContainerFormConfirmPasswordInputContainer }>
                                <input
                                    name="confirm-password"
                                    type="password"
                                    id="sign-in-confirm-password"
                                    required
                                    autocomplete='confirm-new-password'
                                    value={ confirmPassword() }
                                    onChange={ ( e ) => setConfirmPassword( e.target.value ) }
                                />                        
                                <label
                                    for="sign-in-confirm-password"
                                    class={

                                        confirmPassword() === '' ? 
                                        styles.registerFormContainerFormConfirmPasswordInputContainerLabel :
                                        styles.registerFormContainerFormConfirmPasswordInputContainerLabelShrink

                                    }
                                >
                                    Confirm Password
                                </label>
                            </div>

                            {
                                /*
                                    // ==============================
                                    // register button
                                    // ==============================
                                */
                            }
                            <div class={ styles.registerFormContainerFormButtonContainer }>
                
                                <button
                                    type="submit"
                                    class={ styles.registerFormContainerFormButtonContainerButton }
                                >
                                    Register
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
                        <div class={ styles.registerFormContainerFormSignInContainer }>
                            Already a customer?&nbsp;&nbsp;
                            <a
                                class={ styles.registerFormContainerFormSignInContainerLink }
                                href="/signin"
                            >
                                <span>Sign In</span>
                            </a>
                        </div>

                    </div>

                )

            }

        </>

    );

}

