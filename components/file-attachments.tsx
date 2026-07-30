"use client"

import { useRef } from "react"
import { Paperclip, X, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

// Total combined size cap for all attachments (Brevo limits total email size).
const MAX_TOTAL_BYTES = 10 * 1024 * 1024 // 10 MB
const ACCEPTED =
  ".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg,.gif,.txt,.csv,application/pdf,image/*"

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

interface FileAttachmentsProps {
  files: File[]
  onChange: (files: File[]) => void
}

export function FileAttachments({ files, onChange }: FileAttachmentsProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  function handleFilesSelected(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(e.target.files ?? [])
    if (selected.length === 0) return

    // Merge with existing files, skipping duplicates (same name + size).
    const combined = [...files]
    for (const file of selected) {
      const isDuplicate = combined.some((f) => f.name === file.name && f.size === file.size)
      if (!isDuplicate) combined.push(file)
    }

    onChange(combined)
    // Reset the input so selecting the same file again re-triggers onChange.
    if (inputRef.current) inputRef.current.value = ""
  }

  function removeFile(index: number) {
    onChange(files.filter((_, i) => i !== index))
  }

  const totalBytes = files.reduce((sum, f) => sum + f.size, 0)
  const overLimit = totalBytes > MAX_TOTAL_BYTES

  return (
    <div>
      <input
        ref={inputRef}
        type="file"
        multiple
        accept={ACCEPTED}
        onChange={handleFilesSelected}
        className="sr-only"
        aria-hidden="true"
        tabIndex={-1}
      />
      <Button
        type="button"
        variant="outline"
        onClick={() => inputRef.current?.click()}
        className="w-full sm:w-auto"
      >
        <Paperclip className="mr-2 h-4 w-4" />
        Attach Documents
      </Button>
      <p className="mt-2 text-xs text-muted-foreground">
        Optional. Attach receipts, insurance proof, or supporting documents (PDF, Word, Excel,
        images). Up to 10 MB total.
      </p>

      {files.length > 0 && (
        <ul className="mt-3 space-y-2">
          {files.map((file, index) => (
            <li
              key={`${file.name}-${file.size}-${index}`}
              className="flex items-center justify-between gap-3 rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <span className="flex min-w-0 items-center gap-2">
                <FileText className="h-4 w-4 shrink-0 text-primary" />
                <span className="truncate text-foreground">{file.name}</span>
                <span className="shrink-0 text-xs text-muted-foreground">
                  ({formatSize(file.size)})
                </span>
              </span>
              <button
                type="button"
                onClick={() => removeFile(index)}
                className="shrink-0 rounded p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
                aria-label={`Remove ${file.name}`}
              >
                <X className="h-4 w-4" />
              </button>
            </li>
          ))}
        </ul>
      )}

      {overLimit && (
        <p className="mt-2 text-xs font-medium text-red-600">
          Attachments exceed the 10 MB total limit. Please remove some files.
        </p>
      )}
    </div>
  )
}
