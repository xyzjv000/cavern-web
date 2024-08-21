import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../utils/firebase';
import cookie from 'cookie';

export async function POST(req, res) {
    try {
        const body = await req.json();

        if (req.method !== 'POST') {
            return new Response(
                JSON.stringify({ error: `Method ${req.method} Not Allowed` }),
                { status: 405, headers: { 'Content-Type': 'application/json' } }
            );
        }

        const { email, password } = body;

        if (!email || !password) {
            return new Response(
                JSON.stringify({ error: 'Email and password are required' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const { user } = userCredential;

        // Set a cookie with the user's UID
        res.setHeader('Set-Cookie', cookie.serialize('session', user.uid, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Set to true in production
            maxAge: 60 * 60 * 24 * 7, // 1 week
            path: '/',
        }));

        return new Response(
            JSON.stringify({ uid: user.uid, email: user.email }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error('Unexpected error:', error);
        return new Response(
            JSON.stringify({ error: 'Internal Server Error' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
