import { factories, type UID } from "@strapi/strapi"

export default factories.createCoreController(
  "api::event.event" as unknown as UID.ContentType
)
