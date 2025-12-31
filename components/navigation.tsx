import Link from 'next/link'
import { Anchor, BookOpen, Trophy, Users } from 'lucide-react'
import { Button } from './ui/button'

export function Navigation() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Anchor className="w-6 h-6 text-primary" />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Grand Line Archives
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href="/theories"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              Theories
            </Link>
            <Link
              href="/bounty"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Trophy className="w-4 h-4" />
              Bounty Board
            </Link>
            <Link
              href="/community"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Users className="w-4 h-4" />
              Community
            </Link>
            <Button size="sm">Join the Crew</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
