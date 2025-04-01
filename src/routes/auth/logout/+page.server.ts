import { isAuthed } from '$lib/stores/stores.ts';
import { redirect } from '@sveltejs/kit';


export function load({ cookies }) {
    cookies.set('authToken', '', { httpOnly: true, maxAge: 0, sameSite: 'strict', path: '/' });
    isAuthed.set(false);
    redirect(302, '/auth/login');
}