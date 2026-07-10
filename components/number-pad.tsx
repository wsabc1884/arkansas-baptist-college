"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Delete } from "lucide-react"

interface NumberPadProps {
  onInput: (value: string) => void
  currentValue: string
  isOpen: boolean
  onClose: () => void
}

export function NumberPad({ onInput, currentValue, isOpen, onClose }: NumberPadProps) {
  const padRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      if (padRef.current && !padRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleNumberClick = (num: string) => {
    const newValue = currentValue + num
    onInput(newValue)
  }

  const handleBackspace = () => {
    onInput(currentValue.slice(0, -1))
  }

  const handleClear = () => {
    onInput("")
  }

  return (
    <div
      ref={padRef}
      className="mt-2 flex flex-col gap-2 rounded-lg border border-input bg-card p-3 shadow-md"
    >
      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <Button
            key={num}
            type="button"
            onClick={() => handleNumberClick(num.toString())}
            variant="outline"
            className="h-10 text-lg font-semibold"
          >
            {num}
          </Button>
        ))}
      </div>
      <div className="flex gap-2">
        <Button
          type="button"
          onClick={handleClear}
          variant="outline"
          className="flex-1 text-sm"
        >
          Clear
        </Button>
        <Button
          type="button"
          onClick={() => handleNumberClick("0")}
          variant="outline"
          className="flex-1 text-lg font-semibold"
        >
          0
        </Button>
        <Button
          type="button"
          onClick={handleBackspace}
          variant="outline"
          className="flex-1"
        >
          <Delete className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
