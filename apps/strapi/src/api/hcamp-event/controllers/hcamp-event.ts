import { factories, type UID } from "@strapi/strapi"

export default factories.createCoreController(
  "api::hcamp-event.hcamp-event" as unknown as UID.ContentType
)
