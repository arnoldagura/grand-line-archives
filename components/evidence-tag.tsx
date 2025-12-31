import { Badge } from './ui/badge'
import { EvidenceTag as EvidenceTagType } from '@/types'

interface EvidenceTagProps {
  evidence: EvidenceTagType
}

export function EvidenceTag({ evidence }: EvidenceTagProps) {
  if (evidence.chapter) {
    return (
      <Badge variant="chapter" className="cursor-pointer hover:opacity-80">
        Chapter {evidence.chapter}
      </Badge>
    )
  }

  if (evidence.sbs) {
    return (
      <Badge variant="sbs" className="cursor-pointer hover:opacity-80">
        SBS {evidence.sbs}
      </Badge>
    )
  }

  if (evidence.coverStory) {
    return (
      <Badge variant="cover" className="cursor-pointer hover:opacity-80">
        {evidence.coverStory}
      </Badge>
    )
  }

  if (evidence.episode) {
    return (
      <Badge variant="chapter" className="cursor-pointer hover:opacity-80">
        Episode {evidence.episode}
      </Badge>
    )
  }

  return null
}

interface EvidenceChainProps {
  evidenceTags: EvidenceTagType[]
}

export function EvidenceChain({ evidenceTags }: EvidenceChainProps) {
  if (!evidenceTags || evidenceTags.length === 0) {
    return null
  }

  return (
    <div className="flex flex-wrap gap-2">
      {evidenceTags.map((evidence, index) => (
        <EvidenceTag key={index} evidence={evidence} />
      ))}
    </div>
  )
}
