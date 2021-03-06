import { ActionFunction, redirect } from '@remix-run/node'
import ContactForm from '~/components/Contact/ContactForm'
import Header from '~/components/Contact/Header'

export const action: ActionFunction = async ({request}) => {
    const REQUEST = await request.formData()
     console.log('REQUEST', REQUEST)

    return redirect('/')
}

export default function Contacto() {
    const offices = [
        { id: 1, city: 'Durango', address: ['4556 Calle', 'Durango, 34000'] },
    ]
    return (
        <main className="overflow-hidden">
            {/* Header */}
            <Header />

            {/* Contact section */}
            <ContactForm />

            {/* Contact grid */}
            <section aria-labelledby="offices-heading">
                <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                    <h2 id="offices-heading" className="text-3xl font-extrabold text-warm-gray-900">
                        Our offices
                    </h2>
                    <p className="mt-6 text-lg text-warm-gray-500 max-w-3xl">
                        Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus
                        dui laoreet diam sed lacus, fames.
                    </p>
                    <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                        {offices.map((office) => (
                            <div key={office.id}>
                                <h3 className="text-lg font-medium text-warm-gray-900">{office.city}</h3>
                                <p className="mt-2 text-base text-warm-gray-500">
                                    {office.address.map((line) => (
                                        <span key={line} className="block">
                                            {line}
                                        </span>
                                    ))}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
