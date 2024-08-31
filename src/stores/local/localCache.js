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
    ],
    themeActive: false,
    logoW:
      'https://ik.imagekit.io/invimgs0101/IV-CODE/logos/ivcode-logo/WolfWHITE__Transparent__E7BY_DorX.png?updatedAt=1656026848491',
    logoWLazy:
      'https://ik.imagekit.io/invimgs0101/IV-CODE/logos/ivcode-logo/tr:q-1/WolfWHITE__Transparent__E7BY_DorX.png?updatedAt=1656026848491',
    logoB:
      'https://ik.imagekit.io/invimgs0101/IV-CODE/logos/ivcode-logo/Wolf_BLACK__Transparent__tG3tQAaQM.png?updatedAt=1656026848414',
    logoBLazy:
      'https://ik.imagekit.io/invimgs0101/IV-CODE/logos/ivcode-logo/tr:q-1/Wolf_BLACK__Transparent__tG3tQAaQM.png?updatedAt=1656026848414'
  }),
  getters: {
    // doubleCount: (state) => state.count * 2
  },
  actions: {
    themeControl() {
      this.themeActive = !this.themeActive
    }
  }
})
