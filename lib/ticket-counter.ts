import { sql } from "drizzle-orm"
import { db } from "@/lib/db"
import { ticketCounters } from "@/lib/db/schema"

/**
 * Atomically increments and returns the next ticket number for a given form
 * type. Each form type keeps its own independent counter that starts at 1.
 *
 * The whole operation is a single upsert statement, so it is safe under
 * concurrent submissions: Postgres serializes the row update and every caller
 * receives a distinct, ever-increasing value.
 */
export async function getNextTicketNumber(formType: string): Promise<number> {
  const [row] = await db
    .insert(ticketCounters)
    .values({ formType, currentValue: 1 })
    .onConflictDoUpdate({
      target: ticketCounters.formType,
      set: { currentValue: sql`${ticketCounters.currentValue} + 1` },
    })
    .returning({ value: ticketCounters.currentValue })

  return row.value
}
