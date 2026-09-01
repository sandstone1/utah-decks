

// import in the Confetti Movement Down component
import ConfettiMovementDown from '../button-animation/confetti-movement-down';
// import in our stylesheet
import styles from './contact-video.module.scss';


export default function ContactVideoComponent( ) {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed

    // remember we don't need to set component level state in order to see the data in the
    // page source; however, it makes sense to set component level state if we will use
    // client side data fetching to update the data as needed

    // ==============================
    // zustand state
    // ==============================

    // ==============================
    // destructure props
    // ==============================

    // ==============================
    // define variables
    // ==============================

    // ==============================
    // useRef();
    // ==============================

    // ==============================
    // useSession();
    // ==============================

    // ==============================
    // initialize the context
    // ==============================

    // ==============================
    // useEffect();
    // ==============================

    // ==============================
    // functions
    // ==============================

    // ==============================
    // function #1
    // ==============================

    // ==============================
    // handleButtonClick function
    // ==============================

    // ==============================
    // dataLayer push
    // ==============================

    // ==============================
    // purpose : to push information into the dataLayer method so that we can track
    // this click event in GTM and GA4
    // ==============================

    async function handleButtonClick( e ) {

        // push the following object into the dataLayer
        window.dataLayer.push(

            {

                'event'      : 'button_click',
                'button_id'  : 'Contact Us - Contact Video Component',
                'page_url'   : 'enchantingapps.com',
                'page_title' : 'Enchanting Apps | Contact Video Component | Contact Us | Button Click'

            }

        );

    } // end of handleButtonClick function


    return (

        // ==============================
        // container
        // ==============================

        <div className={ styles.contactVideoContainer }>

            {
                /*
                    // ==============================
                    // container > div 1
                    // ==============================
                */
            }
            <div className={ styles.contactVideoContainerDiv1 }>

                {
                    /*
                        // ==============================
                        // how does video affect page load times
                        // ==============================

                        // ==============================
                        // from stackoverflow : " The source src= will load asynchronously,
                        // so has no ( direct ) impact on the rest of your page loading time,
                        // so will have no effect if you load it later. "
                        // source : " https://stackoverflow.com/questions/72854630/load-video-url-after-page-loads-completely "
                        // ==============================
                    */
                }
                <video
                    // controls
                    autoPlay
                    muted
                    loop
                    playsInline // video will not work on the iPhone without this control
                    poster={ "/images/extrovert_event_1200.jpg" }
                >

                    <source 
                        src={ '/videos/connect-v3.mp4' }
                        type={ 'video/mp4' }
                        alt={ 'Connect with us' }
                    />

                    Sorry, your browser does not support embedded videos

                </video>

            </div>

            {
                /*
                    // ==============================
                    // container > div 2
                    // ==============================
                */
            }
            <div className={ styles.contactVideoContainerDiv2 }>

                <h2>Let&apos;s Get In Touch</h2>

                <p>Need help generating more sales or building an amazing website? Contact
                us and see how we can help!</p>

                <ConfettiMovementDown />

            </div>

        </div>

    );

} // end of ContactVideoComponent

