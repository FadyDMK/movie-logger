import { type Writable } from "svelte/store";
type UserWithoutPassword = {
    id: string;
    username: string;
    email: string;
};
export declare const user: Writable<UserWithoutPassword | undefined>;
export declare const isAuthed: Writable<boolean>;
export {};
