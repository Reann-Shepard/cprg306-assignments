"use client";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  if (!user) {
    return (
      <div>
        <h1>You lack the authority to be here.</h1>
      </div>
    );
  }

  return (
    <div>
      {user?.displayName && <h1>Welcome, {user.displayName}</h1>}
      <p>Your email is {user?.email}</p>
      <button
        className="w-24 p-2 m-2 ml-16 bg-orange-500 text-white rounded hover:bg-orange-900"
        onClick={firebaseSignOut}
      >
        Sign out
      </button>
    </div>
  );
}
