import { db } from "../db/database.ts";
import bcrypt from "bcrypt";
import { randomUUID } from "crypto";
export const returnAllUsers = async () => {
    return await db.user.findMany();
};
export const checkUser = async (username) => {
    const userFound = await db.user.findUnique({
        where: { username: username },
    });
    if (userFound) {
        return true;
    }
    return false;
};
export const registerUser = async (user) => {
    const hashedPassword = await bcrypt.hash(user.password.toString(), 12);
    return await db.user.create({
        data: {
            username: user.username.toString(),
            password: hashedPassword,
            userAuthToken: crypto.randomUUID(),
        },
    });
};
export const loginUser = async (user) => {
    const foundUser = await db.user.findUnique({
        where: { username: user.username.toString() },
    });
    if (!foundUser) {
        return false;
    }
    const passwordMatch = await bcrypt.compare(user.password.toString(), foundUser.password);
    if (!passwordMatch) {
        return false;
    }
    return true;
};
export const deleteAllUsers = async () => {
    return await db.user.deleteMany();
};
export const findUserByUsernameWithPassword = async (username) => {
    return await db.user.findUnique({
        where: { username: username },
    });
};
export const logMovie = async (userId, movieId, rating, status) => {
    const user = await db.user.findUnique({
        where: { id: userId },
    });
    if (!user) {
        return false;
    }
    const log = await db.log.create({
        data: {
            userId: userId,
            mediaId: movieId,
            rating: rating,
            status: status,
        },
    });
    return log;
};
export const checkMovieAndUser = async (userId, movieId) => {
    const user = await db.user.findUnique({
        where: { id: userId },
    });
    if (!user) {
        return false;
    }
    const log = await db.log.findFirst({
        where: {
            userId: userId,
            mediaId: movieId,
        },
    });
    if (!log) {
        return false;
    }
    return log;
};
export const getUserLog = async (userId) => {
    const user = await db.user.findUnique({
        where: { id: userId },
    });
    if (!user) {
        return false;
    }
    const log = await db.log.findMany({
        where: {
            userId: userId,
        },
    });
    return log;
};
