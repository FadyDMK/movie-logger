import { db } from '$lib/db/database.ts';
import { json } from '@sveltejs/kit';
import { getRequest } from '@sveltejs/kit/node';


export const DELETE = async ({ params, locals, request }) => {
    const logId = params.id;

    const user = locals.authedUser;
    if (!user) {
        return new Response('Unauthorized', { status: 401 });
    }
    const body = await request.json();
    const { userId } = body;
    if (userId !== user.id) {
        return new Response('Unauthorized', { status: 401 });
    }

    const log = await db.log.findUnique({
        where: {
            id: logId,
            userId: userId,
        },
    });
    if (!log) {
        return new Response('Log not found', { status: 404 });
    }

    if (log.userId !== user.id) {
        return json({ error: true, message: "Forbidden: Log does not belong to the user" }, { status: 403 });
    }

    try{
        await db.log.delete({
            where: {
                id: logId,
            },
        });
        return json({ success: true, message: "Log deleted successfully" });
    } catch (error) {
        console.error("Error deleting log:", error);
        return json({ error: true, message: "Internal server error" }, { status: 500 });
    }
}