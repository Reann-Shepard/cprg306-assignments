"use client";

import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Once user as logged in, redirect to the shopping list page
  if (user) {
    location.href = "/week-8/shopping-list";
  }

  return (
    <div>
      {user?.displayName && <h1>Welcome, {user.displayName}</h1>}
      {user?.email && <p>Your email is {user.email}</p>}
      {user ? (
        <div>
          <p>Redirecting you to your shopping list...</p>
          <button
            className="w-24 p-2 m-2 ml-16 bg-orange-500 text-white rounded hover:bg-orange-900"
            onClick={firebaseSignOut}
          >
            Sign out
          </button>
        </div>
      ) : (
        <div>
          <p>Welcome, please sign in with one of the following:</p>
          <button
            className="w-24 p-2 m-2 ml-16 bg-orange-500 text-white rounded hover:bg-orange-900"
            onClick={gitHubSignIn}
          >
            GitHub
          </button>
        </div>
      )}
    </div>
  );
}
