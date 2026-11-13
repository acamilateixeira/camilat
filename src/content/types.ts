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
  id: string
  repo?: string
  /** Demo publicada (URL completa). */
  demo?: string
  type: string
  stack: string
  description: Localized
  highlights?: Localized<string[]>
  featured?: boolean
  diagram?: { file: string; alt: Localized }
  /** Símbolo decorativo do cartão em destaque. */
  /** Nome de um ícone de AppIcon (SVG), nunca um caractere: no celular eles viram emoji. */
  symbol?: ProjectIcon
}

export interface SkillGroup {
  title: Localized
  items: Localized<string[]>
}

/** Ícones desenhados em SVG por AppIcon.vue. */
export type ProjectIcon = 'swap' | 'nodes' | 'target' | 'braces' | 'code' | 'arrow-up-right'
export type IconName = ProjectIcon | 'arrow-down' | 'arrow-up' | 'pin'
