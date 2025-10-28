import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-blue-100">
      <div className="text-center p-10 bg-white rounded-2xl shadow-2xl max-w-md w-full">
        <h1 className="text-3xl font-extrabold text-indigo-700 mb-3">
          XOrithm — Server Status
        </h1>
        <p className="text-gray-600 mb-6">
          Welcome to the server status dashboard.  
          Monitor and manage your servers easily.
        </p>

        <button
          onClick={() => router.push("/login")}
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-lg transition-all duration-300"
        >
          Go to Login
        </button>
      </div>
    </main>
  );
}
