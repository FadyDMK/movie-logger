import { r as redirect, f as fail } from "../../../../chunks/index2.js";
import { a as checkUser, r as registerUser } from "../../../../chunks/backendUtils.js";
function checkPassword(password) {
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const specialCharRegex = /[\W_]/;
  const numberRegex = /\d/;
  if (password.length < 8) {
    return false;
  }
  if (!uppercaseRegex.test(password)) {
    return false;
  }
  if (!lowercaseRegex.test(password)) {
    return false;
  }
  var specialCharAndNumberCount = 0;
  for (var i = 0; i < password.length; i++) {
    if (specialCharRegex.test(password[i]) || numberRegex.test(password[i])) {
      specialCharAndNumberCount++;
    }
  }
  if (specialCharAndNumberCount < 3) {
    return false;
  }
  return true;
}
async function load({ locals }) {
  if (locals.authedUser) throw redirect(303, "/");
  return {};
}
const actions = {
  signup: async ({ request }) => {
    const signupFormData = await request.formData();
    const username = signupFormData.get("username") ?? "";
    const password = signupFormData.get("password") ?? "";
    let SignUpResponse = {
      usernameUsed: false,
      weakPassword: false,
      error: false,
      success: false,
      username,
      password,
      message: ""
    };
    const isPassStrong = checkPassword(password.toString());
    if (!isPassStrong) {
      SignUpResponse.weakPassword = true;
      SignUpResponse.error = true;
      SignUpResponse.message = "Password is weak!";
      return fail(400, SignUpResponse);
    }
    const userExists = await checkUser(username.toString());
    if (userExists) {
      SignUpResponse.usernameUsed = true;
      SignUpResponse.error = true;
      SignUpResponse.message = "Username already exists!";
      return fail(400, SignUpResponse);
    }
    const registerSuccess = await registerUser(SignUpResponse);
    if (!registerSuccess) {
      SignUpResponse.error = true;
      SignUpResponse.message = "Error registering user";
      return fail(503, SignUpResponse);
    }
    redirect(303, "/auth/login");
  }
};
export {
  actions,
  load
};
