import { writable, type Writable } from "svelte/store";

type UserWithoutPassword = {
  id: string;
  username: string;
  email: string;
};

export const user: Writable<UserWithoutPassword | undefined> = writable(undefined);

export const isAuthed = writable(false);
