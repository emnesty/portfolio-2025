'use client'

import * as Headless from '@headlessui/react'
import { clsx } from 'clsx'
import {
  MotionValue,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  type HTMLMotionProps,
} from 'framer-motion'
import { Ref, useCallback, useLayoutEffect, useRef, useState } from 'react'
import useMeasure, { type RectReadOnly } from 'react-use-measure'
import { Container } from './Container'

const testimonials = [
  {
    name: 'Caio Badu',
    title: 'Creative Leadership | TEDx Speaker',
    quote:
      'Luciano`s disciplined curiosity and growth in design and technology make him a standout design technologist with a refined perspective on customer experience.',
  },
  {
    name: 'Agnaldo Lourenço',
    title: 'IT Manager - Operations in Ambev Tech',
    quote:
      'Luciano`s stood out for his professionalism, dedication, and ownership mindset, ensuring great results for the team.',
  },
  {
    name: 'Alexandre Álvaro',
    title: 'Software Architect - Ambev Tech',
    quote:
      'Responsible, determined, intelligent, and talented—Luciano is the complete package.',
  },
  {
    name: 'Áurea André',
    title: 'Design Ops - Itaú',
    quote:
      'Luciano`s is highly efficient, with a critical eye and admirable UI and usability techniques.',
  },
  {
    name: 'Thais Maurin',
    title: 'UI/UX Designer - AB InBev',
    quote:
      'Luciano`s vast experience connects points, questions effectively, and delivers value from strategy to prototyping.',
  },
  {
    name: 'Alfredo E. Viana',
    title: 'Senior Product Designer',
    quote:
      'Luciano`s dedication, creativity, and ability to transform challenges into practical solutions make him a valuable asset to any project.',
  },
]

function TestimonialCard({
  name,
  title,
  children,
  bounds,
  scrollX,
  ...props
}: {
  name: string
  title: string
  children: React.ReactNode
  bounds: RectReadOnly
  scrollX: MotionValue<number>
} & HTMLMotionProps<'div'>) {
  let ref = useRef<HTMLDivElement | null>(null)

  let computeOpacity = useCallback(() => {
    let element = ref.current
    if (!element || bounds.width === 0) return 1

    let rect = element.getBoundingClientRect()

    if (rect.left < bounds.left) {
      let diff = bounds.left - rect.left
      let percent = diff / rect.width
      return Math.max(0.5, 1 - percent)
    } else if (rect.right > bounds.right) {
      let diff = rect.right - bounds.right
      let percent = diff / rect.width
      return Math.max(0.5, 1 - percent)
    } else {
      return 1
    }
  }, [ref, bounds.width, bounds.left, bounds.right])

  let opacity = useSpring(computeOpacity(), {
    stiffness: 154,
    damping: 23,
  })

  useLayoutEffect(() => {
    opacity.set(computeOpacity())
  }, [computeOpacity, opacity])

  useMotionValueEvent(scrollX, 'change', () => {
    opacity.set(computeOpacity())
  })

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      {...props}
      className="relative flex aspect-[3/2] w-72 shrink-0 snap-start scroll-ml-[var(--scroll-padding)] flex-col justify-end overflow-hidden rounded-2xl border border-zinc-100 p-6 shadow-sm sm:aspect-[3/2] sm:w-96 dark:border-zinc-700/40"
    >
      <figure className="relative flex h-full flex-col justify-between">
        <blockquote>
          <p className="text-sm tracking-tight text-zinc-600 sm:text-base dark:text-zinc-100">
            {children}
          </p>
        </blockquote>
        <figcaption className="mt-4 border-t border-zinc-100 pt-4 sm:mt-6 sm:pt-6 dark:border-zinc-700">
          <p className="text-xs font-semibold tracking-tight text-zinc-800 sm:text-base dark:text-zinc-100">
            {name}
          </p>
          <p className="text-xs font-medium sm:text-sm/6">
            <span className="text-sm font-semibold tracking-tight text-zinc-800 sm:text-base dark:text-zinc-100">
              {title}
            </span>
          </p>
        </figcaption>
      </figure>
    </motion.div>
  )
}

export function Testimonials() {
  let scrollRef = useRef<HTMLDivElement | null>(null)
  let { scrollX } = useScroll({ container: scrollRef })
  let [setReferenceWindowRef, bounds] = useMeasure()
  let [activeIndex, setActiveIndex] = useState(0)

  useMotionValueEvent(scrollX, 'change', (x) => {
    setActiveIndex(Math.floor(x / scrollRef.current!.children[0].clientWidth))
  })

  function scrollTo(index: number) {
    let gap = 32
    let width = (scrollRef.current!.children[0] as HTMLElement).offsetWidth
    scrollRef.current!.scrollTo({ left: (width + gap) * index })
  }

  return (
    <Container>
      <div className="py-16">
        <div
          ref={scrollRef}
          className={clsx([
            'flex gap-4 py-2 sm:gap-8',
            '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
            'snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth',
          ])}
        >
          {testimonials.map(({ name, title, quote }, testimonialIndex) => (
            <TestimonialCard
              key={testimonialIndex}
              name={name}
              title={title}
              bounds={bounds}
              scrollX={scrollX}
              onClick={() => scrollTo(testimonialIndex)}
            >
              {quote}
            </TestimonialCard>
          ))}
          <div className="w-[42rem] shrink-0 sm:w-[54rem]" />
        </div>
        <div className="mt-8 flex justify-center">
          <div className="flex gap-2">
            {testimonials.map(({ name }, testimonialIndex) => (
              <Headless.Button
                key={testimonialIndex}
                onClick={() => scrollTo(testimonialIndex)}
                className="relative"
                aria-label={`Scroll to testimonial from ${name}`}
              >
                <motion.div
                  animate={{
                    width: activeIndex === testimonialIndex ? '20px' : '10px',
                    borderRadius: '9999px',
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                  }}
                  className={clsx(
                    'h-2.5 bg-zinc-300 transition-colors',
                    activeIndex === testimonialIndex
                      ? 'bg-gray-400'
                      : 'hover:bg-gray-400',
                    'forced-colors:data-[active]:bg-[Highlight] forced-colors:data-[focus]:outline-offset-4',
                  )}
                />
              </Headless.Button>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}
