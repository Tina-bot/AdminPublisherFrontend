import { Link } from "react-router-dom";

export default function Header() {
    return (

        <header className="bg-gray-50 w-full">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="text-center sm:text-left">
                        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                            Welcome Back Admin!
                        </h1>

                        <p className="mt-1.5 text-sm text-gray-500">
                            Let's publish a new game! 👾
                        </p>
                    </div>

                    <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">

                        <Link to="/add-videogame">
                            <button
                                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring text-sm font-medium w-full"
                                type="button"
                            >
                                Create New
                            </button>
                        </Link>

                        <button
                            className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                            type="button"
                        >
                            See Stats
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}