// @ts-nocheck
import type { Actions, RequestEvent, ActionFailure, Redirect } from '@sveltejs/kit';
import { fail, redirect } from '@sveltejs/kit';
import type { loginFormResponse } from '$lib/types.ts';
import { findUserByUsernameWithPassword, loginUser } from '$lib/utils/backendUtils.ts';
import bcrypt from 'bcrypt';
import { SECRET_KEY } from '$env/static/private';
import jwt from 'jsonwebtoken';
import { isAuthed } from '$lib/stores/stores.ts';




export async function load({ cookies, locals }) {
    const authToken = cookies.get('authToken');
    if (!authToken) {
        return { clearUser: true };
    }
    if (locals.authedUser) throw redirect(303,'/'); 
    return { clearUser: false };
}

export const actions = {
    login: async ({ request, cookies }: RequestEvent): Promise<loginFormResponse | ActionFailure<loginFormResponse> | Redirect> => {
        const loginFormData = await request.formData();
        const username = loginFormData.get('username') ?? '';
        const password = loginFormData.get('password') ?? '';


        let loginResponse: loginFormResponse = {
            error: false,
            message: '',
            username: username,
        };

        try {
            const userAttemptingLogin = await findUserByUsernameWithPassword(username.toString());
            if (!userAttemptingLogin) {
                loginResponse.error = true;
                loginResponse.message = 'Invalid username or password';
                return fail(400, loginResponse);
            }

            const authAttempt = await bcrypt.compare(password.toString(), userAttemptingLogin.password);
            if (!authAttempt) {
                loginResponse.error = true;
                loginResponse.message = 'Invalid username or password';
                return fail(400, loginResponse);
            }
            if (authAttempt) {
                

                const { password, ...userAttemptingLoginWithoutPassword } = userAttemptingLogin;
                const authToken = jwt.sign({ authedUser: userAttemptingLoginWithoutPassword }, SECRET_KEY,
                    { expiresIn: '24h' });
                cookies.set('authToken', authToken, { httpOnly: true, maxAge: 60 * 60 * 24, sameSite: 'strict', path: '/' });
                isAuthed.set(true);
                return redirect(302, '/');

            }

        }
        finally {
            
        }

        return loginResponse

    }
}
;null as any as Actions;