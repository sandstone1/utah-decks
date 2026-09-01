

// import in defineMiddleware
import { defineMiddleware } from 'astro:middleware';
// import in my database connection
import { db } from './lib/db';

// define which paths are protected and require a login to view
const PROTECTED_ROUTES = [ '/dashboard', '/settings', '/admin' ];


// STEP #1
// ==============================
// Intercept the request using this middleware file
// ==============================

// every time a user clicks a link or refreshes, this function will run before the
// page renders

// defineMiddleware gives us 2 primatives we can use : context and next
export const onRequest = defineMiddleware( async ( context, next ) => {

    // ==============================
    // Check for build status
    // ==============================

    // if Astro is building the site, skip the DB check
    if ( import.meta.env.BUILD ) {

        return next();

    } // end of if

    // ==============================
    // Define variables
    // ==============================

    // get the url, cookies, locals and redirect from the context object and the
    // the context includes everything about the current request
    const { url, cookies, locals, redirect } = context;
    // get the pathname, which is the specific path the user is trying to visit
    const pathname = url.pathname;
    // make sure local.users is initially set to null or not logged in
    locals.user = null;

    // STEP #2
    // ==============================
    // Cookie check
    // ==============================

    // get the session token from the browser cookie and we are asking the browser :
    // " Do you have a cookie named session_id "
    const sessionToken = cookies.get( 'session_id' )?.value;

    // ==============================
    // If the user actually has a cookie named session_id, then we need to see if it's real or
    // a fake
    // ==============================

    if ( sessionToken ) {

        // get a result or the row based on the sessionToken and based on the session not being
        // expired

        // STEP #3
        // ==============================
        // Database verification 
        // ==============================

        // remember, in SQL, the asterisk ( * ) is a wildcard that means all columns and
        // when we write session.* in a JOIN query, we are telling the database : "Give
        // me every single piece of data from the session table, but only specific pieces
        // from the other tables and this is very helpful when we have similar columns in
        // both tables ( i,e, createdAt and updatedAt )
        const sessionResult = await db.execute(
            {
                sql  : `SELECT session.*, user.name, user.email, user.isAdmin 
                        FROM session 
                        JOIN user
                        ON session.userId = user.id 
                        WHERE session.token = ? AND session.expiresAt > ?`,
                args : [ sessionToken, new Date().toISOString() ] // use ISO string to match our database format
            }
        );

        // ==============================
        // Database verification successful - proceed forward
        // ==============================

        if ( sessionResult.rows.length > 0 ) {

            // STEP #4
            // ==============================
            // Set the identity ( locals.user )
            // ==============================

            // ==============================
            // Token is valid - inject user data into locals so that any .astro page can use it
            // ==============================
            locals.user = sessionResult.rows[ 0 ] as any;

        } else {

            // ==============================
            // Token is fake or expired - delete the cookie from the browser so the user doesn't
            // keep sending bad data
            // ==============================
            cookies.delete( 'session_id', { path: '/' } );

        } // end of if else

    } // end of if ( sessionToken ) {}

    // STEP #5
    // ==============================
    // Authorization
    // ==============================

    // if the page is private and user is null or not authenticated then stop the request and
    // redirect the user to the home page
    if ( PROTECTED_ROUTES.includes( pathname ) && !locals.user ) {

        return redirect( '/' );

    }

    // STEP #6
    // middleware cleared the user so let them proceed forward and show the page
    return next();

} );

