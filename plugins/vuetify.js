// MDI - JS SVG (ADV - Optimized)
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

// Import Icons Here
import { mdiFolderNetworkOutline } from '@mdi/js'
import { mdiCloseNetwork } from '@mdi/js'
import { mdiMenuUpOutline } from '@mdi/js'
import { mdiMenuDownOutline } from '@mdi/js'
import { mdiFolderOutline } from '@mdi/js'
import { mdiFolderOpenOutline } from '@mdi/js'
import { mdiBattery40 } from '@mdi/js'
import { mdiSignalCellular2 } from '@mdi/js'
import { mdiWifi } from '@mdi/js'

// Vuetify
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
  // fix: font issue can't change default font
  defaultAssets: false,
  theme: {
    defaultTheme: 'light',
    themes: {
      dark: {
        variables: {},
        dark: true,
        colors: {
          // orange
          primary: '#3D3D3D',
          purple: '#555262',
          darkGrey: '#3D3D3D'
        }
      },
      light: {
        variables: {},
        dark: false,
        // orange
        colors: {
          secondary: '#FFFFFF',
          darkGrey: '#3D3D3D'
        }
      }
    }
  },
  icons: {
    defaultSet: 'mdi',
    /* place imported icons below to alias in front-end
      EX: icon="$Plus" */
    aliases: {
      ...aliases,
      FolderNetworkOutline: mdiFolderNetworkOutline,
      CloseNetwork: mdiCloseNetwork,
      MenuUpOutline: mdiMenuUpOutline,
      MenuDownOutline: mdiMenuDownOutline,
      FolderOutline: mdiFolderOutline,
      FolderOpenOutline: mdiFolderOpenOutline,
      Battery40: mdiBattery40,
      SignalCellular2: mdiSignalCellular2,
      Wifi: mdiWifi
    },
    sets: {
      mdi
    }
  }
})
