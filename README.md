# Simple Color Library

## Installation

```sh
npm i @nousantx/color-library @nousantx/color-generator
```

## Usage

```js
import color from '@nousantx/color-library'
import { generateColors } from '@nousantx/color-generator'

const colors = generateColors({
  color,
  option: {
    output: 'hex',
    format: 'css'
  }
})

console.log(colors)
```
