




// ==============================
// notes
// ==============================

// ==============================
// 1 - remember, to make this button particle animation work we need to 4
// things :
/*
    1 - the html code below
    2 - the css code in scss file
    3 - the handleParticleClick function below and
    4 - the handleUseRouter function below
*/
// ==============================




// ==============================
// notes
// ==============================

// ==============================
// 1 - remember, we need to change the data layer push infommation for each button
// 2 - we need to change the href for each button
// 3 - we need to change the button text for each button
// ==============================








// import in the useRef hook
import { useRef } from 'react';
// import in the navigate component
import { navigate } from 'astro:transitions/client';
// import in our stylesheet
import styles from './confetti-movement-down.module.scss';



export default function ConfettiMovementDownComponent() {

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

    // use the useRef(); hook to create a reference to a DOM element and let's start by
    // initializing the following useRef variable(s)
    const particleDivRef = useRef();

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
    // useLoader();
    // ==============================

    // ==============================
    // useFrame();
    // ==============================

    // ==============================
    // functions
    // ==============================

    // ==============================
    // function 1
    // ==============================

    // ==============================
    // handleButtonClickContactUs function
    // ==============================

    // ==============================
    // dataLayer push
    // ==============================

    // ==============================
    // purpose : to push information into the dataLayer method so that we can track this click
    // event in GTM and GA4
    // ==============================

    async function handleButtonClickContactUs( e ) {

        // test
        console.log( '-------------------' );
        console.log( 'In handleButtonClickContactUs()' );

        // push the following object into the dataLayer
        window.dataLayer.push(

            {

                'event'      : 'button_click',
                'button_id'  : 'Contact Us - Contact Video Component',
                'page_url'   : 'enchantingapps.com',
                'page_title' : 'Enchanting Apps | Contact Video Component | Contact Us | Button Click'

            }

        );

    } // end of handleButtonClickContactUs function

    // ==============================
    // function 2
    // ==============================

    // ==============================
    // handleParticleClick function
    // ==============================

    // ==============================
    // purpose : create a nice button click animation
    // ==============================

    // ==============================
    // please see the following article that I used as inspiration although I had to revise
    // the code quite a bit to make it work and I think that was due to my layout :
    // " https://css-tricks.com/playing-with-particles-using-the-web-animations-api/ "
    // ==============================

    // update handleParticleClick to collect and await the promises instead of just
    // firing them off
    async function handleParticleClick( e ) {

        // collect all the particle promises and store them in this array and then
        // use this array inside Promise.all()
        const particlePromises = [];

        // generate 50 particles
        for ( let i = 0; i < 50; i++ ) {
            
            // pass in the mouse coordinates to the createParticle() function
            // and then call the createParticle() function
            particlePromises.push( createParticleConfetti( e.clientX, e.clientY ) );

            // test
            console.log( e.clientX, e.clientY );

        } // end of for

        await Promise.all( particlePromises ); // waits here until every particle finishes

    } // end of handleParticleClick function

    // ==============================
    // function 3
    // ==============================

    // ==============================
    // button particle animation - confetti
    // ==============================

    async function createParticleConfetti( x, y ) {

        // create a custom particle element
        const particle = document.createElement( 'particle' );

        // append the element to the body
        // document.body.appendChild( particle );

        // ==============================
        // IMPORTANT!
        //
        // remember, we had to do " particleDivRef.current.appendChild( particle ); "
        // and not " document.body.appendChild( particle ); "
        //
        // since when we tried " document.body.appendChild( particle ); " we saw
        // the particles being appended to the body element and then removed per our code;
        // however, we did not see the particles on the screen and I think this has something
        // to do with react and how it handles the DOM so we had to append the particles to
        // a real DOM element or the parent div in this case
        // ==============================

        // append particles to the parent div
        particleDivRef.current.appendChild( particle );

        // calculate a random size from 5px to 25px
        const size = Math.floor( Math.random() * 20 + 5 );

        // change " display : inline; " to " display : block; " so we can see the particles
        particle.style.display = `block`;

        // apply the size on each particle
        particle.style.width  = `${ size }px`;
        particle.style.height = `${ size }px`;

        // if we want particle to move in all directions from the button, then the rotate code
        // below works great
        // rotate between 0 and 180 degrees
        // particle.style.rotate = `${ ( Math.random() - 0.5 ) * 2 * 180 }deg`

        // ==============================
        // IMPORTANT!
        // key to getting the animation to start in the center of the button
        // ==============================

        // ==============================
        // remember, the below code worked at one screen size but as the button width
        // shrunk, we had to use css to center the start point for the animation
        // ( see the scss file for details )
        // ==============================

        // we are positioning where the particle will start the animation and we will
        // set the animation to start in the center of the button based on the button
        // width and height

        // remember, this worked in conjuntion with the css style of " position : absolute; "
        // and this causes the particle element to stick to the parent element or the parent
        // div in this case
        // particle.style.left = ( 398.0 / 2 ) + 'px'; 
        // particle.style.top  = ( 53.5 / 2 ) + 'px';

        // generate a random color accross the entire palette and we need to use hsl here
        // and see the following the w3 schools site for details :
        // " https://www.w3schools.com/colors/colors_hsl.asp "

        // create a hue value between 0 and 360
        particle.style.background = `hsl( ${ Math.random() * 360 }, 70%, 60% )`;

        // generate a random x & y destination
        // the x value will be both negative and positive within a distance of 100px from the mouse
        // the y value will be negative ( meaning it is going up ) within a distance of 450px from
        // the mouse
        const destinationX = x + ( Math.random() - 0.5 ) * 2 * 100;
        const destinationY = y + ( Math.random() ) * -450;



        // test
        console.log( '-------------------' );
        console.log( 'In createParticle()' );

        // test
        // console.log( particleRef.current );

        // test
        // console.log( particleElementRef.current );

        // test
        console.log( `translate( ${ x - ( size / 2 ) }px, ${ y - ( size / 2 ) }px )` ); // this comes from the article

        // test
        console.log( `translate( ${ destinationX }px, ${ destinationY }px )` ); // this comes from the article

        // test
        console.log( `${ x }, ${ y }` ); // same as clientX and clientY

        // test
        console.log( `translate( ${ destinationX - x }px, ${ destinationY - y }px )` ); // this is my solution
        // and results in a stronger effect than the article solution since the numbers are larger on average
        // with my solution

        // test
        console.log( `translate( ${ destinationX - x }px, ${ ( ( destinationY - y ) * 0.95 ) }px )` );

        // test
        console.log( `translate( ${ destinationX - x }px, ${ ( ( destinationY - y ) * 0.80 ) }px )` );

        // test
        console.log( `rotate3d( ${ ( Math.random() - 0.5 ) * 2 }, ${ ( Math.random() - 0.5 ) * 2 }, ${ ( Math.random() - 0.5 ) * 2 }, ${ Math.random() * 360 }deg )` );




        // use the web animations api and store the animation in a variable
        // so we can remove the elements or particles with animation.onfinish
        const animation = particle.animate(

            // ==============================
            // part 1
            // option 2
            // strong animation up, slow movement down
            // ==============================

            // ==============================
            // animation - translate and opacity
            // ==============================

            [
                {
                    // set the origin position of the particle
                    transform : 'translate( 0, 0 )', // start from the spot determined above
                    opacity   : 1,
                    offset    : 0.0
                },
                {
                    // define the second keyframe
                    transform : `translate( ${ destinationX - x }px, ${ destinationY - y }px )`,
                    opacity   : 0.60,
                    offset    : 0.80
                },
                {
                    // define the third keyframe
                    transform : `translate( ${ destinationX - x }px, ${ ( ( destinationY - y ) * 0.95 ) }px )`, // let the
                    // particles hang at the top a little and then gravity kicks in
                    opacity   : 0.30,
                    offset    : 0.90
                },
                {
                    // define the final coordinates as the fourth keyframe
                    transform : `translate( ${ destinationX - x }px, ${ ( ( destinationY - y ) * 0.80 ) }px )`,
                    opacity   : 0,
                    offset    : 1.0
                }
            ],
            {
                duration   : 625 + Math.random() * 1250, // set a random duration from 625ms to 1250ms
                easing     : 'cubic-bezier( 0, .9, .57, 1)',
                delay      : Math.random() * 200, // delay every particle with a random value from 0ms to 200ms
                iterations : 1, // this is default but leave here for reference
                fill       : 'forwards',
                composite : 'add' // need this in order to add the particle rotate animation or part 2
                // to this animation
            }

        ); // end of particle.animate()

        // ==============================
        // part 2
        // ==============================

        // ==============================
        // animation - rotate
        // ==============================

        particle.animate(

            [
                {
                    // set the origin position of the particle
                    transform : 'rotate3d( 0, 0, 0, 0deg )',
                    offset    : 0.0
                },
                {
                    // define the final coordinates as the second keyframe
                    transform : `rotate3d( ${ ( Math.random() - 0.5 ) * 2 }, ${ ( Math.random() - 0.5 ) * 2 }, ${ ( Math.random() - 0.5 ) * 2 }, ${ Math.random() * 360 }deg )`,
                    offset    : 1.0
                },
            ],
            {

                duration   : 625 + Math.random() * 1250, // match the duration above
                easing     : 'cubic-bezier( 0, .9, .57, 1)',
                delay      : Math.random() * 200, // delay every particle with a random value from 0ms to 200ms
                iterations : 1, // this is default but leave here for reference
                fill       : 'forwards',
                composite  : 'add'
            }

        ); // end of particle.animate()

        // when animation is finished remove the particle elements from the DOM
        animation.onfinish = () => {

            particle.remove();
          
        }; // end of animate.onfinish

        /*
            Whoever calls createParticleConfetti( x, y ) gets back this Promise, and they can
            choose to await it if they care about knowing when the particle is actually done
            moving / fading — which is exactly what handleParticleClick needs, since it's
            collecting 50 of these receipts into particlePromises and using Promise.all()
            to wait until every single one of them resolves
        */
        return animation.finished;

    } // end of createParticleConfetti function

    // ==============================
    // function 4
    // ==============================

    // ==============================
    // handleUseRouter function
    // ==============================

    // ==============================
    // purpose : need to delay sending the user to the next page a little bit so that the
    // button particle animation has time to run
    // ==============================

    async function handleUseRouter( e ) {

        // ==============================
        // remove the contact blob view transition when navigating to the contact page
        // ==============================

        // remove the view transition names before navigating back to the home page
        // and this prevents the morph animation from showing up when navigating
        // back to the home page
        const contactBlobH2        = document.querySelector( '.contact-blob-h2' );
        const contactBloBAnchorTag = document.querySelector( '.contact-blob-anchor-tag' );
        const contactBlobSphere    = document.querySelector( '.contact-blob-sphere' );

        if ( contactBlobH2        ) contactBlobH2.style.viewTransitionName        = 'none';
        if ( contactBloBAnchorTag ) contactBloBAnchorTag.style.viewTransitionName = 'none';
        if ( contactBlobSphere    ) contactBlobSphere.style.viewTransitionName    = 'none';

        // ==============================
        // end of remove the contact blob view transition when navigating to the contact page
        // ==============================

        // ==============================
        // morph video container to blue box on the contact page
        // ==============================

        // ==============================
        // // remember, this works because we already cleared the contact-blob's competing
        // view-transition-names to 'none' earlier in this function — with no other element
        // on the home page claiming these same names, each one here maps to exactly one
        // matching element on the contact page, avoiding the ambiguous-match problem
        //
        // in other words, we are isolating the element from the contact blob element;
        // therefore, we can run 2 different view transitions on the same element on the
        // contact page ( i.e. contact page blue box )
        // ==============================
/*
        const contactVideoH2 = document.querySelector( '.contact-video-h2' );
        contactVideoH2.style.viewTransitionName = 'contact-page-h1';

        const particleDivContainer = document.querySelector( '.particle-div-container' );
        particleDivContainer.style.viewTransitionName = 'contact-page-image-underline';

        const contactVideoContainerDiv2 = document.querySelector( '.contact-video-container-div2' );
        contactVideoContainerDiv2.style.viewTransitionName = 'contact-page-blue-box';
*/
        // ==============================
        // end of morph video container to blue box on the contact page
        // ==============================

        // call handleParticleClick function here and this will wait until all the
        // particle animations finish and once it is finished then we can navigate
        // to the contact page

        // waits for the real animation to finish, not a guessed delay

        // decided against waiting for handleParticleClick to finish since it was
        // taking too long
        // await handleParticleClick( e );

        // fire the particles, don't await them
        handleParticleClick(e);

        await new Promise( resolve => setTimeout( resolve, 400 ) ); // short pause — just enough for
        // the burst to register visually before navigating

        // stop every currently running animation in the document
        document.getAnimations().forEach(anim => anim.cancel());

        // then give it 200ms and then navigate to the contact page
        await new Promise( resolve => setTimeout( resolve, 150 ) );

        // navigate to the contact page
        navigate( '/contact' );

    } // end of handleUseRouter function


    return (

        // ==============================
        // container
        // ==============================

        <div className={ `${ styles.confettiMovementDownContainer } particle-div-container` }>

            {
                /*
                    // ==============================
                    // container > div 1 ( wrapper div )
                    // ==============================

                    // ==============================
                    // button particle animation
                    // ==============================
                */
            }
            <div
                ref={ particleDivRef }
            >

                <a
                    // to call 2 functions from one click event, see the following anwsers
                    // from stackoverflow :
                    // " https://stackoverflow.com/questions/26069238/call-multiple-functions-onclick-reactjs "
                    onClick= { async ( e ) =>
                        {
                            handleButtonClickContactUs( e );
                            /*
                                It waits for handleUseRouter to fully finish — including its own
                                internal await handleParticleClick( e ) and the navigate( '/contact' )
                                call — before the onClick handler is considered done, instead of
                                letting the click handler move on immediately while handleUseRouter
                                is still running in the background
                            */
                            await handleUseRouter( e );
                        }
                    }
                >
                    <button
                        type="submit"
                    >
                        Contact Us
                    </button>
                </a>

            </div>

        </div>

    );

} // end of ConfettiMovementDownComponent



