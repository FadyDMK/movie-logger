import type { Actions } from "@sveltejs/kit";
import { fail } from "@sveltejs/kit";
import { checkMovieAndUser, logMovie } from "$lib/utils/backendUtils.ts";
import { Status } from "@prisma/client";

export const actions: Actions = {
    log: async ({ request, locals }) => {
        const formData = await request.formData();
        const imdbID = formData.get("imdbID")?.toString();
        const status_string = formData.get("status")?.toString()?.toUpperCase();
        const rating = parseInt(formData.get("rating")?.toString() || "0", 10);

        // Validate user authentication
        const user = locals.authedUser;
        if (!user) {
            return fail(401, { error: true, message: "Unauthorized" });
        }

        // Validate form data
        if (!imdbID || !status_string || isNaN(rating)) {
            return fail(400, { error: true, message: "Invalid form data" });
        }
        let status: Status;
        if (status_string.toUpperCase() === "WATCHING") {
            status = Status.WATCHING;
        }

        else if (status_string.toUpperCase() === "COMPLETED") {
            status = Status.COMPLETED;
        }
        else if (status_string.toUpperCase() === "DROPPED") {
            status = Status.DROPPED;
        }
        else if (status_string.toUpperCase() === "PLAN TO WATCH") {
            status = Status.PLAN_TO_WATCH;
        } else {
            return fail(400, { error: true, message: "Invalid status value" });
        }
        //check if movie entry already exists
        const movieExists = await checkMovieAndUser(user.id, imdbID);
        if (movieExists) {
            return fail(400, { error: true, message: "Movie already logged" });
        }


        // Log the movie
        try {
            const logEntry = await logMovie(user.id, imdbID, rating, status);
            if (!logEntry) {
                return fail(500, { error: true, message: "Failed to log the movie" });
            }
            return { success: true, message: "Movie logged successfully" };
        } catch (error) {
            console.error("Error logging movie:", error);
            return fail(500, { error: true, message: "Internal server error" });
        }
    },
};