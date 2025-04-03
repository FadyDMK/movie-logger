
export const load = async ({ cookies }) => {
    const authToken = cookies.get('authToken');
    return {
        isAuthed: !!authToken 
    };
};

