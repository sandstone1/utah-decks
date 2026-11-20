


// import in the useEffect and useRef hooks
import { useEffect, useRef } from 'react';
// import in the Font Awesome calendar check icon
import { FaRegCalendarCheck } from "react-icons/fa6";
// import in our stylesheet
import styles from './recent-work-v3.module.scss';



export default function RecentWorkComponent() {

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

    // use the useRef(); hook to create a reference to a DOM element(s)
    const videoRef = useRef( null );

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
    // useEffect 1
    // ==============================

    // set the starting volume to 50%
    useEffect( () => {

        if ( videoRef.current ) videoRef.current.volume = 0.45;

    }, [] ); // end of useEffect 1

    // ==============================
    // useLoader();
    // ==============================

    // ==============================
    // useFrame();
    // ==============================

    // ==============================
    // functions
    // ==============================


    return (

        // ==============================
        // container
        // ==============================

        <div 
            className={ styles.recentWorkContainer }
            id="recent-work"    
        >

            {
                /*
                    // ==============================
                    // container > div 1 ( wrapper div )
                    // ==============================
                    A Few Recent Projects
                */
            }
            <div>

                <h2>
                    A Glimpse Into <span style={ { color : 'var( --green-290 )' } }>Our Work</span>
                </h2>

                {
                    /*
                        // ==============================
                        // container > div 1 ( wrapper div ) > div 2 ( content wrapper )
                        // ==============================
                    */
                }
                <div>

                    {
                        /*
                            // ==============================
                            // container > div 1 > div 2 > div 1 ( Jordan video explaining deck repair with Trex rainscape )
                            // ==============================
                        */
                    }
                    <div>

                        <h3>Watch Jordan Walk Through a Real Deck Repair</h3>

                        <p>Jordan shows the water damage hidden under this deck, from rotted wood
                        to black mold, and explains how we fixed it. See how a Trex RainEscape
                        drainage system keeps water out of the structure and keeps the space below
                        dry.</p>

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

                                // ==============================
                                // from AI :
                                // No. With preload="metadata" the browser downloads only a small piece of the file
                                // when the page loads, usually well under 1 MB. That’s enough to get the length,
                                // the size and the first frame. The full 8.8 MB downloads only after someone
                                // presses play, and it streams as they watch.
                                //
                                // If you want nothing downloaded until they press play, change it to
                                // preload="none". The tradeoff is that the box shows blank instead of
                                // Jordan’s first frame, unless you add a poster image.
                                // ==============================

                            */
                        }
                        <video
                            controls
                            // muted
                            playsInline // video will not work on the iPhone without this control
                            preload="metadata"
                            ref={ videoRef }
                        >
                            <source
                                src="/videos/jordan_deck_repair_walkthrough_720_02.mp4"
                                type="video/mp4"
                            />

                            Sorry, your browser does not support embedded videos
                        </video>

                    </div>

                    {
                        /*
                            // ==============================
                            // container > div 1 > div 2 > div 2 ( before picture 1 )
                            // ==============================
                        */
                    }
                    <div>

                        <h3>Before: Water Damage Hidden Above the Patio</h3>

                        <p>Years of water getting through the deck above had rotted the
                        decking underneath and stained the joists. From the patio it
                        looked like an old ceiling. Up close, the wood was soft, crumbling
                        and starting to break apart.</p>

                        {
                            /*
                                // ==============================
                                // container > div 1 > div 2 > div 1 > picture 1
                                // ==============================
                            */
                        }
                        <picture>
                            <source
                                media="( max-width : 620px )"
                                srcSet="/images/recent_work/recent_50_620_02.webp"
                                type="image/webp"
                            />
                            <source
                                srcSet="/images/recent_work/recent_50_1440_02.webp"
                                type="image/webp"
                            />
                            <img
                                src="/images/recent_work/recent_50_1440_02.jpg"
                                width="1440"
                                height="958"
                                loading="eager"
                                fetchpriority={ "high" } // needed in case someone scrolls down the
                                // page super fast
                                alt="Before completed deck project"
                            />
                        </picture>

                    </div>

                    {
                        /*
                            // ==============================
                            // container > div 1 > div 2 > div 3 ( after picture 1 )
                            // ==============================
                        */
                    }
                    <div>

                        <h3>After: Repaired, Sealed and Finished</h3>

                        <p>We replaced the damaged wood and installed a clean, finished
                        ceiling with recessed lighting. Water now stays out, and the patio
                        below is a dry, bright space the family can actually use.</p>

                        {
                            /*
                                // ==============================
                                // container > div 1 > div 2 > div 2 > picture 1
                                // ==============================
                            */
                        }
                        <picture>
                            <source
                                media="( max-width : 620px )"
                                srcSet="/images/recent_work/recent_53_620.webp"
                                type="image/webp"
                            />
                            <source
                                srcSet="/images/recent_work/recent_53_1440.webp"
                                type="image/webp"
                            />
                            <img
                                src="/images/recent_work/recent_53_1440.jpg"
                                width="1440"
                                height="958"
                                loading="lazy"
                                // fetchpriority={ "high" } // needed in case someone scrolls down the
                                // page super fast
                                alt="Recently completed deck project"
                            />
                        </picture>

                    </div>

                    {
                        /*
                            // ==============================
                            // container > div 1 > div 2 > div 4 ( before picture 2 )
                            // ==============================
                        */
                    }
                    <div>

                        <h3>Before: A Leaking Deck Surface</h3>

                        <p>The old tile surface looked fine from above, but water
                        was getting through it into the structure underneath. To stop the
                        damage for good, the surface had to come off so the framing could
                        be repaired.</p>

                        {
                            /*
                                // ==============================
                                // container > div 1 > div 2 > div 3 > picture 2
                                // ==============================
                            */
                        }
                        <picture>
                            <source
                                media="( max-width : 620px )"
                                srcSet="/images/recent_work/recent_48_620.webp"
                                type="image/webp"
                            />
                            <source
                                srcSet="/images/recent_work/recent_48_1440.webp"
                                type="image/webp"
                            />
                            <img
                                src="/images/recent_work/recent_48_1440.jpg"
                                width="1440"
                                height="958"
                                loading="lazy"
                                // fetchpriority={ "high" } // needed in case someone scrolls down the
                                // page super fast
                                alt="Before completed deck project"
                            />
                        </picture>

                    </div>

                    {
                        /*
                            // ==============================
                            // container > div 1 > div 2 > div 5 ( after picture 2 )
                            // ==============================
                        */
                    }
                    <div>

                        <h3>After: New Composite Deck, Built to Last</h3>

                        <p>We installed low-maintenance composite decking with a clean border,
                        keeping the steel railing and the mountain view. It&apos;s now a dry,
                        solid deck that&apos;s ready for the fire pit and years of use.</p>

                        {
                            /*
                                // ==============================
                                // container > div 1 > div 2 > div 4 > picture 2
                                // ==============================
                            */
                        }
                        <picture>
                            <source
                                media="( max-width : 620px )"
                                srcSet="/images/recent_work/recent_20_620.webp"
                                type="image/webp"
                            />
                            <source
                                srcSet="/images/recent_work/recent_20_1440.webp"
                                type="image/webp"
                            />
                            <img
                                src="/images/recent_work/recent_20_1440.jpg"
                                width="1440"
                                height="958"
                                loading="lazy"
                                // fetchpriority={ "high" } // needed in case someone scrolls down the
                                // page super fast
                                alt="Recently completed deck project"
                            />
                        </picture>

                    </div>

                </div>

            </div>

            {
                /*
                    // ==============================
                    // container > div 2 ( schedule your free estimate button )
                    // ==============================
                */
            }
            <div>

                <a href="/decks/deck-repair#calendar-section">
                    <FaRegCalendarCheck style={ { verticalAlign: '-3.0px', fontSize: '2.25rem', margin: '0 1.0rem 0 0' } } />
                    Schedule Your Free Estimate
                </a>
    
            </div>

        </div>

    );

} // end of RecentWorkComponent

