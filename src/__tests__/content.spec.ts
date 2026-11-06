import { describe, expect, it } from 'vitest'
import { copy, skills } from '../content/copy'
import { experiences } from '../content/experience'
import { projects } from '../content/projects'

/*
 * O site é bilíngue: estes testes impedem que um idioma fique desatualizado
 * quando o outro é editado.
 */
describe('conteúdo bilíngue', () => {
  it('tem as mesmas chaves de texto em PT e EN', () => {
    expect(Object.keys(copy.en).sort()).toEqual(Object.keys(copy.pt).sort())
  })

  it.each(experiences.map((e) => [e.company, e] as const))('%s tem o mesmo número de entregas nos dois idiomas', (_, job) => {
    expect(job.highlights.en).toHaveLength(job.highlights.pt.length)
    expect(job.highlights.pt.length).toBeGreaterThan(0)
  })

  it('destaca os quatro estudos de caso na ordem editorial', () => {
    expect(projects.filter((p) => p.featured).map((p) => p.name)).toEqual(['GEMP', 'TripFlow', 'Bora', 'Livit Live Controller'])
  })

  it('traduz os destaques dos projetos', () => {
    for (const project of projects) {
      if (project.highlights) {
        expect(project.highlights.en).toHaveLength(project.highlights.pt.length)
      }
    }
  })

  it('lista a experiência atual primeiro', () => {
    expect(experiences[0]?.current).toBe(true)
    expect(experiences.filter((e) => e.current)).toHaveLength(1)
  })

  it('tem habilidades com a mesma quantidade de itens em PT e EN', () => {
    for (const group of skills) {
      expect(group.items.en).toHaveLength(group.items.pt.length)
    }
  })
})
