import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { nextTick } from 'vue'

// Cada teste carrega o módulo de novo, porque o idioma é decidido na importação.
async function freshApp(search = '', stored: string | null = null) {
  vi.resetModules()
  window.history.replaceState(null, '', `/${search}`)
  window.localStorage.clear()
  if (stored) window.localStorage.setItem('portfolio-language', stored)
  const { default: App } = await import('../App.vue')
  return mount(App, { attachTo: document.body })
}

afterEach(() => {
  document.body.innerHTML = ''
  window.history.replaceState(null, '', '/')
  window.localStorage.clear()
})

describe('escolha de idioma', () => {
  it('na primeira visita mostra só a escolha, sem o conteúdo do portfólio', async () => {
    const wrapper = await freshApp()

    expect(wrapper.find('.language-gate').exists()).toBe(true)
    expect(wrapper.find('.portfolio').exists()).toBe(false)
    expect(wrapper.findAll('.language-gate button').map((b) => b.attributes('lang'))).toEqual(['pt-BR', 'en'])
    expect(window.localStorage.getItem('portfolio-language')).toBeNull()
  })

  it('abre o portfólio no idioma escolhido e guarda a escolha', async () => {
    const wrapper = await freshApp()

    await wrapper.get('[data-lang="en"]').trigger('click')
    await nextTick()

    expect(wrapper.find('.language-gate').exists()).toBe(false)
    expect(wrapper.get('h1').text()).toContain('Integrations that work.')
    expect(document.documentElement.lang).toBe('en')
    expect(window.localStorage.getItem('portfolio-language')).toBe('en')
  })

  it('pula a escolha quando o link traz ?lang=', async () => {
    const wrapper = await freshApp('?lang=en')

    expect(wrapper.find('.language-gate').exists()).toBe(false)
    expect(wrapper.get('h1').text()).toContain('Integrations that work.')
  })

  it('pula a escolha na volta de quem já escolheu', async () => {
    const wrapper = await freshApp('', 'pt')

    expect(wrapper.find('.language-gate').exists()).toBe(false)
    expect(wrapper.get('h1').text()).toContain('Integrações que funcionam.')
  })

  it('ignora um ?lang= desconhecido e mostra a escolha', async () => {
    const wrapper = await freshApp('?lang=fr')

    expect(wrapper.find('.language-gate').exists()).toBe(true)
  })
})
