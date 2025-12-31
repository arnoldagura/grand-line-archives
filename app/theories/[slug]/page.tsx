'use client'

import { useState } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { EvidenceChain } from '@/components/evidence-tag'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import {
  Calendar,
  User,
  Star,
  CheckCircle2,
  Trophy,
  ThumbsUp,
  ThumbsDown,
  Heart,
  Share2,
  MessageSquare,
  BookmarkPlus,
  Eye,
  ArrowLeft,
  Flag,
  Clock
} from 'lucide-react'
import { cn } from '@/lib/utils'

// Mock data - will be replaced by Velite
const theories = [
  {
    slug: 'one-piece-treasure-theory',
    title: 'The True Nature of the One Piece',
    author: 'GrandLineExplorer',
    authorBounty: 15420,
    knowledgeLevel: 'manga-current' as const,
    verified: true,
    bountyPoints: 1250,
    rating: 4.8,
    upvotes: 342,
    downvotes: 18,
    views: 8542,
    favorites: 156,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-20'),
    readTime: '8 min read',
    evidenceTags: [
      { chapter: 967 },
      { chapter: 968 },
      { chapter: 1000 },
      { chapter: 1060 },
      { sbs: 'Volume 97' },
      { sbs: 'Volume 100' },
    ],
    content: `# The True Nature of the One Piece

## Introduction

The One Piece has been the greatest mystery in the Grand Line for over 25 years. After analyzing numerous chapters and SBS entries, I believe the treasure is not gold or jewels, but something far more valuable to the world.

## Evidence from Roger's Journey

In **Chapter 967**, we see Gol D. Roger and his crew finally reaching Laugh Tale. Their reaction is telling - they laugh. This isn't the reaction you'd expect from finding material wealth.

> "We were too early" - Kozuki Oden

This quote from **Chapter 968** suggests the One Piece is tied to a specific time or event, not a static treasure.

## The Void Century Connection

The Rio Poneglyph contains the true history of the world. The One Piece likely:

1. **Reveals the truth** about the Void Century
2. **Exposes the World Government's lies**
3. **Provides the means** to unite the world

## The Will of D

Those who carry the "Will of D" are said to be the "Natural Enemies of the Gods" (World Nobles). The One Piece may be the key to fulfilling this inherited will.

Evidence from **Chapter 1060**:
- Luffy's dream revealed to his crew
- Their shocked but supportive reactions
- Parallels to Roger's same dream

## Conclusion

The One Piece represents the culmination of **freedom**, **truth**, and **dreams** - the core themes of One Piece itself. This would explain why Roger laughed - he discovered something amazing but arrived too early to act on it.`,
    tags: ['One Piece', 'Laugh Tale', 'Joy Boy', 'Void Century'],
  },
  {
    slug: 'blackbeard-cerberus-theory',
    title: 'Blackbeard\'s Cerberus Devil Fruit',
    author: 'DevilFruitScholar',
    authorBounty: 8920,
    knowledgeLevel: 'manga-current' as const,
    verified: false,
    bountyPoints: 890,
    rating: 4.5,
    upvotes: 234,
    downvotes: 12,
    views: 5231,
    favorites: 89,
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-02-05'),
    readTime: '6 min read',
    evidenceTags: [
      { chapter: 577 },
      { chapter: 595 },
      { sbs: 'Volume 59' },
    ],
    content: `# Blackbeard's Cerberus Devil Fruit

## The Multiple Fruit Mystery

Marshall D. Teach is the only known character to possess multiple Devil Fruit powers. This theory explores how this is possible through a Mythical Zoan fruit.

## Evidence

In **Chapter 577**, we witness Blackbeard stealing Whitebeard's Gura Gura no Mi. Marco comments that Blackbeard's body is "abnormal."

## The Cerberus Theory

I believe Blackbeard possesses a Mythical Zoan: **Inu Inu no Mi, Model: Cerberus**. This three-headed dog of myth allows him to house three souls/fruits:

1. Cerberus Zoan (original)
2. Yami Yami no Mi (darkness)
3. Gura Gura no Mi (quake)

## Supporting Evidence

- His Jolly Roger has **three skulls**
- He never sleeps (mentioned in **Chapter 595**)
- Three different fighting styles

## Conclusion

This would explain Blackbeard's unique body structure and his ability to wield multiple Devil Fruits.`,
    tags: ['Blackbeard', 'Devil Fruit', 'Cerberus', 'Yami Yami no Mi'],
  },
  {
    slug: 'luffy-sun-god-nika',
    title: 'The Joy Boy Connection',
    author: 'HistorianOfOhara',
    authorBounty: 21500,
    knowledgeLevel: 'latest-leaks' as const,
    verified: true,
    bountyPoints: 2100,
    rating: 4.9,
    upvotes: 567,
    downvotes: 8,
    views: 12450,
    favorites: 234,
    createdAt: new Date('2024-03-10'),
    updatedAt: new Date('2024-03-15'),
    readTime: '12 min read',
    evidenceTags: [
      { chapter: 1044 },
      { chapter: 1045 },
      { chapter: 1114 },
      { sbs: 'Volume 103' },
    ],
    content: `# The Joy Boy Connection

## Luffy and the Sun God Nika

The revelation in **Chapter 1044** changed everything we thought we knew about Luffy's Devil Fruit.

## The Truth About the Gomu Gomu no Mi

Luffy's fruit is actually the **Hito Hito no Mi, Model: Nika** - a Mythical Zoan that was hidden by the World Government for 800 years.

## Joy Boy's Will

**Chapter 1114** reveals that Joy Boy was the previous user of this fruit. The connection between Luffy and Joy Boy is through:

1. The Devil Fruit itself
2. The inherited will
3. The promise to free the world

## Gear 5 and Liberation

Gear 5 represents the "Peak of Freedom" - allowing Luffy to fight however he imagines. This matches Nika's role as the "Warrior of Liberation."

## Conclusion

Luffy isn't Joy Boy reincarnated - he's inherited Joy Boy's will and fruit, continuing the mission to bring liberation to the world.`,
    tags: ['Luffy', 'Joy Boy', 'Nika', 'Gear 5', 'Sun God'],
  },
]

const comments = [
  {
    id: '1',
    author: 'PirateKingFan',
    content: 'This is an excellent theory! The connection to the Will of D makes so much sense.',
    upvotes: 45,
    createdAt: new Date('2024-01-16'),
  },
  {
    id: '2',
    author: 'StrawHatScholar',
    content: 'I never thought about the timing aspect before. Great insight about Roger being too early!',
    upvotes: 32,
    createdAt: new Date('2024-01-17'),
  },
]

const relatedTheories = [
  {
    slug: 'luffy-sun-god-nika',
    title: 'The Joy Boy Connection',
    author: 'HistorianOfOhara',
    rating: 4.9,
    views: 12450,
  },
  {
    slug: 'blackbeard-cerberus-theory',
    title: 'Blackbeard\'s Cerberus Devil Fruit',
    author: 'DevilFruitScholar',
    rating: 4.5,
    views: 5231,
  },
]

export default function TheoryPage({ params }: { params: { slug: string } }) {
  const [userVote, setUserVote] = useState<'up' | 'down' | null>(null)
  const [isFavorited, setIsFavorited] = useState(false)
  const [comment, setComment] = useState('')

  const theory = theories.find((t) => t.slug === params.slug)

  if (!theory) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Theory Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The theory you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link href="/theories">Back to Theories</Link>
          </Button>
        </div>
      </div>
    )
  }

  const handleVote = (type: 'up' | 'down') => {
    if (userVote === type) {
      setUserVote(null)
    } else {
      setUserVote(type)
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
    <div className="min-h-screen bg-linear-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Back Button */}
        <Button variant="ghost" size="sm" asChild className="mb-6">
          <Link href="/theories">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Theories
          </Link>
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header Card */}
            <Card>
              <CardHeader className="space-y-4">
                {/* Badges */}
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge
                    variant={
                      theory.knowledgeLevel === 'anime-only'
                        ? 'secondary'
                        : theory.knowledgeLevel === 'manga-current'
                        ? 'default'
                        : 'destructive'
                    }
                  >
                    {theory.knowledgeLevel === 'anime-only'
                      ? 'Anime Only'
                      : theory.knowledgeLevel === 'manga-current'
                      ? 'Manga Current'
                      : 'Latest Leaks'}
                  </Badge>
                  {theory.verified && (
                    <Badge variant="outline" className="gap-1 border-green-500 text-green-600">
                      <CheckCircle2 className="w-3 h-3" />
                      Verified
                    </Badge>
                  )}
                  {theory.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                  {theory.title}
                </h1>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-primary/10 text-primary text-lg">
                      {getAuthorInitials(theory.author)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{theory.author}</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Trophy className="w-3 h-3" />
                        {theory.authorBounty.toLocaleString()} Bounty
                      </span>
                    </div>
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pt-2 border-t">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {theory.createdAt.toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {theory.readTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {theory.views.toLocaleString()} views
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    {theory.favorites} favorites
                  </div>
                </div>

                {/* Evidence Tags */}
                <div className="pt-2">
                  <h3 className="text-sm font-medium mb-2 text-muted-foreground">
                    Evidence References:
                  </h3>
                  <EvidenceChain evidenceTags={theory.evidenceTags} />
                </div>
              </CardHeader>
            </Card>

            {/* Theory Content */}
            <Card>
              <CardContent className="prose prose-lg dark:prose-invert max-w-none pt-6">
                <div
                  dangerouslySetInnerHTML={{
                    __html: theory.content
                      .replace(/\n/g, '<br/>')
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                      .replace(/^> (.*?)$/gm, '<blockquote>$1</blockquote>')
                      .replace(/^# (.*?)$/gm, '<h1>$1</h1>')
                      .replace(/^## (.*?)$/gm, '<h2>$1</h2>')
                      .replace(/^### (.*?)$/gm, '<h3>$1</h3>'),
                  }}
                />
              </CardContent>
            </Card>

            {/* Comments Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Discussion ({comments.length})
                </CardTitle>
                <CardDescription>Share your thoughts on this theory</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Add Comment */}
                <div className="space-y-3">
                  <Textarea
                    placeholder="Add your thoughts..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    rows={3}
                  />
                  <Button>Post Comment</Button>
                </div>

                <Separator />

                {/* Comments List */}
                <div className="space-y-4">
                  {comments.map((c) => (
                    <div
                      key={c.id}
                      className="flex gap-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="text-sm">
                          {getAuthorInitials(c.author)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-sm">{c.author}</span>
                          <span className="text-xs text-muted-foreground">
                            {c.createdAt.toLocaleDateString()}
                          </span>
                        </div>
                        <p className="text-sm">{c.content}</p>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" className="h-7 text-xs">
                            <ThumbsUp className="w-3 h-3 mr-1" />
                            {c.upvotes}
                          </Button>
                          <Button variant="ghost" size="sm" className="h-7 text-xs">
                            Reply
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Action Card */}
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle className="text-lg">Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {/* Voting */}
                <div className="flex items-center gap-2">
                  <Button
                    variant={userVote === 'up' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => handleVote('up')}
                    className="flex-1"
                  >
                    <ThumbsUp className="w-4 h-4 mr-2" />
                    {theory.upvotes + (userVote === 'up' ? 1 : 0)}
                  </Button>
                  <Button
                    variant={userVote === 'down' ? 'destructive' : 'outline'}
                    size="sm"
                    onClick={() => handleVote('down')}
                    className="flex-1"
                  >
                    <ThumbsDown className="w-4 h-4 mr-2" />
                    {theory.downvotes + (userVote === 'down' ? 1 : 0)}
                  </Button>
                </div>

                <Button
                  variant={isFavorited ? 'default' : 'outline'}
                  className="w-full"
                  onClick={() => setIsFavorited(!isFavorited)}
                >
                  <Heart
                    className={cn('w-4 h-4 mr-2', isFavorited && 'fill-current')}
                  />
                  {isFavorited ? 'Favorited' : 'Add to Favorites'}
                </Button>

                <Button variant="outline" className="w-full">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>

                <Button variant="outline" className="w-full">
                  <BookmarkPlus className="w-4 h-4 mr-2" />
                  Save for Later
                </Button>

                <Separator />

                <Button variant="ghost" className="w-full text-muted-foreground" size="sm">
                  <Flag className="w-4 h-4 mr-2" />
                  Report
                </Button>
              </CardContent>
            </Card>

            {/* Stats Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Theory Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Rating</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    <span className="font-semibold">{theory.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Bounty Points</span>
                  <span className="font-semibold text-primary">
                    {theory.bountyPoints}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Evidence</span>
                  <span className="font-semibold">
                    {theory.evidenceTags.length} references
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Related Theories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Related Theories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {relatedTheories.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/theories/${related.slug}`}
                    className="block p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <h4 className="font-medium text-sm mb-1 line-clamp-2">
                      {related.title}
                    </h4>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{related.author}</span>
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                        {related.rating}
                      </span>
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
