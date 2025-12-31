export type KnowledgeLevel = 'anime-only' | 'manga-current' | 'latest-leaks'

export interface EvidenceTag {
  chapter?: number
  sbs?: string
  coverStory?: string
  episode?: number
}

export interface Theory {
  id: string
  title: string
  slug: string
  author: string
  summary: string
  content: string
  evidenceTags: EvidenceTag[]
  knowledgeLevel: KnowledgeLevel
  bountyPoints: number
  createdAt: Date
  updatedAt: Date
  rating: number
  verified: boolean
}

export interface User {
  id: string
  username: string
  bountyPoints: number
  knowledgeLevel: KnowledgeLevel
}
