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
