react-native-dropdown is a javascript library that works on both android and ios

# Installation

`npm install @moustafahelmi/react-native-dropdown`

# Import

```bash
import Dropdown from '@moustafahelmi/react-native-dropdown'
```

# Usage

```
<Dropdown
  buttonTitle={'done'}
  dataArray={dummyData}
  onSelect={selected => {
    console.log('selected', selected) // {key: "hey2", value:"value 1"}
  }}
  dropDownImage={require('../../assets/images/arrow.png')}
  imageSize={screenWidth * 0.05}
  fieldWidth={screenWidth * 0.9}
  fieldHeight={screenHeight * 0.06}
  placeholder={'dropdown'}
  placeholderColor={'grey'}
  textColor={'black'}
  value={'value2'}
/>
```

# Demo

![react-native-dropdown demo](https://user-images.githubusercontent.com/51541292/96886014-7750fe00-1483-11eb-903d-4fae3058d9a6.gif)

# Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
