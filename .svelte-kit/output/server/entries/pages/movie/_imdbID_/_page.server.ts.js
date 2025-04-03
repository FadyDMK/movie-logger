import { f as fail } from "../../../../chunks/index2.js";
import { c as checkMovieAndUser, l as logMovie } from "../../../../chunks/backendUtils.js";
import { Status } from "@prisma/client";
const actions = {
  log: async ({ request, locals }) => {
    const formData = await request.formData();
    const imdbID = formData.get("imdbID")?.toString();
    const status_string = formData.get("status")?.toString()?.toUpperCase();
    const rating = parseInt(formData.get("rating")?.toString() || "0", 10);
    const user = locals.authedUser;
    if (!user) {
      return fail(401, { error: true, message: "Unauthorized" });
    }
    if (!imdbID || !status_string || isNaN(rating)) {
      return fail(400, { error: true, message: "Invalid form data" });
    }
    let status;
    if (status_string.toUpperCase() === "WATCHING") {
      status = Status.WATCHING;
    } else if (status_string.toUpperCase() === "COMPLETED") {
      status = Status.COMPLETED;
    } else if (status_string.toUpperCase() === "DROPPED") {
      status = Status.DROPPED;
    } else if (status_string.toUpperCase() === "PLAN TO WATCH") {
      status = Status.PLAN_TO_WATCH;
    } else {
      return fail(400, { error: true, message: "Invalid status value" });
    }
    const movieExists = await checkMovieAndUser(user.id, imdbID);
    if (movieExists) {
      return fail(400, { error: true, message: "Movie already logged" });
    }
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
  }
};
export {
  actions
};
