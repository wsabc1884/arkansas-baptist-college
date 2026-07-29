"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// First / Last name inputs shared by the facilities request forms. Digits are
// stripped on entry so numbers can never be typed into a name field.
export function RequestorNameFields() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const stripDigits = (value: string) => value.replace(/[0-9]/g, "")

  return (
    <>
      <div>
        <Label htmlFor="firstName">First Name</Label>
        <Input
          id="firstName"
          name="firstName"
          required
          inputMode="text"
          value={firstName}
          onChange={(e) => setFirstName(stripDigits(e.target.value))}
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="lastName">Last Name</Label>
        <Input
          id="lastName"
          name="lastName"
          required
          inputMode="text"
          value={lastName}
          onChange={(e) => setLastName(stripDigits(e.target.value))}
          className="mt-1"
        />
      </div>
    </>
  )
}
