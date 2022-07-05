import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import DirectoryItem from "~/components/DirectoryItem"
import { getAllPeople } from "./Domain/directory.server"

export async function loader() {
    const people = await getAllPeople()

    console.log("people", people)

    return json({
        people,
    })
}

export default function Example() {

    const { people } = useLoaderData()

    return (
        <div className="bg-gray-900 -mt-12">
            <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                <div className="space-y-12">
                    <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                        <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">Directorio.</h2>
                        <p className="text-xl text-gray-300">
                            Nuestros colaboradores están disponibles para ayudarte.
                        </p>
                    </div>
                    <ul role="list" className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
                        {people.map((person) => (
                            <li key={person.name} className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
                                <DirectoryItem person={person} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
