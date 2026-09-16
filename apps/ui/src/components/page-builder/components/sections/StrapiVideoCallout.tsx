import "server-only"

import CkEditorRenderer from "@/components/elementary/ck-editor"
import { Container } from "@/components/elementary/Container"
import type { PageBuilderComponentProps } from "@/types/general"

type VideoCallout = {
  readonly eyebrow?: string | null
  readonly title: string
  readonly description?: string | null
  readonly videoUrl: string
  readonly transcript?: string | null
}

export function StrapiVideoCallout({
  component,
}: PageBuilderComponentProps & { component: VideoCallout }) {
  const videoUrl = toEmbedUrl(component.videoUrl)

  return (
    <section className="bg-hcamp-deep py-20 text-white">
      <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          {component.eyebrow ? (
            <p className="text-hcamp-sun text-xs font-semibold tracking-[0.18em] uppercase">
              {component.eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {component.title}
          </h2>
          {component.description ? (
            <CkEditorRenderer
              htmlContent={component.description}
              className="text-hcamp-sea/85 mt-5"
            />
          ) : null}
          {component.transcript ? (
            <details className="border-hcamp-sea/25 mt-8 border-t pt-4">
              <summary className="focus-visible:outline-hcamp-sun cursor-pointer font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-4">
                Read the transcript
              </summary>
              <CkEditorRenderer
                htmlContent={component.transcript}
                className="text-hcamp-sea/85 mt-4 text-sm leading-6"
              />
            </details>
          ) : null}
        </div>
        <div className="border-hcamp-sun/70 bg-hcamp-ink aspect-video overflow-hidden border-4 shadow-[0_18px_50px_rgba(0,0,0,0.28)]">
          <iframe
            className="size-full"
            src={videoUrl}
            title={component.title}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Container>
    </section>
  )
}

function toEmbedUrl(value: string) {
  try {
    const url = new URL(value)

    if (url.hostname === "youtu.be") {
      return `https://www.youtube.com/embed/${url.pathname.slice(1)}`
    }

    if (url.hostname.endsWith("youtube.com") && url.pathname === "/watch") {
      const videoId = url.searchParams.get("v")

      return videoId ? `https://www.youtube.com/embed/${videoId}` : value
    }

    if (
      url.hostname.endsWith("vimeo.com") &&
      !url.hostname.startsWith("player.")
    ) {
      const pathSegments = url.pathname.split("/").filter(Boolean)
      const videoId = pathSegments.at(-1)

      return videoId ? `https://player.vimeo.com/video/${videoId}` : value
    }
  } catch {
    return value
  }

  return value
}

StrapiVideoCallout.displayName = "StrapiVideoCallout"

export default StrapiVideoCallout
