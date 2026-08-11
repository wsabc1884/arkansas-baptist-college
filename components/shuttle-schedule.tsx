"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Bus, MapPin, Info, Phone, Clock } from "lucide-react"

type Trip = {
  time: string
  from: string
  to: string
}

type Block = {
  id: string
  label: string
  hours: string
  trips: Trip[]
}

const schedule: Block[] = [
  {
    id: "morning",
    label: "Morning",
    hours: "6:30 – 10:45 AM",
    trips: [
      { time: "6:30 AM", from: "Apartments & Hotel", to: "Campus" },
      { time: "7:00 AM", from: "Campus", to: "Apartments & Hotel" },
      { time: "7:30 AM", from: "Apartments & Hotel", to: "Campus" },
      { time: "9:00 AM", from: "Apartments & Hotel", to: "Campus" },
      { time: "10:00 AM", from: "Campus", to: "Apartments & Hotel" },
      { time: "10:30 AM", from: "Apartments & Hotel", to: "Campus" },
    ],
  },
  {
    id: "afternoon",
    label: "Afternoon",
    hours: "11:45 AM – 5:00 PM",
    trips: [
      { time: "11:45 AM", from: "Campus", to: "Apartments & Hotel" },
      { time: "12:10 PM", from: "Apartments & Hotel", to: "Campus" },
      { time: "1:15 PM", from: "Campus", to: "Apartments & Hotel" },
      { time: "1:40 PM", from: "Apartments & Hotel", to: "Campus" },
      { time: "3:00 PM", from: "Campus", to: "Apartments & Hotel" },
      { time: "3:30 PM", from: "Apartments & Hotel", to: "Campus" },
      { time: "4:15 PM", from: "Campus", to: "Apartments & Hotel" },
      { time: "4:45 PM", from: "Apartments & Hotel", to: "Campus" },
    ],
  },
  {
    id: "evening",
    label: "Evening",
    hours: "7:00 – 10:40 PM",
    trips: [
      { time: "7:00 PM", from: "Campus", to: "Hotel" },
      { time: "7:20 PM", from: "Hotel", to: "Apartments" },
      { time: "8:00 PM", from: "Apartments", to: "Campus" },
      { time: "10:20 PM", from: "Campus", to: "Apartments & Hotel" },
      { time: "10:40 PM", from: "Apartments & Hotel", to: "Campus" },
    ],
  },
]

const drivers = [
  { label: "Transportation Driver #1", phone: "501-747-3396" },
  { label: "Transportation Driver #2", phone: "501-850-2313" },
]

export function ShuttleSchedule() {
  const [active, setActive] = useState("morning")

  return (
    <div className="rounded-xl border bg-card">
      {/* Header */}
      <div className="flex flex-col gap-3 border-b p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Bus className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h3 className="font-serif text-xl font-bold text-foreground">Student Shuttle Schedule</h3>
            <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              All buses pick up &amp; drop off at 18th &amp; Bishop St.
            </p>
          </div>
        </div>
      </div>

      <Tabs value={active} onValueChange={setActive} className="p-6">
        <TabsList className="grid w-full grid-cols-3">
          {schedule.map((block) => (
            <TabsTrigger key={block.id} value={block.id} className="flex flex-col py-1.5 sm:flex-row sm:gap-1.5">
              <span className="font-medium">{block.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {schedule.map((block) => (
          <TabsContent key={block.id} value={block.id} className="mt-6">
            <p className="mb-3 flex items-center gap-1.5 text-sm text-muted-foreground">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              Service hours: {block.hours}
            </p>
            <div className="overflow-hidden rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50 hover:bg-muted/50">
                    <TableHead className="w-28 font-semibold text-foreground">Time</TableHead>
                    <TableHead className="font-semibold text-foreground">Departs From</TableHead>
                    <TableHead className="font-semibold text-foreground">Heading To</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {block.trips.map((trip, i) => (
                    <TableRow key={`${block.id}-${i}`}>
                      <TableCell className="font-medium tabular-nums text-foreground">{trip.time}</TableCell>
                      <TableCell className="text-muted-foreground">{trip.from}</TableCell>
                      <TableCell>
                        <span className="inline-flex items-center gap-1.5 font-medium text-primary">
                          <span aria-hidden="true">&rarr;</span>
                          {trip.to}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Notes & Drivers */}
      <div className="grid gap-4 border-t p-6 sm:grid-cols-2">
        <div className="flex items-start gap-3 rounded-lg bg-muted/40 p-4">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
          <div className="text-sm text-muted-foreground">
            <p>
              Please arrive at the pickup location at least <span className="font-medium text-foreground">10 minutes</span> before departure.
            </p>
            <p className="mt-2">Between shuttle runs, off-campus students may use the Student Union.</p>
          </div>
        </div>
        <div className="rounded-lg bg-muted/40 p-4">
          <p className="text-sm font-semibold text-foreground">Shuttle Contacts</p>
          <ul className="mt-2 space-y-2">
            {drivers.map((driver) => (
              <li key={driver.phone} className="flex items-center gap-2 text-sm">
                <Phone className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                <span className="text-muted-foreground">{driver.label}:</span>
                <a href={`tel:${driver.phone.replace(/[^0-9]/g, "")}`} className="font-medium text-primary hover:underline">
                  {driver.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
