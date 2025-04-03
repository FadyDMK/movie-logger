
export const load = async ({ cookies }) => {
    const authToken = cookies.get('authToken');
    console.log('Server-side isAuthed:', !!authToken);
    return {
        isAuthed: !!authToken 
    };
};

