import { defineStore } from 'pinia'

export const useLocalStore = defineStore('localCache', {
  state: () => ({
    appBarMenu: [
      {
        name: 'PAGES',
        children: [
          { name: 'HOME...PAGE', path: '/', href: '' },
          { name: 'PROJECTS...PAGE', path: '/projects', href: '' },
          { name: 'CONTACT...PAGE', path: '/contact', href: '' }
        ]
      },
      {
        name: 'SOCIAL',
        children: [
          {
            name: 'LINKEDIN...LINK',
            path: '',
            href: 'https://www.linkedin.com/in/isaac-valdez-iv-code/'
          },
          { name: 'GITHUB...LINK', path: '', href: 'https://github.com/0IV-CODE' },
          { name: 'INSTAGRAM...LINK', path: '', href: 'https://www.instagram.com/iv_greatopus/' }
        ]
      },
      {
        name: 'INFO',
        children: [{ name: 'README...PAGE', path: '/info', href: '' }]
      },
      {
        name: 'SETTINGS',
        children: [{ name: 'MODE', path: '', href: '' }]
      }
    ]
  }),
  getters: {
    // doubleCount: (state) => state.count * 2
  },
  actions: {
    // increment() {
    //   this.count++
    // }
  }
})
