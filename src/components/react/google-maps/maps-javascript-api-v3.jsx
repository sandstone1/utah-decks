



// ==============================
// Google Map set up - notes
// ==============================

// ==============================
// note 1
// ==============================

// please see the following video called " How to load Maps JavaScript API in React " for a
// reference to the below steps : " https://www.youtube.com/watch?v=9e-5QHpadi0 "

// ==============================
// note 2
// ==============================

// also, please see the following video :
// " https://dev.to/brad_beggs/google-maps-api-key-does-it-need-hidden-2jim "
// for useful insights into your api key


// ==============================
// note 3
// ==============================

// remember, I limited my Maps JavaScript API quota from :

/*
    Map loads per day	            Unlimited 	
    Map loads per minute	        30,000 	
    Map loads per minute per user 	300 
*/

// to :

/*
    Map loads per day	            30,000	
    Map loads per minute	        30,000 	
    Map loads per minute per user 	300 
*/

// and I did this in an attempt to prevent someone from hacking my account and
// charging up my billing based on usage



// ==============================
// note 4 
// ==============================

// ==============================
// step 1
// ==============================

// ==============================
// set up the ChanTerra project in the Google Maps Platform
// ==============================

// ==============================
// 1 - set up a project for ChanTerra in the Google Maps Platform located at
// " https://console.cloud.google.com/google/maps-apis/home?project=chanterra "
// 2 - and then I need to get an API key and after I get an api key then a modal will
// appear with a title of " Protect your API key " and sub title of : " In order to protect
// your account from unwanted malicious usage, we recommend restricting your Google Maps
// Platform API key. "
// 3 - so we are going to restrict our api key and inside the modal we will first choose an
// option from a dropdown menu called " Select restriction type " and I choose
// " HTTP referrers ( web sites) " and then underneth this option we see another sub title
// called " Restrict key usage requests to the specified websites " and in the text field I put
// " *.chanterra.com/* " and then we need to press the " Restrict Key " button
// 4 - so I see a notification that I successfully restricted my key and I am on the url
// " https://console.cloud.google.com/google/maps-apis/home;onboard=true?project=chanterra "
// 5 - and on the left hand side of the page I see several different categories such as :
// " Overview ", " APIs ", " Metrics ", " Quotas " and " Credentials " and if I go to the
// Credentials category then I see my API key for the ChanTerra project
// 6 - and then inside the Credentials category I can click on the " Maps API Key " and this
// will take me to a new page where I see the title " Key restrictions " and underneth this
// title are 2 sub titles called " Set an application restriction " and " API restrictions "
// and underneth the " Set an application restriction " title is another title called
// " Website restrictions " and text of " Restrict key usage requests to the specified
// websites. " and remember I already restricted chanterra.com in step 3 above so I now I
// need to restrict my localhost and underneth the text " Restrict key usage requests to the
// specified websites. " I see a title called " Add website " and underneth the title is
// a text box and I will add " http://localhost:3016/* " and then click the " Done " button
// and now I see 2 urls that are key restricted
// 7 - and next I need to set the " API restrictions " and underneth the title " API
// restrictions " I see 2 radio buttons and I need to select the second radio button called
// " Restrict key " and then underneth the " Restrict key " radio button I see a dropdown
// menu with all map related APIs and I need to select the " Maps JavaScript API " option
// and this will specify the enabled API(s) that this key can call so in my case this key
// can only call the " Maps JavaScript API " ( which is what I want ) and then once I'm
// done setting up any key restrictions then I need to click on the blue " Save " button
// located at the bottom on the page
// 8 - and after I click on the " Save " button then I'm taken back to the ChanTerra project
// page or " https://console.cloud.google.com/google/maps-apis/credentials?project=chanterra "
// and then I need to click on the left hand tab called " APIs " and make sure we have the
// " Maps JavaScript API " enabled and when I go to this page I see that we do have the
// " Maps JavaScript API " enabled
// 9 - and then save our api key in our next.config.js file
// 10 - and then inside the Google Maps Platform, activate my " Maps JavaScript API " for
// ChanTerra
// ==============================

// ==============================
// files for step 1
// ==============================

// ==============================
// 1 - next.config.js
// ==============================



// ==============================
// step 2
// ==============================

// ==============================
// start working with the Google Maps api
// ==============================

// ==============================
// 1 - install " @react-google-maps/api " and go my terminal and do :
// " Home@Mac-Studio portfolio_site % npm i @react-google-maps/api "
// 2 - import in GoogleMap, useLoadScript and Marker from the package
// " @react-google-maps/api "
// 3 - and remmeber the useLoadScript will load in a bunch of JavaScript under the
// hood and Google maps will use this JavaScript to render the map
// 4 - and then get the " isLoaded " variable by using useLoadScript and then use
// " isLoaded " below to render a Spinner component, if needed
// 5 - and then bring in the <GoogleMap /> component and then set the zoom, center
// and mapContainerClassName attributes
// 6 - remember, the my styles for the <GoogleMap /> component is found in the
// global.scss file
// 7 - and then place a marker in the map using the <Marker /> component and then give
// the marker a position on the map
// 8 - and when I moved the map, the HomePage component did not rerender the map and
// thereby re center the map but if I run into this problem in the future then we can
// use the useMemo hook to solve it and see the " How to load Maps JavaScript API in
// React " video for details 
// ==============================

// ==============================
// files for step 2
// ==============================

// ==============================
// 1 - pages/index.js
// 2 - pages/index.module.scss
// 3 - styles/global.scss
// ==============================



// ==============================
// step 3
// ==============================

// ==============================
// Netlify deployment
// ==============================

// ==============================
// 1 - add the Google Maps api key environment variable to the Netlify deployment
// ==============================

// ==============================
// files for step 3
// ==============================

// ==============================
// 1 - none
// ==============================

// ==============================
// end of Google Map set up
// ==============================



// ==============================
// note 5
// ==============================

// ==============================
// 1 - the first change I had to make is related to using " useLoadScript "
// and to fix this I had to replace " useLoadScript " with " useJsApiLoader "
// remember, for the import statement : 
// " import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'; "
// useLoadScript has been depreciated, see " https://www.npmjs.com/package/@react-google-maps/api "
// for the latest rewrite ( as of early February 2024 ) of the react-google-maps library and
// therefore, we need to use useJsApiLoader instead of useLoadScript and this removed one
// of the errors in the console
// 2 - the second change I had to make is related to this error message :
// " As of February 21st, 2024, google.maps.Marker is deprecated. Please use
// google.maps.marker.AdvancedMarkerElement instead. "
// and so far I don't know how to fix this error
// ==============================





// ==============================
// note 6
// ==============================

// ==============================
// 1 - see the following video from Leigh Halliday on how to use the @vis.gl/react-google-maps
// package for Google Maps : https://www.youtube.com/watch?v=PfZ4oLftItk&t=7s
// ==============================









// import in Fragment
import { Fragment } from 'react';
// import in the APIProvider, Map, AdvancedMarkerMarker, Pin, InfoWindow hooks from
// the package " @vis.gl/react-google-maps "
import { 
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
    InfoWindow
} from '@vis.gl/react-google-maps';


export default function MapsJavascriptAPIComponent() {

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

    // use the site : " https://www.latlong.net/convert-address-to-lat-long.html "
    // to convert a street address into lat and lng coordinates
    const position = { lat : 40.433620, lng : -111.857770 }

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


    return (

        <Fragment>

            {
                /*
                    // ==============================
                    // Google map
                    // ==============================
                */
            }
            {

                <APIProvider apiKey={ import.meta.env.PUBLIC_GOOGLE_MAPS_API_KEY }>

                    <div style={ { maxWidth : '144.0rem', height : '80.0rem', margin : '0 auto' } }>

                        <Map
                            defaultZoom={ 10 } // defaultZoom allows for interactivity after the map has loaded; whereas, zoom does not
                            defaultCenter={ position } // defaultCenter allows for interactivity after the map has loaded; whereas, center does not
                            mapId={ 'import.meta.env.google_maps_id' } // since we are using AdvancedMarker
                            // we need to set up a map id
                            colorScheme={ 'DARK' } // choose between light and dark themes
                            // disableDefaultUI={true} // use this if we want to disable all the controls
                            // gestureHandling={ "auto" } // this is the default and gesture handling is either cooperative or greedy, depending
                            // on whether the page is scrollable or in an iframe

                            // if a page is scrollable, then the "auto" gesture handling setting in Google Maps will default to "cooperative"
                            // behavior, meaning the map will cooperate with the page scrolling and not try to capture all touch gestures, unlike
                            // the "greedy" behavior which would react to all touch events even when scrolling the page

                            // see " https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.gestureHandling "
                            // for details on gestureHandling
                            options={
                                {
                                    mapTypeControl    : false, // remove this from the map
                                    fullscreenControl : false, // remove this from the map
                                    streetViewControl : false, // remove this from the map
                                    draggable         : true, // make map draggable
                                    scaleControl      : true, // this show a scale marker inside the map
                                    scrollwheel       : false // when placing the cursor over the
                                    // map, we see a text modal appear over the map that says
                                    // " use command + scroll to zoom the map " and this results
                                    // in a bad user experience as someone is scrolling down the
                                    // page; therefore, we had to remove this text modal and we
                                    // did that by declaring " scrollwheel : false "
                                }
                            }
                        >
                            <AdvancedMarker
                                position={ position }
                            />
                        </Map>

                    </div>

                </APIProvider>

            }

        </Fragment>

    );

} // end of MapsJavascriptAPIComponent

