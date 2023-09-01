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

const FrontEnd = definePage({ 
  text: 'Front End',
  link: '/frontend/',
  sidebar: [
    { text: 'Getting Started', link: '/frontend/' },
    { text: 'Setup Development Environment', link: '/frontend/setup' },
    { text: 'Engineering Guide', items: [
      { text: 'Guidelines', items: [
        { text: 'Code Guidelines', link: '/frontend/code-guidelines' },
        { text: 'API Guidelines', link: '/frontend/api-guidelines' }
      ]}
    ]},
    { text: 'Workflows', items: [
      { text: 'Source Code Organization', link: '/frontend/source-code' },
      { text: 'Project Release Procedure', link: '/frontend/project-release' }
    ] }
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
      FrontEnd,
      Example,
    ],
    sidebar: {
      [OnBoarding.link]:  OnBoarding.sidebar,
      [FrontEnd.link]:  FrontEnd.sidebar,
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
