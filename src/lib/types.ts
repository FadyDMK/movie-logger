import type { Status } from "@prisma/client";

export interface Movie {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: Rating[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
}
interface Rating {
    Source: string;
    Value: string;
}
export interface registerFormData {
    weakPassword: boolean,
    usernameUsed: boolean,
    error: boolean,
    message: string,
    username: FormDataEntryValue,
    password: FormDataEntryValue,
    [key: string]: any

}

export interface loginFormData {
    username: FormDataEntryValue,
    password: FormDataEntryValue,
    error: boolean,
    message: string,
    [key: string]: any
}

export interface updateFormData {
    imdbID: FormDataEntryValue,
    rating: FormDataEntryValue,
    status: FormDataEntryValue, //movie, userId, date
    [key: string]: any
}

export interface logMovieData {
    movie: Movie,
    userId: string,
    date: string,
    rating: number,
    status: string,
    [key: string]: any
}



export interface User {
    _id: string,
    username: string,
    password: string,
    userAuthToken: string,
    log:[]
}


export interface loginFormResponse extends Omit<loginFormData, 'password'> {
    error:boolean,
    message: string,
}
export type UserWithoutPassword = {
    id: string;
    username: string; 
};

export type MovieLog = {
    id: string;
    userId: string;
    imdbID: string;
    rating: number;
    status: string;
}
export type MediaLog = {
    id: string;
    userId: string;
    mediaId: string;
    rating: number | null;
    status: Status;
    createdAt: Date;
    updatedAt: Date;
};