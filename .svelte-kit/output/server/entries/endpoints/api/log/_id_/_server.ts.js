import { d as db, c as checkMovieAndUser } from "../../../../../chunks/backendUtils.js";
import { Status } from "@prisma/client";
import { j as json } from "../../../../../chunks/index2.js";
const DELETE = async ({ params, locals, request }) => {
  const logId = params.id;
  const user = locals.authedUser;
  if (!user) {
    return new Response("Unauthorized", { status: 401 });
  }
  const body = await request.json();
  const { userId } = body;
  if (userId !== user.id) {
    return new Response("Unauthorized", { status: 401 });
  }
  const log = await db.log.findUnique({
    where: {
      id: logId,
      userId
    }
  });
  if (!log) {
    return new Response("Log not found", { status: 404 });
  }
  if (log.userId !== user.id) {
    return json({ error: true, message: "Forbidden: Log does not belong to the user" }, { status: 403 });
  }
  try {
    await db.log.delete({
      where: {
        id: logId
      }
    });
    return json({ success: true, message: "Log deleted successfully" });
  } catch (error) {
    console.error("Error deleting log:", error);
    return json({ error: true, message: "Internal server error" }, { status: 500 });
  }
};
const PUT = async ({ params, locals, request }) => {
  const logId = params.id;
  const user = locals.authedUser;
  if (!user) {
    return new Response("Unauthorized", { status: 401 });
  }
  const body = await request.json();
  const { userId, rating, status, imdbId } = body;
  let status_string = status;
  let new_status;
  if (userId !== user.id) {
    return new Response("Unauthorized", { status: 401 });
  }
  const log = await db.log.findUnique({
    where: {
      id: logId,
      userId
    }
  });
  if (!log) {
    return new Response("Log not found", { status: 404 });
  }
  if (log.userId !== user.id) {
    return json({ error: true, message: "Forbidden: Log does not belong to the user" }, { status: 403 });
  }
  const movieExists = await checkMovieAndUser(user.id, imdbId);
  if (!movieExists) {
    return json({ error: true, message: "Movie note logged" }, { status: 400 });
  }
  if (status_string.toUpperCase() === "WATCHING") {
    new_status = Status.WATCHING;
  } else if (status_string.toUpperCase() === "COMPLETED") {
    new_status = Status.COMPLETED;
  } else if (status_string.toUpperCase() === "DROPPED") {
    new_status = Status.DROPPED;
  } else if (status_string.toUpperCase() === "PLAN TO WATCH") {
    new_status = Status.PLAN_TO_WATCH;
  } else {
    return json({ error: true, message: "Invalid status value" }, { status: 400 });
  }
  try {
    await db.log.update({
      where: {
        id: logId
      },
      data: {
        rating,
        status: new_status
      }
    });
    return json({ success: true, message: "Log updated successfully" });
  } catch (error) {
    console.error("Error updating log:", error);
    return json({ error: true, message: "Internal server error" }, { status: 500 });
  }
};
export {
  DELETE,
  PUT
};
