import { g as getUserLog } from "../../../chunks/backendUtils.js";
import { r as redirect } from "../../../chunks/index2.js";
const load = async ({ locals }) => {
  const user = locals.authedUser;
  if (!user) {
    throw redirect(302, "/auth/login");
  }
  const logs = await getUserLog(user.id);
  return {
    user,
    logs
  };
};
export {
  load
};
