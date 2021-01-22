## Test Assignment: Middle ReactNative developer for GoodDollar
____
## React Native Web with TypeScript 
____
#### For responsive layout used:
* custom DeviceSize.pass() util
* custom DeviceSize.select() util
* isDeviceS, isDeviceM, isDeviceL, isDeviceXL variables
* general screen size (s = [<340], m = [340><450], l = [450><1024], xl = [1024>])
---
#### About custom `DeviceSize.select()` util:
* We have the set size boundaries: 
   * **XL** - `deviceWidth > 1024`
   * **L** - `1024 <= deviceWidth >= 450`
   * **M** - `450 < deviceWidth >= 340`
   * **S** - `340 < deviceWidth`
* The `DeviceSize.select()` function takes an object as a parameter  `{ s?, m?, l?, xl?, _default? }` and works like a function `Platform.select()` from React Native core. We pass styles (or any functionality) to specific screen size, and the function return styles (or any functionality) for current screen size.
* For example we can call like this,and depending on the current size, the desired value will return: **↓**
```javascript  
{ fontSize: DeviceSize.select({ s: 12, m: 14, l: 16, xl: 18 }) }
```
* Or we can only define some values, and set a default value for the rest of the sizes: **↓**
```javascript
{ width: DeviceSize.select({ s: 200, m: 300, _default: 500 }) }
```
* Other examples: **↓**
```jsx
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: DeviceSize.select({xl: 'wrap', _default: 'nowrap'})
  },

  button: DeviceSize.select({
    xl: {
      width: '100%',
      height: 60
    },
    l: {
      width: '90%',
      height: 50
    },
    _default: {
      width: 310,
      height: 45
    }
  }),

  titleContainer: {
    height: DeviceSize.select({
      s: () => callSomeFuncForCalcHeight(),
      m: () => callOtherFuncForCalcHeight(),
      _default: () => callFuncForCalcDefaultHeight()
    })(),
  }
})
```
---

#### About custom `DeviceSize.pass()` util:
* the `pass()` function works like `select()`, but we pass array instead of object.
* The `DeviceSize.pass()` function takes an array as a parameter  `[s?, m?, l?, xl?, _default? ]`.
* Examples: **↓**
```javascript
{ width: DeviceSize.pass([200, 300, , , 500 ]) }
```
```javascript
{ fontSize: DeviceSize.pass([12, 14, 16, 18 ]) }
```

 
---
#### Why exactly this screen sizes?
* size **S** - iPhone SE, iPhone 4-5, small Android device
* size **M** - iPhone 6-8, middle Android device
* size **L** - iPhone X-12, iPad Mini-Pro, large Android device, tablets
* size **XL** - laptop, pc, browser size
---
#### For cross platform layout used:
* different filenames (name.web.ts, name.android.ts, name.ios.ts) for specific platforms
* Platform.OS util from React Native core
* Platform.select() util from React Native core
* isWeb, isAndroid, isIOS, isNative variables

Display of Examples:
 ------------
## Android (Google Pixel 2), etc
![Example 0](examples/Pixel2.png)

## iPhone SE, iPhone 4, etc
![Example 1](examples/iPhoneSE.png)

## iPhone 6, 7, 8, etc
![Example 2](examples/iPhone8.png)

## iPhone X, 11, 12, etc
![Example 3](examples/iPhone11ProMax.png)

## Laptop, Desktop, Browser, etc
![Example 4](examples/Browser.png)

## Mobile Browser
![Example 5](examples/MobileBrowser.png)
