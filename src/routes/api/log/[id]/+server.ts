import { db } from '$lib/db/database.ts';
import { checkMovieAndUser } from '$lib/utils/backendUtils.ts';
import { Status } from '@prisma/client';
import { fail } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
import { getRequest } from '@sveltejs/kit/node';
import { stat } from 'fs';


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

    try {
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

export const PUT = async ({ params, locals, request }) => {
    const logId = params.id;

    const user = locals.authedUser;
    if (!user) {
        return new Response('Unauthorized', { status: 401 });
    }
    const body = await request.json();
    const { userId, rating, status, imdbId } = body;
    let status_string = status;
    let new_status;
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

    
    //check if movie entry already exists
    const movieExists = await checkMovieAndUser(user.id, imdbId);
    if (!movieExists) {
        return json({ error: true, message: "Movie note logged" }, { status: 400 });
    }


    if (status_string.toUpperCase() === "WATCHING") {
        new_status = Status.WATCHING;
    }

    else if (status_string.toUpperCase() === "COMPLETED") {
        new_status = Status.COMPLETED;
    }
    else if (status_string.toUpperCase() === "DROPPED") {
        new_status = Status.DROPPED;
    }
    else if (status_string.toUpperCase() === "PLAN TO WATCH") {
        new_status = Status.PLAN_TO_WATCH;
    } else {
        return json({ error: true, message: "Invalid status value" }, { status: 400 });
    }

    try {
        await db.log.update({
            where: {
                id: logId,
            },
            data: {
                rating,
                status: new_status,
            },
        });
        return json({ success: true, message: "Log updated successfully" });
    } catch (error) {
        console.error("Error updating log:", error);
        return json({ error: true, message: "Internal server error" }, { status: 500 });
    }
}