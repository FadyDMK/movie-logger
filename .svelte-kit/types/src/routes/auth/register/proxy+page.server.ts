// @ts-nocheck
import type { Actions, RequestEvent, ActionFailure, Redirect } from '@sveltejs/kit';
import { fail, redirect } from '@sveltejs/kit';
import type { registerFormData } from '$lib/types.ts';
import { checkUser, registerUser } from '$lib/utils/backendUtils.ts';
import { checkPassword } from '$lib/utils/checkPass.ts';



export async function load({locals}){
    if (locals.authedUser) throw redirect(303,'/');
        return {};
}


export const actions = {
    signup: async ({request}: RequestEvent): Promise<registerFormData|ActionFailure<registerFormData> | Redirect> => {
        const signupFormData = await request.formData();
        const username = signupFormData.get('username')??'';
        const password = signupFormData.get('password')??'';

        let SignUpResponse:registerFormData = {
            usernameUsed: false,
            weakPassword: false,
            error: false,
            success: false,
            username: username,
            password: password,
            message: ''
        };

        const isPassStrong = checkPassword(password.toString());

        if (!isPassStrong) {
            SignUpResponse.weakPassword = true;
            SignUpResponse.error = true;
            SignUpResponse.message = 'Password is weak!';
            return fail(400,SignUpResponse);
        }


        const userExists = await checkUser(username.toString());

        if (userExists) {
            SignUpResponse.usernameUsed = true;
            SignUpResponse.error = true;
            SignUpResponse.message = 'Username already exists!';
            return fail(400,SignUpResponse);
        }

        const registerSuccess = await registerUser(SignUpResponse)
        if (!registerSuccess) {
            SignUpResponse.error = true;
            SignUpResponse.message = 'Error registering user';
            return fail(503,SignUpResponse);
        }

        redirect(303,'/auth/login');
    }
};;null as any as Actions;