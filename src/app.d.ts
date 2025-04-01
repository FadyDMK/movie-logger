// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		interface Error {
			code: number,
			message: string,
		}

		interface Locals {
			user?: {
				name: string;
				role?: string; // If you want to include role information
			};
			authedUser: UserWithoutPassword | undefined;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
