import type { DefaultTheme } from 'vitepress'

export interface Page {
    text: string
    link: string
    nav?: DefaultTheme.NavItem[]
    sidebar?: DefaultTheme.Sidebar
}

export function definePage<T extends Page>(page: T): T {
    return page
}
