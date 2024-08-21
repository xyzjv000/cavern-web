// pages/api/register.js
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../utils/firebase'; // Adjust the import as needed

// Initialize Firebase
initializeApp(firebaseConfig);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, password } = req.body;
        const auth = getAuth();
        
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            res.status(200).json({ message: 'User registered successfully' });
        } catch (error) {
            console.error('Error registering user:', error);
            res.status(400).json({ error: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
