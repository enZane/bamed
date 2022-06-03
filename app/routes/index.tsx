import Hero from '~/components/Landing/Hero'
import FirstFeature from '~/components/Landing/FirstFeature'
import SecondFeature from '~/components/Landing/SecondFeature'
import CallToAction from '~/components/Landing/CallToAction'
import PulseColorSpan from '~/components/Atoms/PulseColorSpan'

export default function Example() {
  return (

    <main>
      {/* Hero section */}
      <Hero />

      {/* Logo Cloud */}
      {/* <Clients /> */}

      <div className="bg-gradient-to-r from-slate-700 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8 ">
          <h3 className='text-7xl lg:text-8xl text-center lg:space-y-10 tracking-tighter font-extrabold mb-4'>
            <span className='text-red-700 block relative'>Inversion</span>
            <span className='text-white block relative'>100%</span>
            <span className='text-green-700 block relative'>Mexicana</span>
          </h3>
        </div>
      </div>

      {/* Alternating Feature Sections */}
      <FirstFeature />

      {/* Gradient Feature Section */}
      <SecondFeature />

      {/* Stats section */}
      {/* <Metrics /> */}

      {/* CTA Section */}
      <CallToAction />
    </main>
  )
}
