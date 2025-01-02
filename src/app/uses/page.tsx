import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="16” MacBook Pro, M3 Pro, 16GB RAM (2024)">
            My first personal MacBook is this 16-inch model, and Apple's M3 chip
            is sensational. It makes all daily tasks, from design to
            development, feel effortless.
          </Tool>
          <Tool title="Apple Magic Keyboard">
            I used to work with the Logitech MX Keys, but I consciously switched
            to the Magic Keyboard. Its design is fantastic, though it lacks
            backlighting, but the build quality is simply outstanding.
          </Tool>
          <Tool title="Shure MV7+">
            I've been using the Shure MV7+ for several months now, and it's a
            fantastic microphone for recording podcasts and videos.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Cursor">
            I use Cursor Pro for web development, and it’s fantastic. With the
            help of AI features, everything becomes more practical and
            effortless.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            We started using Figma as just a design tool but now it’s become our
            virtual whiteboard for the entire company. Never would have expected
            the collaboration features to be the real hook.
          </Tool>
          <Tool title="Lucidchart">
            I use Lucidchart to create diagrams and flowcharts for my projects.
            It's a great tool for visualizing complex systems and processes.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
