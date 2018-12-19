import Typography from 'typography'
import Doelger from 'typography-theme-doelger'

Doelger.baseFontSize = '28px'

const typography = new Typography(Doelger)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
