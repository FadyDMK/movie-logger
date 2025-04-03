import type { loginFormData, registerFormData } from "../types.ts";
import type { Status } from "@prisma/client";
export declare const returnAllUsers: () => Promise<{
    username: string | null;
    password: string;
    id: string;
    userAuthToken: string;
    createdAt: Date;
    updatedAt: Date;
}[]>;
export declare const checkUser: (username: string) => Promise<boolean>;
export declare const registerUser: (user: registerFormData) => Promise<{
    username: string | null;
    password: string;
    id: string;
    userAuthToken: string;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const loginUser: (user: loginFormData) => Promise<boolean>;
export declare const deleteAllUsers: () => Promise<import(".prisma/client").Prisma.BatchPayload>;
export declare const findUserByUsernameWithPassword: (username: string) => Promise<{
    username: string | null;
    password: string;
    id: string;
    userAuthToken: string;
    createdAt: Date;
    updatedAt: Date;
} | null>;
export declare const logMovie: (userId: string, movieId: string, rating: number, status: Status) => Promise<false | {
    rating: number | null;
    status: import(".prisma/client").$Enums.Status;
    userId: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    mediaId: string;
}>;
export declare const checkMovieAndUser: (userId: string, movieId: string) => Promise<false | {
    rating: number | null;
    status: import(".prisma/client").$Enums.Status;
    userId: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    mediaId: string;
}>;
export declare const getUserLog: (userId: string) => Promise<false | {
    rating: number | null;
    status: import(".prisma/client").$Enums.Status;
    userId: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    mediaId: string;
}[]>;
