import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, TrendingUp, Star, CheckCircle2, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { TheoryCard } from '@/components/theory-card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

// Sample theories data - will be replaced by Velite
const theories = [
  {
    id: '1',
    slug: 'one-piece-treasure-theory',
    title: 'The True Nature of the One Piece',
    summary: 'An analysis of what the legendary treasure could really be based on evidence from the Void Century and Roger\'s final words.',
    author: 'GrandLineExplorer',
    knowledgeLevel: 'manga-current' as const,
    verified: true,
    bountyPoints: 1250,
    rating: 4.8,
    views: 8542,
  },
  {
    id: '2',
    slug: 'blackbeard-cerberus-theory',
    title: 'Blackbeard\'s Cerberus Devil Fruit',
    summary: 'Why Blackbeard can have multiple Devil Fruits: Evidence pointing to a Mythical Zoan fruit allowing him to house multiple souls.',
    author: 'DevilFruitScholar',
    knowledgeLevel: 'manga-current' as const,
    verified: false,
    bountyPoints: 890,
    rating: 4.5,
    views: 5231,
  },
  {
    id: '3',
    slug: 'luffy-sun-god-nika',
    title: 'The Joy Boy Connection',
    summary: 'Exploring the connection between Luffy, Joy Boy, and the Sun God Nika through historical evidence and prophecies.',
    author: 'HistorianOfOhara',
    knowledgeLevel: 'latest-leaks' as const,
    verified: true,
    bountyPoints: 2100,
    rating: 4.9,
    views: 12450,
  },
]

export default function TheoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <BookOpen className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Theory Archives
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Explore evidence-backed theories from the One Piece community. Each theory is tagged with chapters, SBS references, and more.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search theories..."
              className="pl-10"
            />
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList>
              <TabsTrigger value="all">All Theories</TabsTrigger>
              <TabsTrigger value="verified">
                <CheckCircle2 className="w-4 h-4 mr-1" />
                Verified
              </TabsTrigger>
              <TabsTrigger value="top-rated">
                <Star className="w-4 h-4 mr-1" />
                Top Rated
              </TabsTrigger>
              <TabsTrigger value="bounty">
                <TrendingUp className="w-4 h-4 mr-1" />
                Most Bounty
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {theories.map((theory) => (
                  <TheoryCard key={theory.id} {...theory} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="verified" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {theories.filter(t => t.verified).map((theory) => (
                  <TheoryCard key={theory.id} {...theory} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="top-rated" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[...theories].sort((a, b) => b.rating - a.rating).map((theory) => (
                  <TheoryCard key={theory.id} {...theory} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="bounty" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[...theories].sort((a, b) => b.bountyPoints - a.bountyPoints).map((theory) => (
                  <TheoryCard key={theory.id} {...theory} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Have a Theory?</CardTitle>
              <CardDescription>
                Share your insights with the community and earn Bounty Points
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" asChild>
                <Link href="/theories/submit">Submit Your Theory</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
