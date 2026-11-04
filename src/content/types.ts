export type Language = 'pt' | 'en'

export type Localized<T = string> = Record<Language, T>

export interface Experience {
  company: string
  role: Localized
  period: Localized
  domain: Localized
  current?: boolean
  highlights: Localized<string[]>
  stack: string[]
}

export interface Project {
  name: string
  repo: string
  type: string
  stack: string
  description: Localized
  highlights?: Localized<string[]>
  featured?: boolean
}

export interface SkillGroup {
  title: Localized
  items: string[]
}
