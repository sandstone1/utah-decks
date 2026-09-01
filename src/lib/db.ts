

// ==============================
// imports
// ==============================

// import in createClient from libsql
import { createClient } from '@libsql/client';



// ==============================
// create database connection
// ==============================

// create my db connection
export const db = createClient( 
    {

        url       : import.meta.env.DATABASE_URL || "file:database/sndwch-shop.db",
        authToken : import.meta.env.DATABASE_AUTH_TOKEN

    } 
);

