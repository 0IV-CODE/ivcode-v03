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
import { mdiWeatherPartlyCloudy } from '@mdi/js'
import { mdiWeatherNightPartlyCloudy } from '@mdi/js'
import { mdiAccountNetworkOutline } from '@mdi/js'
import { mdiServerNetworkOutline } from '@mdi/js'
import { mdiCellphone } from '@mdi/js'
import { mdiLaptop } from '@mdi/js'
import { mdiSwapHorizontalHidden } from '@mdi/js'
import { mdiLink } from '@mdi/js'
import { mdiFormatAlignJustify } from '@mdi/js'

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
          // Black
          primary: '#000000',
          // White
          secondary: '#FFFFFF',
          // Red
          accent: '#A90000'
        }
      },
      light: {
        variables: {},
        dark: false,
        colors: {
          // Black
          primary: '#000000',
          // Darken Black
          secondary: '#262626',
          // Red
          accent: '#A90000'
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
      Wifi: mdiWifi,
      WeatherPartlyCloudy: mdiWeatherPartlyCloudy,
      WeatherNightPartlyCloudy: mdiWeatherNightPartlyCloudy,
      AccountNetworkOutline: mdiAccountNetworkOutline,
      ServerNetworkOutline: mdiServerNetworkOutline,
      Cellphone: mdiCellphone,
      Laptop: mdiLaptop,
      SwapHorizontalHidden: mdiSwapHorizontalHidden,
      Link: mdiLink,
      FormatAlignJustify: mdiFormatAlignJustify
    },
    sets: {
      mdi
    }
  }
})
