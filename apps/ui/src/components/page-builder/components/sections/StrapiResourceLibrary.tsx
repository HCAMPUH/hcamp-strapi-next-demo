import "server-only"

import CkEditorRenderer from "@/components/elementary/ck-editor"
import { Container } from "@/components/elementary/Container"
import type { PageBuilderComponentProps } from "@/types/general"

type Resource = {
  readonly id: number
  readonly title: string
  readonly description?: string | null
  readonly href: string
  readonly audience?: string | null
  readonly download?: boolean | null
}

type ResourceLibrary = {
  readonly title: string
  readonly description?: string | null
  readonly resources?: readonly Resource[] | null
}

export function StrapiResourceLibrary({
  component,
}: PageBuilderComponentProps & { component: ResourceLibrary }) {
  return (
    <section className="py-16">
      <Container>
        <div className="mb-10 max-w-2xl">
          <h2 className="text-hcamp-deep text-3xl font-semibold tracking-tight">
            {component.title}
          </h2>
          {component.description ? (
            <CkEditorRenderer
              htmlContent={component.description}
              className="mt-4 text-slate-600"
            />
          ) : null}
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {component.resources?.map((resource) => (
            <a
              key={resource.id}
              href={resource.href}
              target="_blank"
              rel="noreferrer"
              className="group border-hcamp-lagoon/15 border-l-hcamp-coral hover:bg-hcamp-sea/50 focus-visible:outline-hcamp-lagoon flex min-h-32 flex-col justify-between border border-l-4 bg-white p-5 shadow-[0_5px_18px_rgba(7,59,76,0.06)] transition-[transform,background-color] hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              <span>
                <span className="text-lg font-semibold text-slate-950 group-hover:text-teal-800">
                  {resource.title}
                </span>
                {resource.description ? (
                  <span className="text-hcamp-ink/75 mt-2 block text-sm leading-6">
                    {resource.description}
                  </span>
                ) : null}
              </span>
              <span className="text-hcamp-lagoon mt-5 text-xs font-semibold tracking-[0.14em] uppercase">
                {resource.download ? "Download resource" : "Open resource"}
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}

StrapiResourceLibrary.displayName = "StrapiResourceLibrary"

export default StrapiResourceLibrary
