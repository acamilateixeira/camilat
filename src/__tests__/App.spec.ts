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
    const featured = wrapper.get('[data-test="featured-project"]')

    expect(featured.find('h3').text()).toBe('TripFlow')
    expect(featured.get('a').attributes('href')).toBe('https://github.com/acamilateixeira/tripflow')
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
})
