'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  BookOpen,
  Plus,
  X,
  AlertCircle,
  Sparkles,
  Eye,
  Zap,
  Info,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function SubmitTheoryPage() {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [knowledgeLevel, setKnowledgeLevel] = useState<
    'anime-only' | 'manga-current' | 'latest-leaks'
  >('manga-current');
  const [chapters, setChapters] = useState<string[]>([]);
  const [sbsRefs, setSbsRefs] = useState<string[]>([]);
  const [coverStories, setCoverStories] = useState<string[]>([]);
  const [currentChapter, setCurrentChapter] = useState('');
  const [currentSbs, setCurrentSbs] = useState('');
  const [currentCover, setCurrentCover] = useState('');

  const addChapter = () => {
    if (currentChapter && !chapters.includes(currentChapter)) {
      setChapters([...chapters, currentChapter]);
      setCurrentChapter('');
    }
  };

  const removeChapter = (chapter: string) => {
    setChapters(chapters.filter((c) => c !== chapter));
  };

  const addSbs = () => {
    if (currentSbs && !sbsRefs.includes(currentSbs)) {
      setSbsRefs([...sbsRefs, currentSbs]);
      setCurrentSbs('');
    }
  };

  const removeSbs = (sbs: string) => {
    setSbsRefs(sbsRefs.filter((s) => s !== sbs));
  };

  const addCover = () => {
    if (currentCover && !coverStories.includes(currentCover)) {
      setCoverStories([...coverStories, currentCover]);
      setCurrentCover('');
    }
  };

  const removeCover = (cover: string) => {
    setCoverStories(coverStories.filter((c) => c !== cover));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const theoryData = {
      title,
      summary,
      content,
      author,
      knowledgeLevel,
      chapters: chapters.map(Number),
      sbsRefs,
      coverStories,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    console.log('Theory submitted:', theoryData);
    // TODO: Implement actual submission logic
    alert(
      'Theory submitted successfully! (This is a demo - no actual submission yet)'
    );
  };

  const getLevelIcon = () => {
    switch (knowledgeLevel) {
      case 'anime-only':
        return <Eye className='w-4 h-4' />;
      case 'manga-current':
        return <BookOpen className='w-4 h-4' />;
      case 'latest-leaks':
        return <Zap className='w-4 h-4' />;
    }
  };

  const getLevelColor = () => {
    switch (knowledgeLevel) {
      case 'anime-only':
        return 'bg-blue-500';
      case 'manga-current':
        return 'bg-purple-500';
      case 'latest-leaks':
        return 'bg-red-500';
    }
  };

  return (
    <div className='min-h-screen bg-linear-to-b from-background to-muted/20'>
      <div className='container mx-auto px-4 py-12 max-w-4xl'>
        {/* Header */}
        <div className='mb-8'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='p-3 bg-primary/10 rounded-xl'>
              <Sparkles className='w-10 h-10 text-primary' />
            </div>
            <div>
              <h1 className='text-4xl md:text-5xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent'>
                Submit Your Theory
              </h1>
              <p className='text-muted-foreground mt-1'>
                Share your insights with the One Piece community
              </p>
            </div>
          </div>
        </div>

        {/* Guidelines Card */}
        <Card className='mb-8 border-primary/20 bg-primary/5'>
          <CardHeader>
            <div className='flex items-center gap-2'>
              <Info className='w-5 h-5 text-primary' />
              <CardTitle className='text-lg'>Theory Guidelines</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-0.5'>•</span>
                <span>
                  Back your theory with evidence (chapters, SBS, cover stories)
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-0.5'>•</span>
                <span>
                  Choose the appropriate knowledge level to prevent spoilers
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-0.5'>•</span>
                <span>
                  Write clear, well-structured content with proper headings
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-0.5'>•</span>
                <span>Be respectful of other interpretations and theories</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Theory Form */}
        <form onSubmit={handleSubmit}>
          <Card>
            <CardHeader>
              <CardTitle>Theory Details</CardTitle>
              <CardDescription>
                Fill out the form below to submit your theory for review
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-6'>
              {/* Basic Information */}
              <div className='space-y-4'>
                <div className='space-y-2'>
                  <Label htmlFor='title'>
                    Theory Title <span className='text-destructive'>*</span>
                  </Label>
                  <Input
                    id='title'
                    placeholder='e.g., The True Identity of Joy Boy'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    maxLength={100}
                  />
                  <p className='text-xs text-muted-foreground'>
                    {title.length}/100 characters
                  </p>
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='author'>
                    Your Name <span className='text-destructive'>*</span>
                  </Label>
                  <Input
                    id='author'
                    placeholder='e.g., NakamaTheoryMaster'
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                  />
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='summary'>
                    Summary <span className='text-destructive'>*</span>
                  </Label>
                  <Textarea
                    id='summary'
                    placeholder='A brief summary of your theory (200 characters max)'
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    required
                    maxLength={200}
                    rows={3}
                  />
                  <p className='text-xs text-muted-foreground'>
                    {summary.length}/200 characters
                  </p>
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='knowledgeLevel'>
                    Knowledge Level <span className='text-destructive'>*</span>
                  </Label>
                  <Select
                    id='knowledgeLevel'
                    value={knowledgeLevel}
                    onChange={(e) => setKnowledgeLevel(e.target.value as any)}
                    required
                  >
                    <option value='anime-only'>
                      Anime Only - No manga spoilers
                    </option>
                    <option value='manga-current'>
                      Manga Current - Up to latest chapter
                    </option>
                    <option value='latest-leaks'>
                      Latest Leaks - Includes unofficial spoilers
                    </option>
                  </Select>
                  <div className='flex items-center gap-2 mt-2'>
                    <Badge
                      variant='outline'
                      className={cn(
                        'gap-1',
                        getLevelColor(),
                        'text-white border-transparent'
                      )}
                    >
                      {getLevelIcon()}
                      {knowledgeLevel === 'anime-only'
                        ? 'Anime Only'
                        : knowledgeLevel === 'manga-current'
                        ? 'Manga Current'
                        : 'Latest Leaks'}
                    </Badge>
                    <span className='text-xs text-muted-foreground'>
                      This theory will be tagged with this spoiler level
                    </span>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Evidence Section */}
              <div className='space-y-4'>
                <div>
                  <h3 className='text-lg font-semibold mb-2'>
                    Evidence References
                  </h3>
                  <p className='text-sm text-muted-foreground mb-4'>
                    Add chapter numbers, SBS references, or cover stories that
                    support your theory
                  </p>
                </div>

                {/* Chapter References */}
                <div className='space-y-2'>
                  <Label htmlFor='chapter'>Chapter References</Label>
                  <div className='flex gap-2'>
                    <Input
                      id='chapter'
                      type='number'
                      placeholder='e.g., 1044'
                      value={currentChapter}
                      onChange={(e) => setCurrentChapter(e.target.value)}
                      onKeyPress={(e) =>
                        e.key === 'Enter' && (e.preventDefault(), addChapter())
                      }
                    />
                    <Button
                      type='button'
                      onClick={addChapter}
                      size='icon'
                      variant='outline'
                    >
                      <Plus className='w-4 h-4' />
                    </Button>
                  </div>
                  {chapters.length > 0 && (
                    <div className='flex flex-wrap gap-2 mt-2'>
                      {chapters.map((chapter) => (
                        <Badge
                          key={chapter}
                          variant='chapter'
                          className='gap-1'
                        >
                          Chapter {chapter}
                          <button
                            type='button'
                            onClick={() => removeChapter(chapter)}
                            className='ml-1 hover:text-destructive'
                          >
                            <X className='w-3 h-3' />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                {/* SBS References */}
                <div className='space-y-2'>
                  <Label htmlFor='sbs'>SBS References</Label>
                  <div className='flex gap-2'>
                    <Input
                      id='sbs'
                      placeholder='e.g., Volume 100'
                      value={currentSbs}
                      onChange={(e) => setCurrentSbs(e.target.value)}
                      onKeyPress={(e) =>
                        e.key === 'Enter' && (e.preventDefault(), addSbs())
                      }
                    />
                    <Button
                      type='button'
                      onClick={addSbs}
                      size='icon'
                      variant='outline'
                    >
                      <Plus className='w-4 h-4' />
                    </Button>
                  </div>
                  {sbsRefs.length > 0 && (
                    <div className='flex flex-wrap gap-2 mt-2'>
                      {sbsRefs.map((sbs) => (
                        <Badge key={sbs} variant='sbs' className='gap-1'>
                          SBS {sbs}
                          <button
                            type='button'
                            onClick={() => removeSbs(sbs)}
                            className='ml-1 hover:text-destructive'
                          >
                            <X className='w-3 h-3' />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                {/* Cover Story References */}
                <div className='space-y-2'>
                  <Label htmlFor='cover'>Cover Story References</Label>
                  <div className='flex gap-2'>
                    <Input
                      id='cover'
                      placeholder="e.g., Enel's Great Space Operations"
                      value={currentCover}
                      onChange={(e) => setCurrentCover(e.target.value)}
                      onKeyPress={(e) =>
                        e.key === 'Enter' && (e.preventDefault(), addCover())
                      }
                    />
                    <Button
                      type='button'
                      onClick={addCover}
                      size='icon'
                      variant='outline'
                    >
                      <Plus className='w-4 h-4' />
                    </Button>
                  </div>
                  {coverStories.length > 0 && (
                    <div className='flex flex-wrap gap-2 mt-2'>
                      {coverStories.map((cover) => (
                        <Badge key={cover} variant='cover' className='gap-1'>
                          {cover}
                          <button
                            type='button'
                            onClick={() => removeCover(cover)}
                            className='ml-1 hover:text-destructive'
                          >
                            <X className='w-3 h-3' />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <Separator />

              {/* Theory Content */}
              <div className='space-y-2'>
                <Label htmlFor='content'>
                  Theory Content <span className='text-destructive'>*</span>
                </Label>
                <Textarea
                  id='content'
                  placeholder='Write your theory here using Markdown formatting...

Example:
# Main Hypothesis

## Evidence

1. In Chapter 1044...
2. SBS Volume 100 confirms...

## Conclusion

Based on the evidence...'
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                  rows={20}
                  className='font-mono text-sm'
                />
                <p className='text-xs text-muted-foreground'>
                  Supports Markdown formatting for headings, lists, bold,
                  italic, etc.
                </p>
              </div>

              {/* Submit Buttons */}
              <div className='flex gap-3 pt-4'>
                <Button
                  type='submit'
                  size='lg'
                  disabled={!title || !author || !summary || !content}
                  className='flex-1'
                >
                  <Sparkles className='w-4 h-4 mr-2' />
                  Submit Theory
                </Button>
                <Button type='button' variant='outline' size='lg'>
                  Preview
                </Button>
              </div>

              {/* Info Note */}
              <div className='flex items-start gap-2 p-4 bg-muted/50 rounded-lg'>
                <AlertCircle className='w-5 h-5 text-muted-foreground mt-0.5 shrink-0' />
                <p className='text-sm text-muted-foreground'>
                  Your theory will be reviewed by moderators before being
                  published. Verified theories earn Bounty Points based on
                  community engagement and accuracy.
                </p>
              </div>
            </CardContent>
          </Card>
        </form>

        {/* Preview Section (Optional) */}
        <Card className='mt-8 border-dashed'>
          <CardHeader>
            <CardTitle className='text-lg flex items-center gap-2'>
              <Eye className='w-5 h-5' />
              Live Preview (Coming Soon)
            </CardTitle>
            <CardDescription>
              See how your theory will look to other users
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
