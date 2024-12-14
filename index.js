import { colors as color } from './dist/index.esm.js'
import { generateColors } from '@nousantx/color-generator'

const output = generateColors({
  color,
  option: {
    format: 'tailwind',
    output: 'hex'
  }
})

console.log(output.theme.colors)
