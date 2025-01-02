import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoFigma from '@/images/logos/figma.svg'
import logoNextjs from '@/images/logos/nextjs.svg'

const projects = [
  {
    name: 'App Global SCM',
    description:
      'This project was created for a Brazilian fintech, featuring multiple flows that are fully designed and functional in the prototype.',
    link: {
      href: 'https://www.figma.com/proto/EfI3d9lCop91NRK4cegxU3/Luciano-Silva---Portf%C3%B3lio?page-id=8%3A1780&node-id=8-25039&viewport=309%2C1574%2C0.15&t=ztXOu2sylxUFSZYF-1&scaling=contain&content-scaling=fixed&starting-point-node-id=8%3A25039',
      label: 'Figma link',
    },
    logo: logoFigma,
  },
  {
    name: 'Landing Page Carango',
    description:
      'Page designed in Figma for a major new and used car sales portal in the northeast of Brazil.',
    link: {
      href: 'https://www.figma.com/proto/EfI3d9lCop91NRK4cegxU3/Luciano-Silva---Portf%C3%B3lio?page-id=0%3A1&node-id=1-809&viewport=369%2C1000%2C0.33&t=Hmg74TIEmQ5ZyuDy-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A809',
      label: 'Figma link',
    },
    logo: logoFigma,
  },
  {
    name: 'Design Software Automotivo ADS',
    description:
      'Development of an ad management software for car dealerships, created for the company Automotivo ADS.',
    link: {
      href: 'https://www.figma.com/proto/EfI3d9lCop91NRK4cegxU3/Luciano-Silva---Portf%C3%B3lio?page-id=32%3A423&node-id=32-11306&viewport=2575%2C-1060%2C0.32&t=oxxdpgDguyAmBfbi-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=32%3A11306&share=1',
      label: 'Figma link',
    },
    logo: logoFigma,
  },
  {
    name: 'Landing Page Global SCM',
    description:
      'Landing page designed in Figma for a Brazilian fintech, featuring a modern and clean design.',
    link: {
      href: 'https://globalscm.com.br/',
      label: 'Website link',
    },
    logo: logoNextjs,
  },
  {
    name: 'Landing WiglaPay',
    description:
      'WiglaPay is the newest payment gateway for International Pix. With WiglaPay, we aim to provide you with the best shopping experience during your international travels.',
    link: {
      href: 'https://www.wigla.com.br/',
      label: 'Website link',
    },
    logo: logoNextjs,
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Projects I had the pleasure of working on, from design to development.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Projects I had the pleasure of working on, from design to development."
      intro="Over the years, I’ve been involved in numerous projects, but these are the ones I’m particularly proud of. They are personal projects, unrelated to my current job, which I cannot openly share."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href} target="_blank">
                {project.name}
              </Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
