'use client'

import { useState, createContext, useContext, ReactNode } from 'react'
import { KnowledgeLevel } from '@/types'
import { Button } from './ui/button'
import { Shield, Eye, BookOpen, Zap } from 'lucide-react'

interface SpoilerGuardContextType {
  knowledgeLevel: KnowledgeLevel
  setKnowledgeLevel: (level: KnowledgeLevel) => void
}

const SpoilerGuardContext = createContext<SpoilerGuardContextType | undefined>(undefined)

export function useSpoilerGuard() {
  const context = useContext(SpoilerGuardContext)
  if (!context) {
    throw new Error('useSpoilerGuard must be used within SpoilerGuardProvider')
  }
  return context
}

export function SpoilerGuardProvider({ children }: { children: ReactNode }) {
  const [knowledgeLevel, setKnowledgeLevel] = useState<KnowledgeLevel>('anime-only')

  return (
    <SpoilerGuardContext.Provider value={{ knowledgeLevel, setKnowledgeLevel }}>
      {children}
    </SpoilerGuardContext.Provider>
  )
}

export function SpoilerGuardToggle() {
  const { knowledgeLevel, setKnowledgeLevel } = useSpoilerGuard()

  const levels: { value: KnowledgeLevel; label: string; icon: any; color: string }[] = [
    { value: 'anime-only', label: 'Anime Only', icon: Eye, color: 'bg-blue-500' },
    { value: 'manga-current', label: 'Manga Current', icon: BookOpen, color: 'bg-purple-500' },
    { value: 'latest-leaks', label: 'Latest Leaks', icon: Zap, color: 'bg-red-500' },
  ]

  return (
    <div className="flex items-center gap-2 p-4 bg-card rounded-lg border">
      <Shield className="w-5 h-5 text-muted-foreground" />
      <span className="text-sm font-medium text-muted-foreground">Spoiler Level:</span>
      <div className="flex gap-2">
        {levels.map(({ value, label, icon: Icon, color }) => (
          <Button
            key={value}
            variant={knowledgeLevel === value ? 'default' : 'outline'}
            size="sm"
            onClick={() => setKnowledgeLevel(value)}
            className={knowledgeLevel === value ? color : ''}
          >
            <Icon className="w-4 h-4" />
            {label}
          </Button>
        ))}
      </div>
    </div>
  )
}
