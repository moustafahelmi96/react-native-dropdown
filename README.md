react-native-dropdown is a javascript library that works on both android and ios

# Installation

``` npm install @moustafahelmi/react-native-dropdown ```

# Import

```bash
import PressableField from '@moustafahelmi/react-native-dropdown'
```

# Usage

```
<PressableField
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
/>
```


# Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
