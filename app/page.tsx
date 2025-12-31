import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SpoilerGuardToggle } from "@/components/spoiler-guard";
import { Anchor, BookOpen, Trophy, Users, Shield, Zap, Search } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 rounded-full">
            <Anchor className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Open Source • Community Driven</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
            The Grand Line Archives
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            The definitive open-source hub for One Piece theories and lore. Explore interconnected evidence chains and join the community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild>
              <Link href="/theories">
                <BookOpen className="w-5 h-5" />
                Explore Theories
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/community">
                <Users className="w-5 h-5" />
                Join the Crew
              </Link>
            </Button>
          </div>

          <div className="max-w-2xl mx-auto">
            <SpoilerGuardToggle />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Key Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Shield className="w-10 h-10 text-blue-500 mb-2" />
              <CardTitle>Spoiler Guard</CardTitle>
              <CardDescription>
                Global toggle for "Anime Only," "Manga Only," and "Latest Leaks." Your experience, your choice.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Trophy className="w-10 h-10 text-yellow-500 mb-2" />
              <CardTitle>Bounty System</CardTitle>
              <CardDescription>
                Earn "Bounty Points" for contributing verified facts or highly-rated theories.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Zap className="w-10 h-10 text-purple-500 mb-2" />
              <CardTitle>Evidence Chain</CardTitle>
              <CardDescription>
                Click a chapter tag in a theory to see a summary of the referenced panel.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Search className="w-10 h-10 text-green-500 mb-2" />
              <CardTitle>Deep Search</CardTitle>
              <CardDescription>
                Search through theories, evidence, and lore with our advanced search system.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-20">
        <Card className="bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl mb-4">
              Ready to Set Sail?
            </CardTitle>
            <CardDescription className="text-lg max-w-2xl mx-auto">
              Join thousands of One Piece fans documenting the vast world of the Grand Line.
              Contribute theories, verify evidence, and earn your place in the archives.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/theories">Start Exploring</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/theories/submit">Submit a Theory</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://github.com/your-repo/grand-line-archives" target="_blank">
                View on GitHub
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
