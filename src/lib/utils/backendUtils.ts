import { db } from "$lib/db/database.ts";
import type { loginFormData, registerFormData } from "$lib/types.ts";
import type { Status } from "@prisma/client";
import bcrypt from "bcrypt";
import { randomUUID } from "crypto";

export const returnAllUsers = async () => {
    return await db.user.findMany();
};

export const checkUser = async (username: string) => {
    const userFound = await db.user.findUnique({
        where: { username: username },
    });
    if (userFound) {
        return true;
    }
    return false;

};

export const registerUser = async (user: registerFormData) => {
    const hashedPassword = await bcrypt.hash(user.password.toString(), 12);
    return await db.user.create({
        data: {
            username: user.username.toString(),
            password: hashedPassword,
            userAuthToken: crypto.randomUUID(),
        },
    });
}

export const loginUser = async (user: loginFormData) => {
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
}

export const deleteAllUsers = async () => {
    return await db.user.deleteMany();
}

export const findUserByUsernameWithPassword = async (username: string) => {
    return await db.user.findUnique({
        where: { username: username },
    });
}

export const logMovie = async (userId: string, movieId: string, rating: number, status: Status) => {

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
}


export const checkMovieAndUser = async (userId: string, movieId: string ) => {
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
}

export const getUserLog = async (userId: string) => {
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
}