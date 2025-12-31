-- Grand Line Archives Database Schema
-- Run this in your Supabase SQL editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table (extends Supabase auth.users)
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  display_name TEXT,
  avatar_url TEXT,
  bounty_points INTEGER DEFAULT 0,
  knowledge_level TEXT DEFAULT 'anime-only' CHECK (knowledge_level IN ('anime-only', 'manga-current', 'latest-leaks')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Theories table
CREATE TABLE public.theories (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  summary TEXT NOT NULL,
  content TEXT NOT NULL,
  author_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  knowledge_level TEXT NOT NULL CHECK (knowledge_level IN ('anime-only', 'manga-current', 'latest-leaks')),
  verified BOOLEAN DEFAULT false,
  bounty_points INTEGER DEFAULT 0,
  rating DECIMAL(3, 2) DEFAULT 0.00,
  view_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Evidence tags table
CREATE TABLE public.evidence_tags (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  theory_id UUID REFERENCES public.theories(id) ON DELETE CASCADE,
  tag_type TEXT NOT NULL CHECK (tag_type IN ('chapter', 'sbs', 'cover-story', 'episode')),
  reference_value TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Votes table
CREATE TABLE public.theory_votes (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  theory_id UUID REFERENCES public.theories(id) ON DELETE CASCADE,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  vote_type TEXT NOT NULL CHECK (vote_type IN ('upvote', 'downvote')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(theory_id, user_id)
);

-- Comments table
CREATE TABLE public.theory_comments (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  theory_id UUID REFERENCES public.theories(id) ON DELETE CASCADE,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  parent_id UUID REFERENCES public.theory_comments(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Bounty transactions table
CREATE TABLE public.bounty_transactions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  amount INTEGER NOT NULL,
  reason TEXT NOT NULL,
  theory_id UUID REFERENCES public.theories(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Favorites table
CREATE TABLE public.theory_favorites (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  theory_id UUID REFERENCES public.theories(id) ON DELETE CASCADE,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(theory_id, user_id)
);

-- Indexes for performance
CREATE INDEX idx_theories_slug ON public.theories(slug);
CREATE INDEX idx_theories_author ON public.theories(author_id);
CREATE INDEX idx_theories_knowledge_level ON public.theories(knowledge_level);
CREATE INDEX idx_theories_created_at ON public.theories(created_at DESC);
CREATE INDEX idx_evidence_tags_theory ON public.evidence_tags(theory_id);
CREATE INDEX idx_theory_votes_theory ON public.theory_votes(theory_id);
CREATE INDEX idx_theory_comments_theory ON public.theory_comments(theory_id);

-- Row Level Security (RLS) Policies
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.theories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.evidence_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.theory_votes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.theory_comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bounty_transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.theory_favorites ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Public profiles are viewable by everyone" ON public.profiles
  FOR SELECT USING (true);

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- Theories policies
CREATE POLICY "Theories are viewable by everyone" ON public.theories
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create theories" ON public.theories
  FOR INSERT WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Authors can update own theories" ON public.theories
  FOR UPDATE USING (auth.uid() = author_id);

-- Evidence tags policies
CREATE POLICY "Evidence tags are viewable by everyone" ON public.evidence_tags
  FOR SELECT USING (true);

-- Votes policies
CREATE POLICY "Votes are viewable by everyone" ON public.theory_votes
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can vote" ON public.theory_votes
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own votes" ON public.theory_votes
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own votes" ON public.theory_votes
  FOR DELETE USING (auth.uid() = user_id);

-- Comments policies
CREATE POLICY "Comments are viewable by everyone" ON public.theory_comments
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can comment" ON public.theory_comments
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own comments" ON public.theory_comments
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own comments" ON public.theory_comments
  FOR DELETE USING (auth.uid() = user_id);

-- Functions
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_theories_updated_at BEFORE UPDATE ON public.theories
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_comments_updated_at BEFORE UPDATE ON public.theory_comments
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
