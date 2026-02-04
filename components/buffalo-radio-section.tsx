import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Radio, Play } from "lucide-react"

export function BuffaloRadioSection() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-primary to-secondary p-1">
              <div className="flex h-full w-full flex-col items-center justify-center rounded-xl bg-card p-8 text-center">
                <div className="relative">
                  <div className="absolute inset-0 animate-ping rounded-full bg-primary/20" />
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Radio className="h-12 w-12" />
                  </div>
                </div>
                <h3 className="mt-6 text-2xl font-bold text-card-foreground">Buffalo Radio</h3>
                <p className="mt-2 text-muted-foreground">Arkansas Baptist College</p>
                <Button asChild className="mt-6 bg-primary hover:bg-primary/90">
                  <Link href="#">
                    <Play className="mr-2 h-4 w-4" />
                    Listen Live
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Buffalo Radio
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Tune In to Buffalo Radio
            </h2>
            <p className="mt-4 text-muted-foreground">
              Buffalo Radio of Arkansas Baptist College is an affiliate of Thornton Broadcasting, 
              Communications, and Media Group. Its purpose is to train and prepare the next generation 
              of industry leaders while providing the best in alternative programming.
            </p>
            <div className="mt-6">
              <h4 className="font-bold text-foreground">Programming Formats:</h4>
              <p className="mt-2 text-muted-foreground">
                Traditional, Urban, Contemporary Gospel, Christian Inspirational Music and Talk.
              </p>
            </div>
            <div className="mt-8">
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent">
                <Link href="#">Learn More About Buffalo Radio</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
