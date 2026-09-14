import "server-only"

import CkEditorRenderer from "@/components/elementary/ck-editor"
import { Container } from "@/components/elementary/Container"
import type { PageBuilderComponentProps } from "@/types/general"

type EventItem = {
  readonly id: number
  readonly title: string
  readonly summary?: string | null
  readonly startsAt: string
  readonly location?: string | null
  readonly registrationUrl?: string | null
  readonly eventType?: string | null
}

type EventsList = {
  readonly title: string
  readonly description?: string | null
  readonly events?: readonly EventItem[] | null
}

export function StrapiEventsList({
  component,
}: PageBuilderComponentProps & { component: EventsList }) {
  return (
    <section className="border-hcamp-lagoon/15 bg-hcamp-sea/45 border-y py-20">
      <Container>
        <div className="mb-10 max-w-2xl">
          <h2 className="text-hcamp-deep text-3xl font-semibold tracking-tight">
            {component.title}
          </h2>
          {component.description ? (
            <CkEditorRenderer
              htmlContent={component.description}
              className="text-hcamp-ink/75 mt-4"
            />
          ) : null}
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {component.events?.map((event) => (
            <article
              key={event.id}
              className="border-hcamp-lagoon/20 bg-hcamp-mist flex min-h-56 flex-col border p-6 shadow-[0_8px_24px_rgba(7,59,76,0.08)] transition-transform hover:-translate-y-1"
            >
              <p className="text-hcamp-lagoon text-xs font-semibold tracking-[0.16em] uppercase">
                {event.eventType || "HCAMP event"}
              </p>
              <h3 className="text-hcamp-deep mt-3 text-xl font-semibold">
                {event.title}
              </h3>
              <p className="text-hcamp-lagoon mt-3 text-sm">
                {formatEventDate(event.startsAt)}
                {event.location ? ` · ${event.location}` : ""}
              </p>
              {event.summary ? (
                <p className="text-hcamp-ink/75 mt-3 flex-1 text-sm leading-6">
                  {event.summary}
                </p>
              ) : null}
              {event.registrationUrl ? (
                <a
                  className="border-hcamp-coral text-hcamp-deep hover:text-hcamp-lagoon focus-visible:outline-hcamp-lagoon mt-5 inline-flex w-fit items-center border-b-2 pb-1 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-4"
                  href={event.registrationUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View event details
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

function formatEventDate(value: string) {
  const dtime = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Pacific/Honolulu",
  })

  return dtime.format(new Date(value))
}

StrapiEventsList.displayName = "StrapiEventsList"

export default StrapiEventsList
