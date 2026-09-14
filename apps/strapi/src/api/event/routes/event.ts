import { factories, type UID } from "@strapi/strapi"

export default factories.createCoreRouter(
  "api::event.event" as unknown as UID.ContentType
)
