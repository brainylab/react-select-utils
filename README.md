<img src="https://img.shields.io/npm/v/@brainylab/react-select-utils"/>
<img src="https://github.com/brainylab/react-select-utils/actions/workflows/npm-publish.yml/badge.svg"/>


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