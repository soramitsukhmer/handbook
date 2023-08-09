import { defineConfig } from 'vitepress'
import { definePage } from './definePage'

/**
 * Page configuration
 */
const Home = definePage({ text: 'Home', link: '/' })

const Example = definePage({ 
  text: 'Examples',
  link: '/markdown-examples',
  sidebar: [
    {
      text: 'Examples',
      items: [
        { text: 'Markdown Examples', link: '/markdown-examples' },
        { text: 'Runtime API Examples', link: '/api-examples' }
      ]
    }
  ]
})

const OnBoarding = definePage({ 
  text: 'On-boarding', 
  link: '/on-boarding/',
  sidebar: [
    { text: 'Welcome', link: '/on-boarding/' },
    { text: 'Checklist', link: '/on-boarding/checklist' },
    { text: 'Setting up services', link: '/on-boarding/setting-up-services' },
  ]
})

/**
 * Site configuration
 */

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
      Home,
      OnBoarding,
      Example,
    ],
    sidebar: {
      [OnBoarding.link]:  OnBoarding.sidebar,
      [Example.link]: Example.sidebar,
    },

    editLink: {
      pattern: 'https://github.com/soramitsukhmer/handbook/edit/main/:path',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  lastUpdated: true
})
