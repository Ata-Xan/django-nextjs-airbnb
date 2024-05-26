'use server'
import {cookies} from 'next/headers'

export async function handleLogin(userId: string, access: string, refresh: string) {
    // following how long the session should last
    cookies().set('session', userId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/'
    });
    // setting the access token and refresh token
    cookies().set('session_access_token', access,{
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60, // 1 hour
        path: '/'
    });
    cookies().set('session_access_token', refresh,{
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, // 1 hour
        path: '/'
    });
}