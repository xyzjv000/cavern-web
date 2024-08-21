import { db } from '../../../utils/firebase';
import { collection, query, where, getDocs, getDoc } from 'firebase/firestore';

export async function GET(request) {
    try {
        const url = new URL(request.url);
        const userId = url.searchParams.get('userId');
        
        if (!userId) {
            return new Response(JSON.stringify({ error: 'User ID is required' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Create a query to find documents where userId matches the given value
        const q = query(collection(db, 'Site'), where('userId', '==', userId)); // Changed '!=' to '==' to match userId
        const querySnapshot = await getDocs(q);
        
        if (querySnapshot.empty) {
            return new Response(JSON.stringify({ message: 'No items found' }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Fetch the data from the `accounts` subcollection for each `Site` document
        const itemsPromises = querySnapshot.docs.map(async (doc) => {
            const siteData = { id: doc.id, ...doc.data() };

            // Fetch the `accounts` subcollection
            const accountsCollectionRef = collection(db, `Site/${doc.id}/accounts`);
            const accountsSnapshot = await getDocs(accountsCollectionRef);
            const accounts = accountsSnapshot.docs.map(accDoc => ({ id: accDoc.id, ...accDoc.data() }));

            return {
                ...siteData,
                accounts,
            };
        });

        // Wait for all promises to resolve
        const items = await Promise.all(itemsPromises);

        return new Response(JSON.stringify(items), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error fetching documents:', error);
        return new Response(JSON.stringify({ error: 'Failed to fetch items' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
