import { SECRET_KEY } from "$env/static/private";
import { db } from "$lib/db/database.ts";
import { findUserByUsernameWithPassword } from "$lib/utils/backendUtils.ts";
import jwt from "jsonwebtoken";


export async function handle({ event, resolve }) {
    const authToken = event.cookies.get('authToken');
    try {
        if (!authToken) event.locals.authedUser = undefined;

        const claims = authToken ? jwt.verify(authToken, SECRET_KEY) as jwt.JwtPayload : undefined;

        if (!claims) event.locals.authedUser = undefined;

        if (authToken && claims) {
            const fullUser = claims?.authedUser ? await findUserByUsernameWithPassword(claims.authedUser.username) : undefined;
            const {password, ...userMinusPassword} = fullUser ?? {};
            event.locals.authedUser = userMinusPassword;
        }

    }
    finally {
        const response = await resolve(event);
        return response;
    }

}