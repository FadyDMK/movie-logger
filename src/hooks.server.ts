import { SECRET_KEY } from "$env/static/private";
import { db } from "$lib/db/database.ts";
import { findUserByUsernameWithPassword } from "$lib/utils/backendUtils.ts";
import jwt from "jsonwebtoken";


export async function handle({ event, resolve }) {
    const authToken = event.cookies.get('authToken');
    try {
        if (!authToken) {
            event.locals.authedUser = undefined;
        } else {
            const claims = jwt.verify(authToken, SECRET_KEY) as jwt.JwtPayload;
            if (claims?.authedUser) {
                const fullUser = await findUserByUsernameWithPassword(claims.authedUser.username);
                const { password, ...userWithoutPassword } = fullUser ?? {};
                event.locals.authedUser = userWithoutPassword;
            } else {
                event.locals.authedUser = undefined;
            }
        }
    } catch (error) {
        console.error("Error verifying authToken:", error);
        event.locals.authedUser = undefined;
    }

    return resolve(event);
}