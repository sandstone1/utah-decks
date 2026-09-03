



// ==============================
// note #1
// ==============================

// ==============================
// send transactional email to user
// ==============================

// ==============================
// remember, we had to approve our domain inside Postmark so that we could
// send transitional emails to users or use contact forms in our site
// ==============================

// remember, to send a transitional email ( i.e. an order confirmation, welcome email after
// user registration, password reset, etc. ) change the " To : " value below to `${ email }`,
// which is the user email

// ==============================
// end of send transactional email to user
// ==============================





// ==============================
// note #2
// ==============================

// ==============================
// change the from address for the transactional email to user
// ==============================

// in this case, I am changing the from email address from
// " rhall@silveradorealestatepartners.com " or
// " process.env.postmark_from_email_default " to
// " orders@silveradorealestatepartners.com " or
// " process.env.postmark_from_email_orders "

// step 1 -
// remember, we had to add a new signature under the heading " Sender Signatures "
// on the Postmark site and once we added a new signature then Postmark sent an
// email confirmation to the new from email address or 
// " orders@silveradorealestatepartners.com " and once I confirmed the new from email
// address I could that email address as the from email as needed

// ==============================
// remember, since we verified our domain for enchantedratings.com we did not
// have to do step 1 above and verifying our domain also allowed us to use any
// email prefix we like, whether that be roger@enchantedratings.com or
// orders@enchantedratings.com, etc.
// ==============================

// step 2 -
// remember, I had to update the next.config.js file with this new variable setup and
// add this address to my environmental variable setup for this website in Netlify

// step 3 -
// then I had to change the " From : " value from
// " process.env.postmark_from_email_default " to
// " process.env.postmark_from_email_orders "

// ==============================
// end of change the from address for the transactional email to user
// ==============================







// ==============================
// note #3
// ==============================

// ==============================
// remember, in the portfolio site or " http://localhost:3016/contact " we have an example
// of how to use react email
// ==============================








// the function below will handle incoming requests sent to 
// " localhost:3036/api/email/post/transactional/postmark/recaptcha-badge/general-contact-form " and inside
// the function we can execute server side code and any code we write inside this function
// will never end up in any client side code bundle

// bring in the Postmark email library
import postmark from 'postmark';

// get the Postmark client constant and we can use this constant to route the user generated
// email to Postmark and then to the Company specified email address
const client = new postmark.ServerClient( import.meta.env.POSTMARK_SERVER_TOKEN );



// ==============================
// purpose : allow for contact form submissions from users
// ==============================

// @desc    - use the Postmark email API to receive emails from our contact us form
// @route   - POST request to /api/email/post/transactional/postmark/recaptcha-badge/general-contact-form
// @access  - Public route

// request = HTTP incoming message
export async function POST( { request } ) {

    // in this function we will accept an incoming request with the name, email and message
    // fields and in this case we do not want to verify that the request is coming from an
    // authenticated user and then we will use the Postmark email api to route the user
    // generated contact form email through their servers first and then Postmark will route
    // the information in the user generated email to a specified Company's email address
    // and then we will return some json data to the client or browser as part of the server
    // response

    // ==============================
    // check request type
    // ==============================

    // check for the request type
    if ( request.method !== 'POST' ) {

        // exit the funtion at this point in the code
        return;

    }

    // ==============================
    // request type correct - proceed forward
    // ==============================

    // ==============================
    // extract data from incoming request
    // ==============================

    // get the data from the request
    const body = await request.json();

    // extract the first name, last name, email address, phone number, message and
    // token from the incoming request and then save the data to the const " first_name ",
    // " last_name ", " email ", " phone ", " message " and " token "
    const first_name = body.first_name;
    const last_name  = body.last_name;
    const email      = body.email.trim().toLowerCase(); // make sure we decapitalize User@Example.com or in any large letters;
    const phone      = body.phone;
    const message    = body.message;
    const token      = body.token;

    // ==============================
    // server side validation - #1
    // ==============================

    // ==============================
    // server side validation - verify reCAPTCHA
    // ==============================

    // try sending the secret key and the response token to the Google reCAPTCHA
    // API for authentication
    try {

        // step 1
        // first let's get the secret key
        const secret = import.meta.env.GOOGLE_RECAPTCHA_BADGE_SECRET_KEY;

        // ==============================
        // catch the error
        // ==============================

        // ==============================
        // even though the v2 invisible reCAPTCHA option should always send a token when a
        // user clicks on the form submit button; however, out of an abundance of caution
        // I made sure to throw an error if for some reason the token equaled null or
        // equaled an empty string
        // ==============================

        // step 2
        // need to check for null or an empty string and then throw an Error if needed
        if ( token === null || token === '' ) {

            throw new Error();

        } // end of if

        // step 3
        // get the Google reCAPTCHA API endpoint
        const endpoint = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`;

        // step 4
        // make the fetch request to Google reCAPTCHA API for authentication
        const response = await fetch(
            endpoint,
            {
                method : 'POST'
            }
        );

        // STEP 5
        // the fetch request above returns a response object and then we can apply the
        // json(); method to the reponse object and this will convert the response
        // object into a JavaScript object that we can use and we will call this JavaScript
        // object " data " and the data object in this case is the response we get back from
        // the api route
        const data = await response.json();

        // test
        // console.log( token );
        // console.log( res );
        // console.log( res.ok );
        // console.log( data );
        // console.log( data.success );
        // console.log( res.status );

        // ==============================
        // catch the error
        // ==============================

        // ==============================
        // remember, if data.success is false then we need to catch this error and to make
        // sure we catch this error we threw an error as shown in step 6 below; otherwise,
        // the catch block was not catching all the instances when data.success was false,
        // which is bad
        // ==============================

        // step 6
        // if data.success is false then throw an Error
        if ( !data.success ) {

            throw new Error();

        } // end of if

        // step 7
        // ==============================
        // if everything ran ok or data.success is true then proceed to server side
        // validation - #2
        // ==============================

        // note
        // ==============================
        // remember, the below code will run if we uncomment out the code block and when
        // it runs we will see a success message of " reCAPTCHA successfully verified "
        // in the frontend and we will exit the function at this point in the code; however,
        // if reCAPTCHA was successfully verified then we want to do nothing in this code block
        // and just move on to the next code block or server side validation - #2  
        // ==============================
        /*
            // 201 " means that the request was successful "
            res.status( 200 );

            // and then send back to the browser as part of the server response an object
            // and use the json data transfer format and remember the object below will be
            // transformed into json automatically
            res.json( { message : 'reCAPTCHA successfully verified' } );

            // exit the funtion at this point in the code
            return;
        */

    } catch( error ) {

        // test
        console.log( error );

        // " The 500 ( internal server error ) status code indicates that the server encountered
        // an unexpected condition that prevented it from fulfilling the request. "

        // the astro / web standard way to send a response

        // and then send back to the browser as part of the server response an object
        // and use the json data transfer format and remember the object below will be
        // transformed into json automatically
        return new Response(

            JSON.stringify( { message : 'Error verifying reCAPTCHA. Please try again.' } ),
            { 
                status  : 500,
                headers : { 'Content-Type': 'application/json' }
            }

        );

    } // end of try catch

    // ==============================
    // reCaptcha data.success was true - proceed forward
    // ==============================

    // ==============================
    // server side validation - #2
    // ==============================

    // ==============================
    // server side validation - confirm first name, last name, email, phone and message
    // fields
    // ==============================

    // check and make sure the data exist and do some server side validation here and
    // remember that frontend validation can be circumvented and therefore manipulated
    // so we shouldn't relay on frontend validation and remember frontend vaidation is
    // more of a convinent feature and something that is nice to have; instead, to really
    // make sure we get valid data and that we work with valid data we should always
    // validate the data on the server or inside the api route since the code on the server
    // can't be viewed or changed by unscrupulous users
    if ( first_name === '' || last_name === '' || email === '' || phone === '' || message === '' ) {

        // 400 represents a bad request or " indicates that the server cannot or will
        // not process the request due to something that is perceived to be a client error "

        // the astro / web standard way to send a response

        // and then send back to the browser as part of the server response an object
        // and use the json data transfer format and remember the object below will be
        // transformed into json automatically
        return new Response(

            JSON.stringify( { message : 'The first name, last name, email, phone and message fields have to be filled out in order to send the contact form. Please try again.' } ),
            { 
                status  : 400,
                headers : { 'Content-Type': 'application/json' }
            }

        );

    } // end of if

    // ==============================
    // first name, last name, email, phone and message fields exist - proceed forward
    // ==============================

    // ==============================
    // server side validation - #3
    // ==============================

    // ==============================
    // server side validation - validate the email
    // ==============================

    // ==============================
    // email validation function
    // ==============================

    // this came from
    // " https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript "
    // and was the second answer on the page
    function validateEmail( email ) {

        // the regex
        const regex = /\S+@\S+\.\S+/;

        // test the regex against the email
        const isEmailValid = regex.test( email );

        // return the boolean isEmailValid
        return isEmailValid;

    } // end of validateEmail

    if ( !validateEmail( email ) ) {

        // 400 represents a bad request or " indicates that the server cannot or will
        // not process the request due to something that is perceived to be a client error "

        // the astro / web standard way to send a response

        // and then send back to the browser as part of the server response an object
        // and use the json data transfer format and remember the object below will be
        // transformed into json automatically
        return new Response(

            JSON.stringify( { message : 'The email you entered is not valid. Please try again.' } ),
            { 
                status  : 400,
                headers : { 'Content-Type': 'application/json' }
            }

        );

    } // end of if

    // ==============================
    // email is ok - proceed forward
    // ==============================

    // ==============================
    // server side validation - #4
    // ==============================

    // ==============================
    // server side validation - validate the phone
    // ==============================

    // ==============================
    // phone validation function
    // ==============================

    // this came from
    // " https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript "
    // and was the second answer on the page
    function validatePhone( phone ) {

        // the regex
        const regex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

        // test the regex against the phone
        const isPhoneValid = regex.test( phone );

        // return the boolean isPhoneValid
        return isPhoneValid;

    } // end of validatePhone

    if ( !validatePhone( phone ) ) {

        // 400 represents a bad request or " indicates that the server cannot or will
        // not process the request due to something that is perceived to be a client error "

        // the astro / web standard way to send a response

        // and then send back to the browser as part of the server response an object
        // and use the json data transfer format and remember the object below will be
        // transformed into json automatically
        return new Response(

            JSON.stringify( { message : 'The phone number you entered is not valid. Please use the following format: 801-555-1212. Please try again.' } ),
            { 
                status  : 400,
                headers : { 'Content-Type': 'application/json' }
            }

        );

    } // end of if

    // ==============================
    // phone is ok - proceed forward
    // ==============================

    // ==============================
    // server side validation - #5
    // ==============================

    // ==============================
    // define variables
    // ==============================

    // remember, we have to define any variables that are included inside the try catch
    // block outside the try catch block so that we get the scoping right or so that
    // we have access to these variables later in the code when were outside the try
    // catch block

    // in this case, we don't need to define emalResponseFromPostmark since we don't
    // need access to it outside the try catch block
    // let emalResponseFromPostmark;

    // ==============================
    // try sending the email to Postmark
    // ==============================

    // I had to use a try catch block here instead of a if else statement since in the past
    // I haven't been able to catch all the errors with the if else statement
    try {

        // ==============================
        // send the email to Postmark
        // ==============================

        const emalResponseFromPostmark = await client.sendEmail(

            {
                "From"          : import.meta.env.POSTMARK_FROM_EMAIL,
                "To"            : import.meta.env.POSTMARK_TO_EMAIL,
                "Cc"            : import.meta.env.POSTMARK_TO_EMAIL,
                "Subject"       : "New Utah Decks contact form submission",
                "HtmlBody"      : `<p style="padding: 20px 0 0 0;">Name: <strong>${ first_name } ${ last_name }</strong></p>
                <p>Email address: <strong>${ email }</strong></p>
                <p>Phone number: <strong>${ phone }</strong></p>
                <p>Message: <strong>${ message }</strong></p>`,
                "MessageStream" : "outbound",
            }

        );

        // ==============================
        // email sent - proceed forward
        // ==============================

        // ==============================
        // send the following information back to the browser as part of the server response
        // ==============================
        
        // 201 " indicates that the request has succeeded and has led to the creation of a
        // resource "

        // the astro / web standard way to send a response

        // and then send back to the browser as part of the server response an object
        // and use the json data transfer format and remember the object below will be
        // transformed into json automatically
        return new Response(

            JSON.stringify( 
            { 
                message  : 'You have successfully submitted the contact form! Someone will call you shortly. Best regards, The Utah Decks Team',
                response : emalResponseFromPostmark
            } ),
            { 
                status  : 201,
                headers : { 'Content-Type': 'application/json' }
            }

        );

    } catch ( error ) { // if the email was not sent successfully to Postmark then do the following

        // ==============================
        // email not sent - proceed forward
        // ==============================

        // " The 500 ( internal server error ) status code indicates that the server encountered
        // an unexpected condition that prevented it from fulfilling the request. "

        // the astro / web standard way to send a response

        // and then send back to the browser as part of the server response an object
        // and use the json data transfer format and remember the object below will be
        // transformed into json automatically
        return new Response(

            JSON.stringify( { message : 'Something went wrong. Please try again.' } ),
            { 
                status  : 500,
                headers : { 'Content-Type': 'application/json' }
            }

        );

    } // end of try catch

} // end of handler


