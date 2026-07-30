"use client"

import { useMemo, useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// Shared list of campus buildings/spaces used across the facility, key, and
// work order request forms. "Other" reveals a manual text input.
export const FACILITY_SPACES = [
  "Auditorium",
  "Old Main Building",
  "Gymnasium",
  "Bistro",
  "President's Dining Hall",
  "Classroom",
  "Conference Room",
  "Outdoor Space",
]

const OTHER = "Other"

interface BuildingSelectorProps {
  /** The form field name written to the hidden input (e.g. "building" or "facilitySpace"). */
  name: string
  /** Label text shown above the checkbox group. */
  label: string
}

export function BuildingSelector({ name, label }: BuildingSelectorProps) {
  const [checked, setChecked] = useState<Record<string, boolean>>({})
  const [otherChecked, setOtherChecked] = useState(false)
  const [otherText, setOtherText] = useState("")

  // Combine the selected buildings (plus any "Other" text) into a single
  // comma-separated string. This is what gets carried into the FormData and
  // rendered on the final PDF, so no server changes are needed.
  const value = useMemo(() => {
    const selected = FACILITY_SPACES.filter((b) => checked[b])
    if (otherChecked && otherText.trim()) {
      selected.push(otherText.trim())
    }
    return selected.join(", ")
  }, [checked, otherChecked, otherText])

  const toggle = (building: string) => {
    setChecked((prev) => ({ ...prev, [building]: !prev[building] }))
  }

  return (
    <div>
      <Label>{label}</Label>
      {/* Hidden input carries the combined value through the existing FormData flow */}
      <input type="hidden" name={name} value={value} />
      <div className="mt-2 grid gap-3 sm:grid-cols-2">
        {FACILITY_SPACES.map((building) => (
          <label
            key={building}
            className="flex items-center gap-3 rounded-md border border-input bg-background px-3 py-2 text-sm"
          >
            <input
              type="checkbox"
              checked={!!checked[building]}
              onChange={() => toggle(building)}
              className="h-4 w-4 rounded border-input"
            />
            {building}
          </label>
        ))}
        <label className="flex items-center gap-3 rounded-md border border-input bg-background px-3 py-2 text-sm">
          <input
            type="checkbox"
            checked={otherChecked}
            onChange={() => setOtherChecked((v) => !v)}
            className="h-4 w-4 rounded border-input"
          />
          {OTHER}
        </label>
      </div>
      {otherChecked && (
        <div className="mt-3">
          <Label htmlFor={`${name}-other`}>Please specify building name</Label>
          <Input
            id={`${name}-other`}
            value={otherText}
            onChange={(e) => setOtherText(e.target.value)}
            placeholder="Enter building name"
            className="mt-1"
          />
        </div>
      )}
    </div>
  )
}
