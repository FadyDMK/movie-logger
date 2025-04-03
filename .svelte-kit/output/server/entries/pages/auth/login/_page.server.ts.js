import { r as redirect, f as fail } from "../../../../chunks/index2.js";
import { f as findUserByUsernameWithPassword } from "../../../../chunks/backendUtils.js";
import bcrypt from "bcrypt";
import { S as SECRET_KEY } from "../../../../chunks/private.js";
import jwt from "jsonwebtoken";
import { i as isAuthed } from "../../../../chunks/stores.js";
async function load({ cookies, locals }) {
  const authToken = cookies.get("authToken");
  if (!authToken) {
    return { clearUser: true };
  }
  if (locals.authedUser) throw redirect(303, "/");
  return { clearUser: false };
}
const actions = {
  login: async ({ request, cookies }) => {
    const loginFormData = await request.formData();
    const username = loginFormData.get("username") ?? "";
    const password = loginFormData.get("password") ?? "";
    let loginResponse = {
      error: false,
      message: "",
      username
    };
    try {
      const userAttemptingLogin = await findUserByUsernameWithPassword(username.toString());
      if (!userAttemptingLogin) {
        loginResponse.error = true;
        loginResponse.message = "Invalid username or password";
        return fail(400, loginResponse);
      }
      const authAttempt = await bcrypt.compare(password.toString(), userAttemptingLogin.password);
      if (!authAttempt) {
        loginResponse.error = true;
        loginResponse.message = "Invalid username or password";
        return fail(400, loginResponse);
      }
      if (authAttempt) {
        const { password: password2, ...userAttemptingLoginWithoutPassword } = userAttemptingLogin;
        const authToken = jwt.sign(
          { authedUser: userAttemptingLoginWithoutPassword },
          SECRET_KEY,
          { expiresIn: "24h" }
        );
        cookies.set("authToken", authToken, { httpOnly: true, maxAge: 60 * 60 * 24, sameSite: "strict", path: "/" });
        isAuthed.set(true);
        return redirect(302, "/");
      }
    } finally {
    }
    return loginResponse;
  }
};
export {
  actions,
  load
};
