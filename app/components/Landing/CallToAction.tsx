import { Link } from "@remix-run/react";

export default function CallToAction() {
    return (
        <div className="bg-white">
            <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-12 lg:flex lg:items-center lg:justify-around">
                <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="block">¿Necesitas de nuestros servicios?</span>
                    <span className="-mb-1 pb-1 block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                        Contactanos!
                    </span>
                </h2>
                <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
                    <Link to='/contacto' className="flex items-center justify-center bg-gradient-to-r from-primary to-indigo-900 bg-origin-border px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700">
                        Contactanos
                    </Link>
                </div>
            </div>
        </div>
    )
}