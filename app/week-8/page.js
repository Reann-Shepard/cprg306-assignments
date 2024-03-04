"use client";

import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    return (
        <div>
            {user?.displayName && <h1>Welcome, {user.displayName}</h1>}
            <p>Your email is {user?.email}</p>
            {user ? (
                <button onClick={firebaseSignOut}>Sign out</button>
            ) : (
                <button onClick={gitHubSignIn}>Sign in with GitHub</button>
            )}
        </div>
    );
}