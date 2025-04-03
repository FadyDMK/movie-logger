async function load({ locals }) {
  let authedUser = void 0;
  if (locals.authedUser) authedUser = locals.authedUser;
  return { authedUser };
}
export {
  load
};
