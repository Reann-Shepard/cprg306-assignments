"use client";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    if (!user) {
        return (
            <div>
                <h1>Go away!</h1>
            </div>
        )
    }

    return (
        <div>
            {user?.displayName && <h1>Welcome, {user.displayName}</h1>}
            <p>Your email is {user?.email}</p>
            <button onClick={firebaseSignOut}>Sign out</button>
        </div>
    );
}
