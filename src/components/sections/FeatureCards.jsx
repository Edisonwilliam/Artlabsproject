import AnimatedCard from '../animations/AnimatedCard'

export default function FeatureCards() {
  const features = [
    {
      icon: '/images/Frame.png',
      title: 'Secure',
      description: 'Your work and funds are always safe',
      animation: 'float',
      position: 'top-28 right-6'
    },
    {
      icon: '/images/frame2.png',
      title: 'Fair',
      description: 'Set your own rates',
      animation: 'glide',
      position: 'bottom-28 right-10'
    },
    {
      icon: '/images/frame3.png',
      title: 'Fast',
      description: 'No more weeks of waiting',
      animation: 'float',
      position: 'top-10 left-6'
    },
    {
      icon: '/images/frame4.png',
      title: 'Marketplace',
      description: 'Find the creative vision your project needs',
      animation: 'glide',
      position: 'bottom-6 left-10'
    }
  ]

  const desktopFeatures = [
    { icon: '/images/Frame.png', title: 'Secure', description: 'Your work and funds are always safe' },
    { icon: '/images/frame2.png', title: 'Fair', description: 'Set your own rates' },
    { icon: '/images/frame3.png', title: 'Fast', description: 'No more weeks of waiting' },
    { icon: '/images/frame4.png', title: 'Marketplace', description: 'Find the creative vision your project needs' }
  ]

  return (
    <>
      
      <div id="services" className="relative flex mt-10 mb-10 px-4 max-w-3xl mx-auto md:hidden dark:bg-myarte-dark">
        <div className="flex-1 h-96 bg-[#F4F4F4] dark:bg-white rounded-l-2xl" />
        <div className="flex-1 h-96 bg-black dark:bg-black rounded-r-2xl" />

        {features.map((feature, index) => (
          <AnimatedCard
            key={index}
            animationType={feature.animation}
            className={`absolute ${feature.position} bg-white dark:bg-gray-800 rounded-xl shadow-md px-4 py-3 w-60 flex items-center gap-4 cursor-pointer`}
          >
            <div>
              <img src={feature.icon} alt={`${feature.title} Icon`} className="mb-2" />
            </div>
            <div>
              <p className="font-semibold text-sm dark:text-white">{feature.title}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{feature.description}</p>
            </div>
          </AnimatedCard>
        ))}
      </div>

      
      <div className="hidden md:block px-12 lg:px-24 py-12 dark:bg-myarte-dark">
        <div className="bg-black dark:bg-gray-900 rounded-2xl p-8 max-w-2xl mx-auto">
          <div className="space-y-6">
            {desktopFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-4 text-white">
                <img src={feature.icon} alt={`${feature.title} Icon`} className="w-12 h-12" />
                <div>
                  <h3 className="font-semibold text-base">{feature.title}</h3>
                  <p className="text-sm text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
