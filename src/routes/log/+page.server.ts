import { getUserLog } from '$lib/utils/backendUtils.ts';
import type { PageServerLoad } from './$types.js';
import { redirect } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ locals }) => {
    const user = locals.authedUser;

    if (!user) {
        throw redirect(302, '/auth/login'); // Redirect to login page
    }

    // Fetch logs for the logged-in user
    const logs = await getUserLog(user.id);

    
    return {
        user,
        logs,
    };

};

