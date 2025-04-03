import { i as isAuthed } from "../../../../chunks/stores.js";
import { r as redirect } from "../../../../chunks/index2.js";
function load({ cookies }) {
  cookies.set("authToken", "", { httpOnly: true, maxAge: 0, sameSite: "strict", path: "/" });
  isAuthed.set(false);
  redirect(302, "/auth/login");
}
export {
  load
};
