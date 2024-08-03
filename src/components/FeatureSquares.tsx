import features from '@/content/secondary-features-content'
import Image, { type ImageProps } from 'next/image'
import clsx from 'clsx'

interface Feature {
    name: React.ReactNode
    summary: string
    description: string
    image: ImageProps['src']
    icon: React.ComponentType
}

export function FeatureSquares() {
    // return features.forEach(feature => (
    //     <div key={feature.summary}>
    //         <SingleFeature feature={feature} />
    //     </div>
    // )
    return <section className="flex flex-wrap">
        {features.map((feature, index) => (
            <SingleFeature feature={feature} index={index} key={feature.summary} />
        ))}
    </section>
}

function SingleFeature({ feature, index, ...props }: React.ComponentPropsWithoutRef<'div'> & { feature: Feature, index: number }) {
    return <>
        <div className="w-full md:w-1/2">
            <Image src={feature.image} alt={feature.summary} />
        </div>
        <div className="w-full md:w-1/2 px-4 my-8">
            <Feature feature={feature} isActive />
        </div>
    </>
}

function Feature({
    feature,
    isActive,
    className,
    ...props
  }: React.ComponentPropsWithoutRef<'div'> & {
    feature: Feature
    isActive: boolean
  }) {
    return (
      <div
        className={clsx(className, !isActive && 'opacity-75 hover:opacity-100')}
        {...props}
      >
        <div
          className={clsx(
            'w-9 rounded-lg',
            isActive ? 'bg-blue-600' : 'bg-slate-500',
          )}
        >
          <svg aria-hidden="true" className="h-9 w-9" fill="none">
            <feature.icon />
          </svg>
        </div>
        <h3
          className={clsx(
            'mt-6 text-sm font-medium',
            isActive ? 'text-blue-600' : 'text-slate-600',
          )}
        >
          {feature.name}
        </h3>
        <p className="mt-2 font-display text-xl text-slate-900">
          {feature.summary}
        </p>
        <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
      </div>
    )
  }