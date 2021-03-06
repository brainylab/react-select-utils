
[![CI - Publish Package](https://github.com/brainylab/react-select-utils/actions/workflows/publish.yml/badge.svg)](https://github.com/brainylab/react-select-utils/actions/workflows/publish.yml)
[![npm version](https://badge.fury.io/js/@brainylab%2Freact-select-utils.svg)](https://badge.fury.io/js/@brainylab%2Freact-select-utils)


# React Select Utils
Package with utilities for the react-select package

## Installation

Use the npm to install
```bash
npm install @brainylab/react-select-utils
```

Or use the yarn to install

```bash
yarn add @brainylab/react-select-utils
```

## Usage

```javascript
import { arrayConvert } from '@brainylab/react-select-utils'

const array = [
  {
    id: 1,
    name: 'device',
    ip: '10.0.0.1'
  }
  {
    id: 2,
    name: 'device-2',
    ip: '10.0.0.2'
  }
]

const arrayConverted = arrayConvert({ array, arrayLabel: "name", arrayValue: "id" })

console.log(arrayConverted)
// return
// [
//   {
//     label: 'device',
//     value: '1'
//   }
//   {
//     label: 'device-2',
//     value: '2'
//   }
// ]
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
