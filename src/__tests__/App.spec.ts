import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import { nextTick } from 'vue'
import App from '../App.vue'
import { useLanguage } from '../composables/useLanguage'

describe('App', () => {
  beforeEach(() => {
    useLanguage().setLanguage('pt')
  })

  it('renderiza o título em português', () => {
    const wrapper = mount(App)

    expect(wrapper.find('h1').text()).toContain('Integrações que funcionam.')
  })

  it('troca o idioma pelo seletor e atualiza o lang do documento', async () => {
    const wrapper = mount(App)

    const en = wrapper.findAll('.language-switch button').find((b) => b.text() === 'EN')
    await en?.trigger('click')
    await nextTick()

    expect(wrapper.find('h1').text()).toContain('Integrations that work.')
    expect(document.documentElement.lang).toBe('en')
    expect(en?.attributes('aria-pressed')).toBe('true')
  })

  it('destaca o TripFlow com link para o repositório', () => {
    const wrapper = mount(App)
    const featured = wrapper.findAll('[data-test="featured-project"]')[1]!

    expect(featured.find('h3').text()).toBe('TripFlow')
    expect(featured.get('a').attributes('href')).toBe('https://github.com/acamilateixeira/tripflow')
  })

  it('destaca o Bora com link para o repositório', () => {
    const wrapper = mount(App)
    const bora = wrapper.findAll('[data-test="featured-project"]')[2]

    expect(bora?.find('h3').text()).toBe('Bora')
    expect(bora?.get('a').attributes('href')).toBe('https://github.com/acamilateixeira/Bora')
  })

  it('apresenta o Livit em ambos os idiomas sem link para o código privado', async () => {
    const wrapper = mount(App)
    const livit = wrapper.get('#livit-live-controller')

    expect(livit.get('h3').text()).toBe('Livit Live Controller')
    expect(livit.get('img').attributes('src')).toMatch(/livit-architecture\.svg$/)
    expect(livit.text()).toContain('Estudo de caso público · código privado')
    expect(livit.find('a').exists()).toBe(false)

    useLanguage().setLanguage('en')
    await nextTick()

    expect(livit.text()).toContain('Public case study · private code')
    expect(livit.get('img').attributes('alt')).toContain('Python server')
  })

  it('aponta para o currículo do idioma selecionado', async () => {
    const wrapper = mount(App)
    const cv = () => wrapper.get('a[download]')

    expect(cv().attributes('href')).toMatch(/CV_PT\.pdf$/)

    useLanguage().setLanguage('en')
    await nextTick()

    expect(cv().attributes('href')).toMatch(/CV_EN\.pdf$/)
  })

  it('abre a experiência atual por padrão', () => {
    const wrapper = mount(App)
    const details = wrapper.findAll('.experience details')

    expect(details[0]?.attributes('open')).toBeDefined()
    expect(details[1]?.attributes('open')).toBeUndefined()
  })

  it('mostra o Sorteador com demo publicada e código', () => {
    const wrapper = mount(App)
    const card = wrapper.get('#sorteador')

    expect(card.get('h3').text()).toBe('Sorteador')
    expect(card.get('[data-test="project-demo"]').attributes('href')).toBe('https://acamilateixeira.github.io/sorteador-web/')
    expect(card.findAll('a').map((a) => a.attributes('href'))).toContain('https://github.com/acamilateixeira/sorteador-web')
  })

  it('abre os projetos com o GEMP e link para o repositório', () => {
    const wrapper = mount(App)
    const gemp = wrapper.findAll('[data-test="featured-project"]')[0]!

    expect(gemp.attributes('id')).toBe('gemp')
    expect(gemp.get('h3').text()).toBe('GEMP')
    expect(gemp.get('a').attributes('href')).toBe('https://github.com/acamilateixeira/GEMP')
  })
})
