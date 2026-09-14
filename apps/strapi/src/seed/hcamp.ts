import type { Core, UID } from "@strapi/strapi"

type Document = {
  readonly documentId: string
  readonly title?: string
}

type DocumentService = {
  findFirst: (params: Record<string, unknown>) => Promise<Document | null>
  create: (params: Record<string, unknown>) => Promise<Document>
  update: (params: Record<string, unknown>) => Promise<Document>
  delete: (params: Record<string, unknown>) => Promise<Document>
  publish: (params: Record<string, unknown>) => Promise<unknown>
}

const pageContent = {
  "/": [
    html(
      "<h2>Concussion education for every island community</h2><p>A concussion is a brain injury that can change how someone thinks, feels, learns, and moves. Learn the signs, report concerns early, and support a thoughtful return to activity and school.</p>"
    ),
    video(
      "Start with the basics",
      "What is a concussion?",
      "https://www.youtube.com/embed/DvxwSC2E1yc",
      "This caption-ready overview explains what a concussion is, why symptoms can vary, and why a healthcare professional should guide diagnosis and recovery."
    ),
    video(
      "HCAMP video library",
      "Concussion education from Hawaii",
      "https://player.vimeo.com/video/190179654?title=0&byline=0&portrait=0",
      "This video is embedded from the original HCAMP Vimeo player. Turn on captions in the player when available."
    ),
    html(
      '<div><a href="https://hawaiiconcussion.com/" target="_blank" rel="noreferrer"><img src="https://hawaiiconcussion.com/images/brainspace_hed.png" alt="HCAMP BrainSpace concussion education portal" /></a><p>Explore the HCAMP BrainSpace courses for students, parents, coaches, educators, and officials.</p></div>'
    ),
    html(
      '<div><a href="https://hawaiiconcussion.com/pledge" target="_blank" rel="noreferrer"><img src="https://hawaiiconcussion.com/images/social_icon.png" alt="HCAMP Pledge to Report video" /></a><p>Hear why reporting a concussion matters. <a href="https://hawaiiconcussion.com/pledge">Take the Pledge to Report.</a></p></div>'
    ),
    resources("Quick guides for families and teams", [
      resource(
        "What is a concussion? infographic",
        "A one-page introduction to concussion recognition and next steps.",
        "https://hawaiiconcussion.com/downloads/factsheets/recovery_fp.pdf",
        "all"
      ),
      resource(
        "For parents",
        "Practical guidance for monitoring symptoms and supporting recovery at home.",
        "https://hawaiiconcussion.com/downloads/factsheets/parents_fp.pdf",
        "parents"
      ),
      resource(
        "For coaches",
        "Recognition, reporting, and return-to-play reminders for coaches.",
        "https://hawaiiconcussion.com/downloads/factsheets/coaches_fp.pdf",
        "coaches"
      ),
      resource(
        "For educators",
        "Classroom support and return-to-learn guidance.",
        "https://hawaiiconcussion.com/downloads/factsheets/educators_fp.pdf",
        "educators"
      ),
    ]),
    events("Upcoming HCAMP events", [
      event(
        "Community concussion education night",
        "Bring questions about recognition, reporting, and recovery.",
        "2026-10-08T17:30:00.000Z",
        "Honolulu, Hawaii",
        "Community education"
      ),
      event(
        "HCAMP school partners workshop",
        "A practical session for school teams supporting return to learn.",
        "2026-11-14T18:00:00.000Z",
        "University of Hawaii at Manoa",
        "Training"
      ),
    ]),
    html(
      '<h2>Choose the guidance that fits your role</h2><p>Parents, coaches, student athletes, educators, and officials each have a part in creating a safer response to concussion.</p><ul><li><a href="/parents">Parents and families</a></li><li><a href="/coaches">Coaches</a></li><li><a href="/student-athletes">Student athletes</a></li><li><a href="/educators">Educators</a></li><li><a href="/officials">Officials and referees</a></li></ul>'
    ),
  ],
  parents: audiencePage(
    "Parents and families",
    "Know what to watch for, how to support recovery at home, and how to coordinate with healthcare providers and schools.",
    [
      resource(
        "High school and middle school BrainSpace",
        "Parent course",
        "https://hcamp.info/elementary",
        "parents"
      ),
      resource(
        "Youth BrainSpace",
        "Parent course for youth leagues",
        "https://hcamp.info/high",
        "parents"
      ),
      resource(
        "Parent fact sheet",
        "Downloadable one-page guide",
        "https://hawaiiconcussion.com/downloads/factsheets/parents_fp.pdf",
        "parents"
      ),
    ]
  ),
  coaches: audiencePage(
    "Coaches",
    "Build a team culture where athletes can report honestly, be removed from play when needed, and return through a supported process.",
    [
      resource(
        "High school and middle school BrainSpace",
        "Coach course",
        "https://hcamp.info/elementary",
        "coaches"
      ),
      resource(
        "Youth BrainSpace",
        "Coach course for youth leagues",
        "https://hcamp.info/high",
        "coaches"
      ),
      resource(
        "Heat illness course",
        "Training for coaches",
        "https://hcamp.info/high",
        "coaches"
      ),
      resource(
        "Coach fact sheet",
        "Downloadable one-page guide",
        "https://hawaiiconcussion.com/downloads/factsheets/coaches_fp.pdf",
        "coaches"
      ),
    ]
  ),
  "student-athletes": audiencePage(
    "Student athletes",
    "Your health and your voice matter. Learn why reporting symptoms early protects your recovery and your team.",
    [
      resource(
        "High school and middle school BrainSpace",
        "Student athlete curriculum",
        "https://hcamp.info/elementary",
        "student-athletes"
      ),
      resource(
        "Youth BrainSpace",
        "Youth athlete curriculum",
        "https://hcamp.info/high",
        "student-athletes"
      ),
      resource(
        "Pledge to Report",
        "Take the HCAMP pledge",
        "https://hawaiiconcussion.com/pledge",
        "student-athletes"
      ),
      resource(
        "Athlete fact sheet",
        "Downloadable one-page guide",
        "https://hawaiiconcussion.com/downloads/factsheets/athletes_fp.pdf",
        "student-athletes"
      ),
    ]
  ),
  educators: audiencePage(
    "Educators",
    "Support students through recovery with clear classroom adjustments, communication, and a compassionate return-to-learn plan.",
    [
      resource(
        "BrainSpace educator curriculum",
        "Training for school teams",
        "https://hcamp.info/elementary",
        "educators"
      ),
      resource(
        "Educator toolbox",
        "Return-to-learn resources",
        "https://hawaiiconcussion.com/downloads/factsheets/educators_fp.pdf",
        "educators"
      ),
      resource(
        "Social-emotional support",
        "Guidance for classroom and support staff",
        "https://hawaiiconcussion.com/info.php?module=500.5&role=6",
        "educators"
      ),
    ]
  ),
  officials: audiencePage(
    "Officials and referees",
    "Officials help make reporting possible. Learn your role in recognizing concerning signs and stopping play when safety comes first.",
    [
      resource(
        "BrainSpace officials curriculum",
        "Training for officials and referees",
        "https://hcamp.info/high",
        "officials"
      ),
      resource(
        "Concussion basics",
        "Recognition and response overview",
        "https://hawaiiconcussion.com/info.php?module=2.0",
        "officials"
      ),
    ]
  ),
  law: [
    html(
      "<h1>Hawaii concussion law</h1><p>Hawaii law requires concussion education and a careful response when an athlete is suspected of having a concussion. The process includes removing the athlete from play, evaluation by a qualified healthcare professional, and medical clearance before returning to activity.</p><h2>Return to play and return to learn</h2><p>Recovery is individual. Schools, families, healthcare providers, and teams should communicate about symptoms, classroom support, and a gradual return to physical activity.</p><p>This page is educational and does not replace medical advice.</p>"
    ),
    resources("Read the concussion law resources", [
      resource(
        "Official guidance and education",
        "Hawaii concussion law resources",
        "https://hawaiiconcussion.com/info.php?module=25.0",
        "all"
      ),
    ]),
  ],
  about: [
    html(
      "<h1>About HCAMP</h1><p>The Hawaii Concussion Awareness and Management Program supports concussion education, awareness, and practical resources across Hawaii.</p><p>HCAMP is housed at the University of Hawaii at Manoa, College of Education, Department of Kinesiology and Rehabilitation Science.</p><h2>Our work</h2><p>We connect communities with courses, research, fact sheets, stories, and tools that make it easier to recognize a concussion and support recovery.</p>"
    ),
  ],
  contact: [
    html(
      "<h1>Contact HCAMP</h1><p>Have a question about concussion education, BrainSpace courses, or resources for your school or team? Send us a message and our team will help direct your request.</p>"
    ),
    {
      __component: "forms.contact-form",
      title: "Contact us",
      description: "Tell us what information you need.",
    },
  ],
} as const

export async function seedHcampContent(strapi: Core.Strapi) {
  const pages = strapi.documents("api::page.page") as unknown as DocumentService
  const events = strapi.documents(
    "api::hcamp-event.hcamp-event" as unknown as UID.ContentType
  ) as unknown as DocumentService

  const duplicateHomepage = await pages.findFirst({
    filters: { slug: "homepage" },
    locale: "en",
  })
  if (duplicateHomepage) {
    await pages.delete({
      documentId: duplicateHomepage.documentId,
      locale: "en",
    })
  }

  for (const [slug, content] of Object.entries(pageContent)) {
    const existing = await pages.findFirst({ filters: { slug }, locale: "en" })
    const data = {
      title: pageTitle(slug),
      breadcrumbTitle: pageTitle(slug),
      slug,
      fullPath: slug === "/" ? "/" : `/${slug}`,
      content,
    }

    if (existing) {
      if (existing.title === "Homepage" || existing.title === pageTitle(slug)) {
        await pages.update({
          documentId: existing.documentId,
          data,
          locale: "en",
        })
        await pages.publish({ documentId: existing.documentId, locale: "en" })
      }
      continue
    }

    const created = await pages.create({ data, locale: "en" })
    await pages.publish({ documentId: created.documentId, locale: "en" })
  }

  for (const item of [
    {
      title: "Community concussion education night",
      slug: "community-concussion-education-night",
      summary: "Bring questions about recognition, reporting, and recovery.",
      startsAt: "2026-10-08T17:30:00.000Z",
      location: "Honolulu, Hawaii",
      eventType: "Community education",
    },
    {
      title: "HCAMP school partners workshop",
      slug: "hcamp-school-partners-workshop",
      summary:
        "A practical session for school teams supporting return to learn.",
      startsAt: "2026-11-14T18:00:00.000Z",
      location: "University of Hawaii at Manoa",
      eventType: "Training",
    },
  ]) {
    const existing = await events.findFirst({
      filters: { slug: item.slug },
      status: "published",
    })
    if (!existing) {
      const created = await events.create({ data: item })
      await events.publish({ documentId: created.documentId })
    }
  }

  const navbar = strapi.documents(
    "api::navbar.navbar" as unknown as UID.ContentType
  ) as unknown as DocumentService
  const currentNavbar = await navbar.findFirst({ locale: "en" })
  if (currentNavbar) {
    await navbar.update({
      documentId: currentNavbar.documentId,
      locale: "en",
      data: {
        navbarItems: [
          navbarLink("Parents", "/parents"),
          navbarLink("Coaches", "/coaches"),
          navbarLink("Student athletes", "/student-athletes"),
          navbarLink("Educators", "/educators"),
          navbarLink("Officials", "/officials"),
          navbarLink("Resources and law", "/law"),
          navbarLink("About HCAMP", "/about"),
          navbarLink("Contact", "/contact"),
        ],
      },
    })
  }
}

function pageTitle(slug: string) {
  if (slug === "/")
    return "HCAMP | Hawaii Concussion Awareness and Management Program"

  return slug
    .replaceAll("-", " ")
    .replaceAll(/\b\w/g, (letter) => letter.toUpperCase())
}

function html(content: string) {
  return { __component: "utilities.ck-editor-content", content }
}

function video(
  eyebrow: string,
  title: string,
  videoUrl: string,
  transcript: string
) {
  return {
    __component: "sections.video-callout",
    eyebrow,
    title,
    videoUrl,
    transcript,
  }
}

function resources(
  title: string,
  items: readonly ReturnType<typeof resource>[]
) {
  return { __component: "sections.resource-library", title, resources: items }
}

function events(title: string, items: readonly ReturnType<typeof event>[]) {
  return { __component: "sections.events-list", title, events: items }
}

function resource(
  title: string,
  description: string,
  href: string,
  audience: string
) {
  return { title, description, href, audience, download: href.endsWith(".pdf") }
}

function event(
  title: string,
  summary: string,
  startsAt: string,
  location: string,
  eventType: string
) {
  return { title, summary, startsAt, location, eventType }
}

function audiencePage(
  title: string,
  description: string,
  items: readonly ReturnType<typeof resource>[]
) {
  return [
    html(`<h1>${title}</h1><p>${description}</p>`),
    resources(`${title} resources`, items),
  ]
}

function navbarLink(label: string, href: string) {
  return {
    isCategoryLink: true,
    link: { type: "external", label, newTab: false, href },
    categoryItems: [],
  }
}
