export const load = async ({ locals }) => {
    return {
        isAuthed: !!locals.user, 
        user: locals.user || null, 
    };
};