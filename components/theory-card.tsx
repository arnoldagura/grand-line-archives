import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Avatar, AvatarFallback } from './ui/avatar'
import { CheckCircle2, Star, Trophy, Eye } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TheoryCardProps {
  id: string
  slug: string
  title: string
  summary: string
  author: string
  knowledgeLevel: 'anime-only' | 'manga-current' | 'latest-leaks'
  verified: boolean
  bountyPoints: number
  rating: number
  views?: number
  className?: string
}

export function TheoryCard({
  id,
  slug,
  title,
  summary,
  author,
  knowledgeLevel,
  verified,
  bountyPoints,
  rating,
  views = 0,
  className,
}: TheoryCardProps) {
  const getLevelBadgeVariant = () => {
    switch (knowledgeLevel) {
      case 'anime-only':
        return 'secondary'
      case 'manga-current':
        return 'default'
      case 'latest-leaks':
        return 'destructive'
    }
  }

  const getLevelLabel = () => {
    switch (knowledgeLevel) {
      case 'anime-only':
        return 'Anime Only'
      case 'manga-current':
        return 'Manga Current'
      case 'latest-leaks':
        return 'Latest Leaks'
    }
  }

  const getAuthorInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <Link href={`/theories/${slug}`} className="group">
      <Card
        className={cn(
          "h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-primary/50 cursor-pointer overflow-hidden",
          className
        )}
      >
        {/* Header with gradient overlay */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

        <CardHeader className="relative">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant={getLevelBadgeVariant()}>{getLevelLabel()}</Badge>
                {verified && (
                  <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-xs font-medium">Verified</span>
                  </div>
                )}
              </div>
              <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {title}
              </CardTitle>
              <CardDescription className="line-clamp-3">{summary}</CardDescription>
            </div>
          </div>

          {/* Author */}
          <div className="flex items-center gap-2 mt-3 pt-3 border-t">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="text-xs bg-primary/10 text-primary">
                {getAuthorInitials(author)}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm text-muted-foreground">by {author}</span>
          </div>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-3 gap-3">
            {/* Rating */}
            <div className="flex items-center gap-1.5 bg-muted/50 rounded-lg p-2">
              <Star className="w-4 h-4 fill-yellow-500 text-yellow-500 shrink-0" />
              <div className="min-w-0">
                <div className="text-sm font-semibold leading-none">{rating}</div>
                <div className="text-xs text-muted-foreground">Rating</div>
              </div>
            </div>

            {/* Bounty */}
            <div className="flex items-center gap-1.5 bg-muted/50 rounded-lg p-2">
              <Trophy className="w-4 h-4 text-primary shrink-0" />
              <div className="min-w-0">
                <div className="text-sm font-semibold leading-none">
                  {bountyPoints >= 1000
                    ? `${(bountyPoints / 1000).toFixed(1)}k`
                    : bountyPoints}
                </div>
                <div className="text-xs text-muted-foreground">Bounty</div>
              </div>
            </div>

            {/* Views */}
            <div className="flex items-center gap-1.5 bg-muted/50 rounded-lg p-2">
              <Eye className="w-4 h-4 text-muted-foreground shrink-0" />
              <div className="min-w-0">
                <div className="text-sm font-semibold leading-none">
                  {views >= 1000 ? `${(views / 1000).toFixed(1)}k` : views}
                </div>
                <div className="text-xs text-muted-foreground">Views</div>
              </div>
            </div>
          </div>

          {/* Hover indicator */}
          <div className="mt-4 flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            <span>Read theory</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
