import { integer, pgTable, text } from "drizzle-orm/pg-core"

// One row per form type. `current_value` holds the last issued ticket number
// for that form, so each form has its own independent rising counter.
export const ticketCounters = pgTable("ticket_counters", {
  formType: text("form_type").primaryKey(),
  currentValue: integer("current_value").notNull().default(0),
})
