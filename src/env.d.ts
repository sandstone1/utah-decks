/// <reference types="astro/client" />

// ==============================
// imports
// ==============================

import type { User } from './types';


// declare global tells TS: " Even though I'm importing types, this namespace should still be
// accessible everywhere in the project. "
declare global {
    // declare this namespace so I can use Astro.locals.user
    namespace App {
        interface Locals {
            // use the imported type here
            user : User | null;
        }
    }
}
