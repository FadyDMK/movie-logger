import { S as SECRET_KEY } from "./private.js";
import { f as findUserByUsernameWithPassword } from "./backendUtils.js";
import jwt from "jsonwebtoken";
async function handle({ event, resolve }) {
  const authToken = event.cookies.get("authToken");
  try {
    if (!authToken) {
      event.locals.authedUser = void 0;
    } else {
      const claims = jwt.verify(authToken, SECRET_KEY);
      if (claims?.authedUser) {
        const fullUser = await findUserByUsernameWithPassword(claims.authedUser.username);
        const { password, ...userWithoutPassword } = fullUser ?? {};
        event.locals.authedUser = userWithoutPassword;
      } else {
        event.locals.authedUser = void 0;
      }
    }
  } catch (error) {
    console.error("Error verifying authToken:", error);
    event.locals.authedUser = void 0;
  }
  return resolve(event);
}
export {
  handle
};
