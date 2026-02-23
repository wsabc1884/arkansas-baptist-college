import { Mail, Phone, User } from "lucide-react"
import { cn } from "@/lib/utils"

interface TeamMember {
  name: string
  title: string
  department?: string
  email?: string
  phone?: string
  image?: string
}

interface TeamDirectoryProps {
  members?: TeamMember[]
  columns?: 2 | 3 | 4
  comingSoon?: boolean
  comingSoonMessage?: string
}

export function TeamDirectory({
  members,
  columns = 3,
  comingSoon = false,
  comingSoonMessage,
}: TeamDirectoryProps) {
  if (comingSoon || !members || members.length === 0) {
    return (
      <div className="rounded-lg border border-border bg-card px-8 py-16 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#3d1a5c]/10 mb-6">
          <User className="h-8 w-8 text-[#3d1a5c]" aria-hidden="true" />
        </div>
        <h3 className="font-serif text-xl font-bold text-foreground">
          Directory Coming Soon
        </h3>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground leading-relaxed">
          {comingSoonMessage ||
            "We are committed to transparency and open communication. Our full directory is being updated and will be available shortly."}
        </p>
        <div className="mx-auto mt-6 h-px w-16 bg-[#3d1a5c]/20" aria-hidden="true" />
        <p className="mt-6 text-sm text-muted-foreground">
          For immediate assistance, contact us at{" "}
          <a href="tel:5014201200" className="font-medium text-primary hover:underline">
            501-420-1200
          </a>{" "}
          or{" "}
          <a href="mailto:info@arkansasbaptist.edu" className="font-medium text-primary hover:underline">
            info@arkansasbaptist.edu
          </a>
        </p>
      </div>
    )
  }

  const colClasses = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }

  return (
    <div className={cn("grid gap-6", colClasses[columns])}>
      {members.map((member) => (
        <div
          key={member.name}
          className="flex flex-col items-center rounded-lg border border-border bg-card p-6 text-center"
        >
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#3d1a5c]/10">
            <User className="h-10 w-10 text-[#3d1a5c]/60" aria-hidden="true" />
          </div>
          <h3 className="mt-4 text-base font-semibold text-foreground">{member.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{member.title}</p>
          {member.department && (
            <p className="mt-0.5 text-xs text-muted-foreground/70">{member.department}</p>
          )}
          {(member.email || member.phone) && (
            <div className="mt-4 flex items-center gap-3">
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-[#3d1a5c]/10 hover:text-[#3d1a5c]"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail className="h-4 w-4" />
                </a>
              )}
              {member.phone && (
                <a
                  href={`tel:${member.phone}`}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-[#3d1a5c]/10 hover:text-[#3d1a5c]"
                  aria-label={`Call ${member.name}`}
                >
                  <Phone className="h-4 w-4" />
                </a>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
