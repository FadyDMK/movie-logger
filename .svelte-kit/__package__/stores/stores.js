import { writable } from "svelte/store";
export const user = writable(undefined);
export const isAuthed = writable(false);
