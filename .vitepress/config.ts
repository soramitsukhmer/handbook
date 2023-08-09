import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Soramitsu (Khmer)",
  titleTemplate: ":title - Soramitsu (Khmer)",
  description: "Soramitsu (Khmer)'s company handbook",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "https://static.tildacdn.com/tild6230-6663-4065-b339-396336343533/soramitsu-logo-7year.svg",
    siteTitle: false,

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
