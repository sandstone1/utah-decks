




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
import styles from './confetti-no-movement-down.module.scss';



export default function ConfettiNoMovementDownComponent() {

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
    // handleButtonClickShareABusiness function
    // ==============================

    // ==============================
    // dataLayer push
    // ==============================

    // ==============================
    // purpose : to push information into the dataLayer method so that we can track this click
    // event in GTM and GA4
    // ==============================

    async function handleButtonClickShareABusiness( e ) {

        // test
        console.log( '-------------------' );
        console.log( 'In handleButtonClickShareABusiness()' );

        // push the following object into the dataLayer
        window.dataLayer.push(

            {

                'event'      : 'button_click',
                'button_id'  : 'Share a Business - Home Page',
                'page_url'   : 'wasatchfrontlocal.com/',
                'page_title' : 'Wasatch Front Local | Share a Business | Button Click'

            }

        );

    } // end of handleButtonClickShareABusiness function

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

    async function handleParticleClick( e ) {

        // generate 50 particles
        for ( let i = 0; i < 50; i++ ) {
            
            // pass in the mouse coordinates to the createParticle() function
            // and then call the createParticle() function
            createParticleConfetti( e.clientX, e.clientY );

            // test
            console.log( e.clientX, e.clientY );

        } // end of for

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

        // we are positioning where the particle will start the animation and we will
        // set the animation to start in the center of the button based on the button
        // width and height

        // remember, this worked in conjuntion with the css style of " position : absolute; "
        // and this causes the particle element to stick to the parent element or the parent
        // div in this case
        particle.style.left = ( 219.95 / 2 ) + 'px'; 
        particle.style.top  = ( 53.5 / 2 ) + 'px';

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
            // option 1 
            // strong animation up, no movement down
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
                    // define the final coordinates as the second keyframe
                    transform : `translate( ${ destinationX - x }px, ${ destinationY - y }px )`,
                    opacity   : 0,
                    offset    : 1.0
                }
            ],
            {
                duration   : 500 + Math.random() * 1000, // set a random duration from 500ms to 1500ms
                easing     : 'cubic-bezier( 0, .9, .57, 1)',
                delay      : Math.random() * 200, // delay every particle with a random value from 0ms to 200ms
                iterations : 1, // this is default but leave here for reference
                fill       : 'forwards',
                composite  : 'add' // need this in order to add the particle rotate animation or part 2
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

                duration   : 500 + Math.random() * 1000, // set a random duration from 500ms to 1500ms
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

        // test
        console.log( '-------------------' );
        console.log( 'In handleUseRouter()' );

        // after successfully running most or all of the button particle animation
        // redirect the user to the next page

        // remember, we need delay the push to the next page a little bit
        setTimeout( () => {

            navigate( '/get-featured' );

        }, 400 ); // end of setTimeout

    } // end of handleUseRouter function


    return (

        // ==============================
        // container
        // ==============================

        <div
            className={ styles.confettiNoMovementDownContainer }
        >

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
                    onClick= { ( e ) =>
                        {
                            handleButtonClickShareABusiness( e );
                            handleParticleClick( e );
                            handleUseRouter( e );
                        }
                    }
                >
                    <button
                        type="submit"
                    >
                        Share a Business
                    </button>
                </a>

            </div>

        </div>

    );

} // end of ConfettiNoMovementDownComponent



