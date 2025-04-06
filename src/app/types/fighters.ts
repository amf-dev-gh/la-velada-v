import type { Social } from "../types/social";

type fighterId =
  | 'peereira'
  | 'perxitaa'
  | 'abby'
  | 'roro'
  | 'gaspi'
  | 'rivaldios'
  | 'andoni'
  | 'viruzz'
  | 'alana'
  | 'grefg'
  | 'westcol'
  | 'arigeli'
  | 'tomas'
  | 'carlos'

type fighterName =
  | 'Peereira'
  | 'Perxitaa'
  | 'Abby'
  | 'Roro'
  | 'Gaspi'
  | 'Rivaldios'
  | 'Andoni'
  | 'Viruzz'
  | 'Alana'
  | 'Grefg'
  | 'Westcol'
  | 'Arigeli'
  | 'Tomás'
  | 'Carlos'

interface Clip {
  text: string
  url: string
}

export interface Fighter {
  id: fighterId | null
  name: fighterName | null
  fightName?: string
  city?: string
  realName: string
  gender: 'masculino' | 'femenino' | 'otro'
  targetWeight?: number
  targetGloves?: string
  birthDate: Date | null
  height: number
  age: number
  weight: number
  country: string
  versus: fighterId | null
  socials: Social[]
  clips: Clip[]
  workout?: {
    videoID: string
    thumbnail: string
  }
}
