import { factories, type UID } from "@strapi/strapi"

export default factories.createCoreService(
  "api::event.event" as unknown as UID.ContentType
)
