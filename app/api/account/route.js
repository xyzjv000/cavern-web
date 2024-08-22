import { db } from "../../../utils/firebase";
import { doc, updateDoc, addDoc } from "firebase/firestore";

export async function PATCH(request) {
  try {
    // Parse the request body
    const { siteId, accountId, updateData } = await request.json();

    if (!siteId || !accountId || !updateData) {
      return new Response(
        JSON.stringify({
          error: "Site ID, Account ID, and update data are required",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Reference to the specific account document
    const accountDocRef = doc(db, `Site/${siteId}/accounts`, accountId);

    // Update the document
    await updateDoc(accountDocRef, updateData);

    return new Response(
      JSON.stringify({ message: "Account updated successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error updating account:", error);
    return new Response(JSON.stringify({ error: "Failed to update account" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(request) {
  try {
    // Parse the request body
    const { siteId, newAccountData } = await request.json();

    if (!siteId || !newAccountData) {
      return new Response(
        JSON.stringify({ error: "Site ID and new account data are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Reference to the `accounts` subcollection
    const accountsCollectionRef = collection(db, `Site/${siteId}/accounts`);

    // Add the new account document
    const docRef = await addDoc(accountsCollectionRef, newAccountData);

    return new Response(
      JSON.stringify({ message: "Account added successfully", id: docRef.id }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error adding account:", error);
    return new Response(JSON.stringify({ error: "Failed to add account" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
