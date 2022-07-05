import Hero from "~/components/Landing/Hero";
import FirstFeature from "~/components/Landing/FirstFeature";
import SecondFeature from "~/components/Landing/SecondFeature";
import CallToAction from "~/components/Landing/CallToAction";
import PulseColorSpan from "~/components/Atoms/PulseColorSpan";

export default function Example() {
  return (
    <main>
      {/* Hero section */}
      <Hero />

      {/* Logo Cloud */}
      {/* <Clients /> */}

      <div className="bg-gradient-to-r from-slate-700 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8 ">
          <h3 className="text-7xl lg:text-8xl text-center lg:space-y-10 tracking-tighter font-extrabold mb-4">
            <span className="text-red-700 block relative">Inversion</span>
            <span className="text-white block relative">100%</span>
            <span className="text-green-700 block relative">Mexicana</span>
          </h3>
        </div>
      </div>

      <section className="bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 py-24 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
          <article aria-labelledby="details-heading">
            <div className="flex flex-col items-center text-center">
              <h2
                id="details-heading"
                className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
              >
                Nuestras instalaciones
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                Our patented padded snack sleeve construction protects your
                favorite treats from getting smooshed during all-day adventures,
                long shifts at work, and tough travel schedules.
              </p>
            </div>

            <div className="mt-16">
              <div className="w-full flex justify-center items-center">
                <video
                  title="instalaciones"
                  className="sm:w-full md:w-1/2 aspect-video aspect-w-3 aspect-h-2 rounded-lg overflow-hidden"
                  src="/videoTest.mp4"
                  controls
                  muted
                />
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Alternating Feature Sections */}
      <FirstFeature />

      <section className="bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 py-24 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
          <article aria-labelledby="details-heading">
            <div className="flex flex-col items-center text-center">
              <h2
                id="details-heading"
                className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
              >
                Proceso
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                Our patented padded snack sleeve construction protects your
                favorite treats from getting smooshed during all-day adventures,
                long shifts at work, and tough travel schedules.
              </p>
            </div>

            <div className="mt-16">
              <div className="w-full flex justify-center items-center">
                <video
                  title="instalaciones"
                  className=" h-96 rounded-lg aspect-[3/2] overflow-hidden"
                  src="/video2.mp4"
                  autoPlay
                  muted
                />
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Gradient Feature Section */}
      <SecondFeature />

      {/* Stats section */}
      {/* <Metrics /> */}

      {/* CTA Section */}
      <CallToAction />
    </main>
  );
}
