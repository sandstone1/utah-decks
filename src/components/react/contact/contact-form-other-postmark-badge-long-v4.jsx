

// ==============================
// conclusion on Postmark : I really liked Postmark
// 1 - I liked the fact that I could create an API route like I usually do and control
// the error and success messages and I liked the fact that I see the response output from
// Postmark
// 2 - I liked the fact that I could use the fetch API request like I usually do; in other
// words Postmark fit in well with my current workflow
// 3 - I like the fact that I could go into my Postmark account and see the emails that
// I sent and see statistics on the emails, for example, how many " processed ", how
// many were classified as " spam " and how many " bounced "
// 4 - I liked that I could pull up individual emails and see that they were processed and
// delivered and I could see useful details on each email  
// ==============================

// ==============================
// conclusion on EmailJS : I did not really like EmailJS
// 1 - I did not like the lack of control over the EmailJS api request and response
// 2 - I did not like the fact that it was very difficult to test and / or get error messages
// ==============================





// ==============================
// ==============================
// ==============================





// ==============================
// remember, I compared 4 transitional email api providers : Postmark, Sendinblue,
// SendGrid and Mailgun and one client side only email api provider : EmailJS
//
// my decision came down to 3 email api providers : Postmark, Sendgrid and Sendinblue
// and I choose Postmark since it had a good reviews, I liked their website and was
// recommended by Vercel
// ( see : " https://vercel.com/guides/sending-emails-from-an-application-on-vercel " )
// and I liked the reviews on good customer support
// ==============================

// ==============================
// Files for the email.js api are :
// 1 - pages/contact.js
// 2 - pages/contact.module.scss
// 3 - components/contact/contact-form-postmark.js
// 4 - components/contact/contact-form-postmark.module.scss
// ==============================

// ==============================
// remember, the following videos and web pages were helpful in building the contact
// form email api :
// " https://www.youtube.com/watch?v=QrVYLLpoyMw&t=100s " ( even though this video is on how
// to set up the email api with Sendgrid, I found that the Sendgrid API and the Postmark API
// are pretty similar when it comes to receiving emails from a contact form )
// " https://www.youtube.com/watch?v=yPecojA8mGQ " ( ditto from above )
// " https://react.email/docs/integrations/postmark "
// " https://www.tarascodes.com/create-contact-page-nextjs "
// " https://postmarkapp.com/send-email/node "
// " https://postmarkapp.com/developer/integration/official-libraries#node-js "
// " https://postmarkapp.com/support/article/1002-getting-started-with-postmark#add "
// " https://postmarkapp.com/support/article/1046-how-do-i-verify-a-domain "
// ==============================





// ==============================
// ==============================
// ==============================





// ==============================
// step 1
// ==============================

// ==============================
// create and set up our Postmark account
// ==============================

// ==============================
// 1 - create an account with Postmark and to do that I had to (1) add a work email address
// or my silverado account ( remember, Postmark would not accept a
// " public domain " email address like gmail and therefore I had to use my silverado account ),
// (2) add a username and (3) add a password ( I will leave them blank for this file for security
// purposes ) and then
// 2 - Postmark sent me a confirmation email and the email said :
/* 
    " Welcome to Postmark, new friend! Your username to log in is xxxxxx. To get your account
    ready for sending, we’ve created a Sender Signature for xxxxxx. We’ll use that email
    address as the “From” address on the emails you send. But before we can do that, we need
    you to confirm that this email belongs to you: "

    " Confirm Sender Signature " => button

    " Want to use another “From” name and address to send emails? No problem! Add and verify
    other Sender Signatures (or remove ones you no longer need) at any time in the app. "

    " Other things to know " => title
    
    " Test mode and requesting account approval " => title
    
    " Your account is currently in test mode. That allows you to get familiar with Postmark,
    and send up to 100 emails to domains that you’ve verified. Once you’re ready to send
    emails to others, we’ll need to approve your account. Why? Reviewing each account helps
    us tell the responsible senders (that’s you!) apart from the spammers (boo!), so we
    can maintain our stellar deliverability rates for all customers. So whenever you’re
    ready, submit an approval request. "
 
    " Handy resources to help you get started " => title

    " Check out our easy-to-follow getting started guides and detailed developer docs to
    get set up in Postmark. Still need help? Our Customer Success team is pretty darn
    great, so just reply to this message if you have any questions. "
*/
// and then I clicked on the " Confirm Sender Signature " button and then
// 3 - I was taken to a new webpage that said :
/*
    " Congratulations, your Sender Signature has been activated! You’re now all set to
    start sending emails with Postmark! Let’s get you back to the app so you can continue
    with the setup. Choose a Message Stream in one of your servers to view its Setup
    Instructions. "
*/
// and then ( on this same page ) I pressed the " Back to Postmark " button and then
// 4 - I was taken to a new webpage where I had to log into my account and then
// 5 - I was taken to new web page with 4 categories at the top left of the screen :
// " Servers ", " Sender Signatures ", " Users ", " Account " and I was in the " Servers "
// category by default and below the 4 categories I see a box and inside the box I see
// the text " My First Server " and the text is higlighted in blue and I then clicked on
// the " My First Server " text and then
// 7 - I was taken to a new webpage and the breadcrumb on this page was " Servers /
// My First Server " and underneth the breadcrumb was a list of 3 message streams : " Default
// Broadcast Stream ", " Default Inbound Stream " and " Default Transactional Stream " and
// below these message stream categories was some useful information :
/*
    " What are Message Streams? " => title

    " Message Streams is how we separate different types of mail to ensure the highest
    deliverability for each. Pick the one that’s right for your email: "

    " Transactional streams are for sending time-sensitive messages triggered for one
    recipient at a time. "

    " Broadcasts are for messages sent to many recipients at once, like marketing
    campaigns or newsletters. "

    " Inbound stream is a way for your application to receive email. "
*/
// and then I chose the " Default Inbound Stream " category and I was then
// 8 - taken to a new webpage ( the breadcrumb at this point was " Servers / My First Server /
// Default Inbound Stream ") and then below this breadcrumb were 4 categories :
// " Statistics ", " Activity ", " Setup Instructions " and " Settings " and by default I
// was in the " Setup Instructions " category and below these 4 categories was a bunch of data;
// however, after reviewing the webpage I don't think this really applied to my needs so I
// clicked around on the site until I came to the following webpage :
// 9 - " https://postmarkapp.com/developer/integration/official-libraries " and I scrolled
// down until I got to the " Postmark Node.js " section and this section contained the
// following information :
/*
    On the left side of the page :

    " Installation " => title

    " The Postmark Node.js library is available as an npm package. "

    " Send an email " => title

    " Here’s a simple example of how to send a single email. Take a look at the documentation
    for more examples. "

    " Nodemailer " => title

    " You can optionally use nodemailer to send transactional emails through Postmark. "

    On the right side of the page :

    " Install with npm " => title

    " npm install postmark --save "

    " Require " => title

    " var postmark = require("postmark"); "

    " Example request " => title

    " var serverToken = "xxxx-xxxxx-xxxx-xxxxx-xxxxxx"; "
    " var client = new postmark.ServerClient(serverToken); "

    " client.sendEmail({
        "From": "sender@example.com",
        "To": "receiver@example.com",
        "Subject": "Test",
        "TextBody": "Hello from Postmark!"
    }); "
*/
// and I will use this information along with the videos and website information
// mentioned above to make a contact form email api request to Postmark and then
// I continued to clicked around on the site and I then
// 10 - clicked back to the " My First Server " section and remember the breadcrumb here
// is " Servers / My First Server " and below this breadcrumb were 3 message stream options
// " Default Broadcast Stream ", " Default Inbound Stream " and " Default Transaction
// Stream " ( remember I pressed on the " Default Inbound Stream " in step 8 above ) but
// this time I pressed on the " Default Transaction Stream " option and from here
// 11 - I was taken to a new webpage with a breadcrumb of " Servers / My First Server /
// Default Transaction Stream " and under the breadcrumb were a number of categories :
// " Statistics ", " Activity ", " Suppressions ", " Webhooks ", " Setup Instructions " and
// " Setting " and by default I was in the " Setup Instructions " category and
// underneth the categories was a title of " Pick the library or integration: " and
// I choose the " node " option and then I saw the following documentation :
/*
    1   " Install the Postmark.js library using npm " => title

        " npm install postmark --save "

    2   " Create an instance of the Postmark client and send your first email. " => title

        " // Require: "
        " var postmark = require("postmark"); "

        " // Send an email: "
        " var client = new postmark.ServerClient("xxxxxx"); ( remember, I can find
        this Server API token by going to the following breadcrumb " Servers / My First
        Server / Default Transaction Stream / Settings " ) "

        " client.sendEmail({
            "From": "silverado email address",
            "To": "silverado email address",
            "Subject": "Hello from Postmark",
            "HtmlBody": "<strong>Hello</strong> dear Postmark user.",
            "TextBody": "Hello from Postmark!",
            "MessageStream": "outbound"
        }); "

        " Want to test our APIs and activity logging? Send emails to
        test@blackhole.postmarkapp.com "

    3   " Once you’ve sent your first email, check out the Postmark.js docs → " => title
*/
// so this was pretty close to step 9 above and then below these node instructions was the
// following useful text :
/*
    " Explore more Postmark features " => title

    " Set up webhooks " => title
    " Notify your application when a message is delivered, opened or bounces. Enable
    link tracking and we’ll notify you of clicked links too! "
    " How to use webhooks → "

    " Send with a Template " => title
    " Use one of our pre-built email templates or code one of your own. Simplify your
    development workflow by managing email templates through Postmark. "
    " Set up a template → "

    " Enable Tracking " => title
    " Turn on open and link tracking to measure how users engage with your emails. "
    " Enable tracking → "
*/
// and then I continued to clicked around on the site and I then
// 12 - I came to another webpage that had the following information :
/*
    " Send emails with Node.js " => title

    " Send lightning-fast transactional emails through Postmark API with Node.js " => title

    " 5 Minute Set Up " => title

    1   " Install the Postmark.js library using npm " => title

        " npm install postmark --save "

    2   " Create an instance of the Postmark server client and send your first email. " => title

        " // Require: "
        " var postmark = require("postmark"); "

        " // Send an email: "
        " var client = new postmark.ServerClient("POSTMARK-SERVER-API-TOKEN-HERE"); "

        " client.sendEmail({
            "From": "sender@example.com",
            "To": "recipient@example.com",
            "Subject": "Test",
            "TextBody": "Hello from Postmark!"
        }); "

        " Want to test our APIs and activity logging? Send emails to
        test@blackhole.postmarkapp.com "
    
    3   " Once you’ve sent your first email, check out the Postmark.js docs → " => title
*/
// and then I continued to clicked around on the site and I then
// 13 - I pressed on the " test mode " tab at the top of the page and then
// 14 - I was taken to a new web page that said :
/*
    " Your account is in test mode " => title
    
    " While your account is in test mode, you can only send and process 100 emails. In the
    meantime, you can send emails to xxxxxx and other domains that you have verified. Inbound
    processing doesn’t have any domain restrictions. To get out of test mode, you’ll need
    to submit an account approval request. "
    
    " Request approval " => button
*/
// however, for right now I think I'm Ok being in test mode and then
// 15 - the next step would be to verify my domain and I can do that by clicking
// on the " Seller Signature " category at the top left of the screen ( remember
// the 4 categories at the top left of the screen are : " Servers ", " Sender Signatures ",
// " Users " and " Account " and I'm in the " Servers " category by default ) and
// once I click on the " Seller Signature " category I'm then taken to a new webpage
// where I can add my domain, which would mean I need to " Head over to your DNS provider
// and add DKIM and Return-Path DNS records to verify your domain and ensure effective
// delivery. " and verifying my domain would allow me to (1) send from any address on
// that domain (2) ensure effective delivery and (3) monitor email authentication and
// then
// 16 - another next step would be to request approval to get out of test mode
// ==============================

// ==============================
// files for step 1
// ==============================

// ==============================
// 1 - components/contact/contact-form-email-js.js
// 2 - components/contact/contact-form-email-js.module.scss
// ==============================





// ==============================
// step 2
// ==============================

// ==============================
// install the Postmark npm package
// ==============================

// ==============================
// 1 - from the Postmark site : " Install the Postmark.js library using npm /
// npm install postmark --save "
// 2 - so I did " Home@Mac-Studio sb_site % npm i postmark " and then I checked
// package.json and I see " "postmark": "^3.0.15", " so everything is working
// as expected
// ==============================

// ==============================
// files for step 2
// ==============================

// ==============================
// 1 - components/contact/contact-form-email-js.js
// 2 - components/contact/contact-form-email-js.module.scss
// ==============================





// ==============================
// step 3
// ==============================

// ==============================
// add the code for Postmark email api
// ==============================

// ==============================
// 1 - create the fetch request inside the handleSubmit function, including how
// to handle response errors and response success and then
// 2 - create the api route or /api/email/contact-form/post/postmark-email
// 3 - create 3 environment variables to use in the postmark-email.js api route
// ==============================

// ==============================
// files for step 3
// ==============================

// ==============================
// 1 - components/contact/contact-form-email-js.js
// 2 - components/contact/contact-form-email-js.module.scss
// ==============================





// ==============================
// ==============================
// ==============================





// ==============================
// remember, there are 2 versions of the contact form
// ==============================

// ==============================
// version 1
// ==============================

// ==============================
// version 1 is a stand alone contact form that only spans part of the
// page, if needed, and the form blends in with the parent container
// background so this version does not contain a blue border when hovering
// the contact form container or a white contact form container background
// ==============================

// ==============================
// Files for the version 1 :
// 1 - pages/contact.js
// 2 - pages/contact.module.scss
// 3 - components/contact/contact-form-postmark.js
// 4 - components/contact/contact-form-postmark.module.scss
// ==============================

// ==============================
// version 2
// ==============================

// ==============================
// version 2 is a stand alone contact form that spans the entire parent
// container and has a blue background when you hover over the contact form
// container
// ==============================

// ==============================
// Files for the version 2 :
// 1 - pages/contact.js
// 2 - pages/contact.module.scss
// 3 - components/contact/contact-form-postmark-blue-border.js
// 4 - components/contact/contact-form-postmark-blue-border.module.scss
// 5 - components/contact/contact-form-email-js-blue-border.js
// 6 - components/contact/contact-form-email-js-blue-border.module.scss
// ==============================

// ==============================
// for this project, we will use version 2 : 3 & 4
// ==============================





// import in Fragment and the useEffect, useRef and useState hooks
import { Fragment, useEffect, useRef, useState } from 'react';
// import in the ReCAPTCHA component
import ReCAPTCHA from "react-google-recaptcha";
// import in the ErrorMessage component
import ErrorMessageComponent from '../error-message/em-general';
// import in the SuccessMessage component
import SuccessMessageComponent from '../success-message/sm-general';
// import in the Spinner component
import Spinner from '../spinner/spinner-bounce-light';
// import in our stylesheet
import styles from './contact-form-other-postmark-badge-long-v4.module.scss';



export default function ContactFormComponent() {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed

    // remember we don't need to set component level state in order to see the data in the
    // page source; however, it makes sense to set component level state if we will use
    // client side data fetching to update the data as needed

    // set component level state
    const [ firstName, setFirstName ]                           = useState( '' );
    const [ lastName, setLastName ]                             = useState( '' );
    const [ email, setEmail ]                                   = useState( '' );
    const [ phone, setPhone ]                                   = useState( '' );
    const [ message, setMessage ]                               = useState( '' );
    const [ showRecaptcha, setShowRecaptcha ]                   = useState( false );
    const [ isLoading, setIsLoading ]                           = useState( false );
    const [ frontendErrorMessage, setFrontendErrorMessage ]     = useState( '' );
    const [ frontendSuccessMessage, setFrontendSuccessMessage ] = useState( '' );

    // ==============================
    // zustand state
    // ==============================

    // ==============================
    // destructure props
    // ==============================

    // ==============================
    // define variables
    // ==============================

    let browserWidth;

    // ==============================
    // useRef();
    // ==============================

    // remember, after each verification, we need to reset the reCAPTCHA for
    // subsequent checks and to do that we need to add a ref prop to the
    // reCAPTCHA component
    const reCAPTCHABadgeRef  = useRef( null );
    const phoneInputFieldRef = useRef();
    const contactFormRef     = useRef();

    // ==============================
    // create DOM reference
    // ==============================

    // ==============================
    // useSession();
    // ==============================

    // ==============================
    // initialize the context
    // ==============================

    // ==============================
    // functions
    // ==============================

    // ==============================
    // function 1
    // ==============================

    // ==============================
    // handleBlur function
    // ==============================

    // ==============================
    // purpose - add dashes and take out any non digit characters to the phone number
    // input field 
    // ==============================

    async function handleBlur() {

        if ( phoneInputFieldRef.current != '' ) {

            if ( phoneInputFieldRef.current.value.replace( /[\D]+/g, '').length <= 3 ) {

                var dashes = phoneInputFieldRef.current.value.replace( /[\D]+/g, '').slice( 0, 3 );

                setPhone( dashes );

            } // end of if

            else if ( phoneInputFieldRef.current.value.replace( /[\D]+/g, '').length <= 6 ) {
    
                var dashes = phoneInputFieldRef.current.value.replace( /[\D]+/g, '').slice( 0, 3 ) + '-' + phoneInputFieldRef.current.value.replace( /[\D]+/g, '').slice( 3, 6 );

                setPhone( dashes );
    
            } // end of else if

            else if ( phoneInputFieldRef.current.value.replace( /[\D]+/g, '').length > 6 ) {

                var dashes = phoneInputFieldRef.current.value.replace( /[\D]+/g, '').slice( 0, 3 ) + '-' + phoneInputFieldRef.current.value.replace( /[\D]+/g, '').slice( 3, 6 ) + '-' + phoneInputFieldRef.current.value.replace( /[\D]+/g, '').slice( 6, 10 );

                setPhone( dashes );

            } // end of else if

        } // end of if

    } // end of handleBlur

    // ==============================
    // useEffect();
    // ==============================

    // ==============================
    // useEffect 1
    // ==============================

    useEffect( () => {

        if ( phoneInputFieldRef.current ) {

            phoneInputFieldRef.current.addEventListener( 'blur', handleBlur, false );

        } // end of if

        // make sure we remove the event listener after we call the handleBlur
        // function
        return () => {

            window.removeEventListener( 'blur', handleBlur, false );

        };

    }, [ phone ] ); // end of useEffect 1

    // ==============================
    // useEffect 2
    // ==============================

    // ==============================
    // purpose - delay loading the reCAPTCHA code
    // ==============================

    useEffect( () => {

        // ==============================
        // code block 1
        // ==============================

        // ==============================
        // get browser width
        // ==============================

        browserWidth = window.innerWidth;

        // ==============================
        // code block 2
        // ==============================

        // ==============================
        // remember, reCAPCHTA was causing the page transition to be janky so we decided to not
        // show the reCAPTCHA part of the code until the intersection observer is true
        // ==============================

        // ==============================
        // code block 3
        // ==============================

        // ==============================
        // intersection observer
        // ==============================

        // ==============================
        // use the web animations api for the animation
        // ==============================

        // options object
        const sectionOptions = {

            root : null, // this is the default and this means our viewport is the canvas
            // we are working with here
            threshold : 0.0, // this value can be between 0 and 1 and 0 is the default and
            // 0 means that as soon as any little piece enters the defined viewport the
            // intersection observer will fire
            rootMargin : '0px 0px -50px 0px' // this works like margin in css and this
            // can help us control when the intersection observer fires

            // remember, it's the bottom rootMargin that controls when the element
            // isIntersecting

            // from one of the anwsers in stackoverflow : " I think you may be confusing
            // the rootMargin properties. From you question, it sounds like you want the
            // observed element to trigger 50px before it comes into view. If that is the
            // case, then you want to increase the root bottom margin: 0px 0px 50px 0px
            // if you want to trigger the element only when it reaches 50px inside the
            // root, then use: 0px 0px -50px 0px. "

            // remember, a positive 400px bottom root margin means that isIntersecting
            // will be true once the user gets to a point in the code that is 400px
            // above the ref; in other words, a positive root margin is great for pre
            // loading images

            // remember, a negative 50px bottom root margin means that isIntersecting
            // will be true once the user gets to a point in the code that is 50px
            // below the ref; in other words, a negative root margin is great if want
            // to fade in text or slide up some elements

        } // end of options object

        // create the intersection observer and save the result to the const
        // sectionObserver
        const sectionObserver = new IntersectionObserver( 

            // we pass in 2 arguments to the IntersectionObserver : a function and an
            // options object

            // the first argument ( i.e. the function )
            function( entries, sectionObserver ) { 

                entries.forEach( ( entry ) => {

                    // if our element is in the viewport then do something
                    if ( entry.isIntersecting ) {

                        // test
                        // ==============================
                        // important comment
                        // ==============================
                        // log the entry to console so that we can see the 
                        // IntersectionObserverEntry object and what we are concerned
                        // with is the isIntersecting value
                        // console.log( entry );

                        // set the showRecaptcha state to true
                        setShowRecaptcha( true );

                        // once the observation happens then we want to unobserve the DOM
                        // element
                        sectionObserver.unobserve( contactFormRef.current );

                    } // end of if

                } ) // end of entries.forEach()

            }, // end of function( entries, sectionObserver )

            sectionOptions // the second argument

        ); // end of new IntersectionObserver()

        // let's have the observer observe our selected DOM element and then do something
        // once the DOM element enters the viewport and remember the criteria for when a
        // DOM element enters the viewport or triggers entry.isIntersecting is determined
        // by the options object above
        sectionObserver.observe( contactFormRef.current );

        // ==============================
        // end of intersection observer
        // ==============================

    }, [] ); // end of useEffect 2

    // ==============================
    // functions
    // ==============================

    // ==============================
    // function 2
    // ==============================

    // ==============================
    // handleSubmit function
    // ==============================

    async function handleSubmit( e ) {

        // prevent the default browser behavior
        e.preventDefault();

        // ==============================
        // frontend validation
        // ==============================

        // front end validation
        if ( firstName === '' || lastName === '' || email === '' || phone === '' || message === '' ) {

            // if the user did not enter the required information in the name, email or message
            // field then set a new error message
            setFrontendErrorMessage( 'The first name, last name, email, phone, and message fields have to be filled out in order to send the contact form. Please try again.' );

            // exit the funtion at this point in the code
            return;
    
        } // end of if

        // STEP 1
        // ==============================
        // reCAPTCHA
        // ==============================

        // ==============================
        // Purpose : prevent spam form submissions by bots and use Google reCAPTCHA to do so
        // ==============================

        // now that we have a working reCAPTCHA widget or ( please see below ) :

        /*
            <ReCAPTCHA
                sitekey={ import.meta.env.google_recaptcha_badge_site_key }
                ref={ reCAPTCHABadgeRef }
                size="invisible"
            />
        */

        // we need to complete the following three steps in order to get the reCAPTCHA
        // functioning :
        
        // 1 - get the response token from the reCAPTCHA component
        // 2 - reset the reCAPTCHA component for subsequent checks
        // 3 - verify the response token in the backend

        // step 2(a)
        // now we need to get the response token
        // and remember, from the react-google-recaptcha website it says :
        // " executeAsync() programmatically invoke the challenge and return
        // a promise that resolves to the token or errors ( if encountered ). "

        // and the reason we need to programmatically invoke the challenge is because the
        // badge works in the background and there is no checkbox to start the reCAPTCHA
        // process; therefore, we need to " programmatically invoke the challenge "
        const token = await reCAPTCHABadgeRef.current.executeAsync();

        // step 2(b)
        // then we need to reset the reCAPTCHA each time the form is submitted
        reCAPTCHABadgeRef.current.reset();

        // test
        // console.log( token );

        // remember, we need to pass the token to the backend or the api endpoint
        // ( see below )

        // ==============================
        // end of reCAPTCHA
        // ==============================

        // ==============================
        // fetch API
        // ==============================

        // next we need to send the first name, last name, email, phone and message key value
        // pairs to the contact-form-other-postmark-badge-long-v3 api route and this will allow
        // us to connect to the Postmark api and thereby have a working contact form that users
        // can use to send the Company a secure message

        // we want to send an http request when the form is submitted

        // STEP 2
        // initially, isLoading is set to true

        // remember we use the isLoading state primarily when we are communicating with the
        // database from the frontend since there may be a short delay between the time from
        // when the request is made to the time from when the server response is returned
        setIsLoading( true );

        // STEP 3
        // create our endpoint
        const endpoint = `/api/email/post/transactional/postmark/recaptcha-badge/contact-form-other-postmark-badge-long-v3/general-contact-form-v2`;

        // create our data object

        // create our config object

        // STEP 4
        // make the fetch request and save the result to the const called res
        const res = await fetch(
            endpoint,
            // include the config object
            {
                method : 'POST',
                body   : JSON.stringify(
                    {
                        first_name : firstName,
                        last_name  : lastName,
                        email      : email,
                        phone      : phone,
                        message    : message,
                        token      : token
                    }
                ),
                headers : {
                    'Content-Type' : 'application/json'
                }
            }
        );

        // STEP 5(a)
        // first, check to see if there is a request error
        if ( !res.ok ) {

            // STEP 5(b)
            // the fetch request above returns a response object and then we can apply the
            // json(); method to the reponse object and this will convert the response
            // object into a JavaScript object that we can use and we will call this JavaScript
            // object " data " and the data object in this case is the response we get back from
            // the api route
            const data = await res.json();

            // STEP 5(c)
            // once we get the data, set isLoading to false
            setIsLoading( false );

            // STEP 5(d)
            // console.log data for the moment
            console.log( data );

            // STEP 5(e)
            // set the error message
            setFrontendErrorMessage( data.message );

            // STEP 5(f)
            // reset the component state
            setFirstName( '' );
            setLastName( '' );
            setEmail( '' );
            setPhone( '' );
            setMessage( '' );

        } else {

            // STEP 6(a)
            // the fetch request above returns a response object and then we can apply the
            // json(); method to the reponse object and this will convert the response
            // object into a JavaScript object that we can use and we will call this JavaScript
            // object " data " and the data object in this case is the response we get back from
            // the api route
            const data = await res.json();

            // STEP 6(b)
            // once we get the data, set isLoading to false
            setIsLoading( false );

            // STEP 6(c)
            // console.log data for the moment
            console.log( data );

            // STEP 6(d)
            // set the success message
            setFrontendSuccessMessage( data.message );

            // STEP 6(e)
            // reset the component state
            setFirstName( '' );
            setLastName( '' );
            setEmail( '' );
            setPhone( '' );
            setMessage( '' );

            // STEP 6(f)

            // ==============================
            // dataLayer push
            // ==============================

            // ==============================
            // purpose : to push information into the dataLayer method so that we can track
            // this click event in GTM and GA4
            // ==============================

            // push the following object into the dataLayer
            window.dataLayer.push(

                {

                    'event'      : 'form_submission_success',
                    'form_id'    : 'Submit - Contact Page',
                    'page_url'   : 'enchantingapps.com/contact',
                    'page_title' : 'Enchanting Apps | Contact | Submit | Form Submission Success'

                }

            );

        }

        // ==============================
        // end of fetch API
        // ==============================

    } // end of handleSubmit


    return (

        <Fragment>

            {

                isLoading ? (

                    <div className={ styles.spinnerContainer }>

                        <Spinner />

                    </div>

                ) : frontendErrorMessage ? (

                    <div className={ styles.errorMessageContainer }>

                            <ErrorMessageComponent                    
                                resetFrontendErrorMessage={ () => setFrontendErrorMessage( '' ) }
                            >
                                { frontendErrorMessage }
                            </ErrorMessageComponent>

                    </div>

                ) : frontendSuccessMessage ? (

                    <div className={ styles.successMessageContainer }>

                        <SuccessMessageComponent                    
                            resetFrontendSuccessMessage={ () => setFrontendSuccessMessage( '' ) }
                        >
                            { frontendSuccessMessage }
                        </SuccessMessageComponent>

                    </div>

                ) : (

                    /*
                        // ==============================
                        // container ( wrapper div )
                        // ==============================
                    */
                    <div 
                        className={ styles.contactFormContainer }
                        ref={ contactFormRef }
                    >

                        {
                            /*
                                // ==============================
                                // container > h2
                                // ==============================
                            */
                        }
                        <h2 className={ styles.contactFormContainerH2 }>Contact Us</h2>

                        {
                            /*
                                // ==============================
                                // container - form
                                // ==============================
                            */
                        }
                        <form className={ styles.contactFormContainerForm } noValidate="novalidate" onSubmit={ handleSubmit } >

                            {
                                /*
                                    // ==============================
                                    // container > form > div1
                                    // ==============================

                                    // ==============================
                                    // input field - first name
                                    // ==============================
                                */
                            }
                            <div>
                                <input
                                    name="firstName"
                                    type="text"
                                    id="firstName"
                                    required
                                    autoComplete='first-name' // this helps password managers suggest the right input
                                    value={ firstName }
                                    onChange={ ( e ) => setFirstName( e.target.value ) }
                                />           
                                <label
                                    htmlFor="firstName" // htmlFor equals the id value
                                    className={

                                        firstName === '' ? 
                                        styles.serviceRecoveryContactFormContainerFormDiv1Label :
                                        styles.serviceRecoveryContactFormContainerFormDiv1LabelShrink
                                    }
                                >
                                    First name
                                </label>
                            </div>

                            {
                                /*
                                    // ==============================
                                    // container > form > div2
                                    // ==============================

                                    // ==============================
                                    // input field - last name
                                    // ==============================
                                */
                            }
                            <div>
                                <input
                                    name="lastName"
                                    type="text"
                                    id="lastName"
                                    required
                                    autoComplete='last-name'
                                    value={ lastName }
                                    onChange={ ( e ) => setLastName( e.target.value ) }
                                />           
                                <label
                                    htmlFor="lastName" // htmlFor equals the id value
                                    className={

                                        lastName === '' ? 
                                        styles.serviceRecoveryContactFormContainerFormDiv2Label :
                                        styles.serviceRecoveryContactFormContainerFormDiv2LabelShrink
                                    }
                                >
                                    Last name
                                </label>
                            </div>

                            {
                                /*
                                    // ==============================
                                    // container > form > div3
                                    // ==============================

                                    // ==============================
                                    // input field - email
                                    // ==============================
                                */
                            }
                            <div className={ styles.contactFormContainerFormEmailInputContainer }>
                                <input
                                    name="email"
                                    type="email"
                                    id="email"
                                    required
                                    autoComplete='email'
                                    value={ email }
                                    onChange={ (e) => setEmail( e.target.value ) }
                                />                        
                                <label
                                    htmlFor="email" // htmlFor equals the id value
                                    className={

                                        email === '' ? 
                                        styles.contactFormContainerFormEmailInputContainerLabel :
                                        styles.contactFormContainerFormEmailInputContainerLabelShrink
                                    }
                                >
                                    Email address
                                </label>
                            </div>

                            {
                                /*
                                    // ==============================
                                    // container > form > div4
                                    // ==============================

                                    // ==============================
                                    // input field - phone
                                    // ==============================
                                */
                            }
                            <div className={ styles.contactFormContainerFormPhoneInputContainer }>
                                <input
                                    name="phone"
                                    type="tel"
                                    id="phone"
                                    required
                                    autoComplete='phone'
                                    ref={ phoneInputFieldRef }
                                    value={ phone }
                                    onChange={ (e) => setPhone( e.target.value ) }
                                />                        
                                <label
                                    htmlFor="phone" // htmlFor equals the id value
                                    className={

                                        phone === '' ? 
                                        styles.contactFormContainerFormPhoneInputContainerLabel :
                                        styles.contactFormContainerFormPhoneInputContainerLabelShrink
                                    }
                                >
                                    Phone ( format: 801-555-1212 )
                                </label>
                            </div>

                            {
                                /*
                                    // ==============================
                                    // container > form > div5
                                    // ==============================

                                    // ==============================
                                    // text area field - message
                                    // ==============================
                                */
                            }
                            <div className={ styles.contactFormContainerFormTextAreaContainer }>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="15"
                                    value={ message }
                                    autoComplete='message'
                                    onChange={ (e) => setMessage( e.target.value ) }
                                />
                                <label
                                    htmlFor="message" // htmlFor equals the id value
                                    className={

                                        message === '' ? 
                                        styles.contactFormContainerFormTextAreaContainerLabel :
                                        styles.contactFormContainerFormTextAreaContainerLabelShrink

                                    }
                                >
                                    Please include your message here
                                </label>
                            </div>

                            {
                                /*
                                    // ==============================
                                    // container > form > div6
                                    // ==============================

                                    // ==============================
                                    // ReCAPTCHA component
                                    // ==============================

                                    // ==============================
                                    // remember, reCAPCHTA was causing the page transition to be janky so we decided to not
                                    // show the reCAPTCHA part of the code until the intersection observer is true
                                    // ==============================
                                */
                            }

                            {

                                showRecaptcha ? (

                                    <ReCAPTCHA
                                        sitekey={ import.meta.env.PUBLIC_GOOGLE_RECAPTCHA_BADGE_SITE_KEY }
                                        ref={ reCAPTCHABadgeRef }
                                        size="invisible" // needed in order to tell Google that we want
                                        // to use the invisible reCAPTCHA badge
                                        style={ { margin : '4.0rem 0 0 0', visibility : 'hidden' } }
                                        // remember, we can hide the ReCAPTCHA component or badge but we
                                        // have to show the Google recommended text ( see below )
        
                                        // remember, we have to do " visibility : hidden " and not
                                        // " display : none " because if we use " display : none " then
                                        // Google reCAPTCHA will not work
                                    />

                                ) : (

                                    null

                                )

                            }

                            {
                                /*
                                    // ==============================
                                    // container > form > div7
                                    // ==============================

                                    // ==============================
                                    // Google reCAPTCHA language that is needed if we hide the
                                    // reCAPTCHA badge
                                    // ==============================
                                */
                            }
                            <div className={ styles.contactFormContainerFormGoogleReCAPTCHAText }>

                                <p>
                                    This site is protected by reCAPTCHA and the Google&nbsp;
                                    <a href="https://policies.google.com/privacy">Privacy Policy</a> and&nbsp;
                                    <a href="https://policies.google.com/terms">Terms of Service</a> apply.
                                </p>
                    
                            </div>

                            {
                                /*
                                    // ==============================
                                    // container > form > div8
                                    // ==============================

                                    // ==============================
                                    // submit button
                                    // ==============================
                                */
                            }
                            <div className={ styles.contactFormContainerFormButtonContainer }>

                                <button
                                    type="submit"
                                    className={ styles.contactFormContainerFormButtonContainerButton }
                                >
                                    Submit
                                </button>
                    
                            </div>

                        </form>

                    </div> // end of contactFormContainer

                )

            }
                
        </Fragment>

    );

} // end of ContactFormComponent


