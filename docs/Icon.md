![Vector Icons for React Native](https://cloud.githubusercontent.com/assets/378279/12009887/33f4ae1c-ac8d-11e5-8666-7a87458753ee.png)

Perfect for buttons, logos and nav/tab bars. Easy to extend, style and integrate into your project.

## Main advantages over `react-native-icons`

* You can use your own custom icon sets. Supports SVG via [Fontello](http://fontello.com) or regular icon fonts.
* You can use *native* `TabBarIOS`.
* You can use icons inline with `Text` components as emojis or to create buttons.
* You can use the icon as an image if a native component requires it (such as `NavigatorIOS`).
* Most common use cases is JavaScript only and thus enables wider possibilities of styling (and is easier to integrate with your project).
* No need to define `width` and `height` styles.
* Presentational stuff like size and color can be defined in your stylesheet instead of via a property (if you want to).
* Icons scale with accessibility settings (unless disabled).

*Pst! Migrating from `react-native-icons`? Scroll down for more information.*

## Bundled Icon Sets

* [`Ionicons`](http://ionicframework.com/docs/v2/ionicons/) by Ben Sperry (v3.0.0, **859** icons)

*Note: you need to recompile your project after adding new fonts, also ensure that the `Fonts` folder also appear under __Copy Bundle Resources__ in __Build Phases__.*

## `Icon` Component
You can either use one of the bundled icons above or roll your own custom font.

```js
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = (<Icon name="rocket" size={30} color="#900" />)
```

### Properties
Any [Text property](http://facebook.github.io/react-native/docs/text.html) and the following:

| Prop | Description | Default |
|---|---|---|
|**`size`**|Size of the icon, can also be passed as `fontSize` in the style object. |`12`|
|**`name`**|What icon to show, see Icon Explorer app or one of the links above. |*None*|
|**`color`**|Color of the icon. |*Inherited*|

### Styling
Since `Icon` builds on top of the `Text` component, most [style properties](http://facebook.github.io/react-native/docs/style.html) will work as expected, you might find it useful to play around with these:

* `backgroundColor`
* `borderWidth`
* `borderColor`
* `borderRadius`
* `padding`
* `margin`
* `color`
* `fontSize`

NOTE: On android `Text` doesn't currently support `border*` styles, to circumvent this simply wrap your `Icon` with a `View`.  

By combining some of these you can create for example :

![type](https://cloud.githubusercontent.com/assets/378279/7667570/33817554-fc0d-11e4-9ad7-4eb60139cfb7.png)
![star](https://cloud.githubusercontent.com/assets/378279/7667569/3010dd7e-fc0d-11e4-9696-cb721fe8e98d.png)

## `Icon.Button` Component
A convenience component for creating buttons with an icon on the left side.

```js
import Icon from 'react-native-vector-icons/FontAwesome';
const myButton = (
  <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={this.loginWithFacebook}>
    Login with Facebook
  </Icon.Button>
);

const customTextButton = (
  <Icon.Button name="facebook" backgroundColor="#3b5998">
    <Text style={{fontFamily: 'Arial', fontSize: 15}}>Login with Facebook</Text>
  </Icon.Button>
);
```

![buttons](https://cloud.githubusercontent.com/assets/378279/7667568/2e9021b2-fc0d-11e4-8e68-cf91c329a6f4.png)

### Properties
Any [`Text`](http://facebook.github.io/react-native/docs/text.html), [`TouchableHighlight`](http://facebook.github.io/react-native/docs/touchablehighlight.html) or [`TouchableWithoutFeedback`](http://facebook.github.io/react-native/docs/touchablewithoutfeedback.html) property in addition to these:

| Prop | Description | Default |
|---|---|---|
|**`color`**|Text and icon color, use `iconStyle` or nest a `Text` component if you need different colors.|`white`|
|**`size`**|Icon size.|`20`|
|**`iconStyle`**|Styles applied to the icon only, good for setting margins or a different color.|`{marginRight: 10}`|
|**`backgroundColor`**|Background color of the button.|`#007AFF`|
|**`borderRadius`**|Border radius of the button, set to `0` to disable. |`5`|
|**`onPress`**|A function called when the button is pressed. |*None*|

## Examples

### IconExplorer
Try the `IconExplorer` project in `Examples/IconExplorer` folder, there you can also search for any icon.

![Screenshot of IconExplorer](https://cloud.githubusercontent.com/assets/378279/8903470/a9fe6b46-3458-11e5-901f-98b7b676d0d3.png)


### Basic Example
```js
import Icon from 'react-native-vector-icons/Ionicons';

function ExampleView(props) {
  return (<Icon name="ios-person" size={30} color="#4F8EF7" />);
}
```

### Inline Icons
```js
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function ExampleView(props) {
  return (<Text>Lorem <Icon name="ios-book" color="#4F8EF7" /> Ipsum</Text>);
}
```

## Troubleshooting

#### The icons show up as a crossed out box on Android
* Make sure you've copied the font to `android/app/src/main/assets/fonts`.
* Delete the `android/app/build` folder.
* Recompile the project.

#### Red screen with "Unrecognized font family" error on iOS
* Make sure you've added the fonts to your XCode project.
* Check that the font you are trying to use appears in `Info.plist`, if you've added the whole folder and it's blue in color, then you need to add it to the path.
* Check that the font is copied in the *Copy Bundle Resources in Build Phases*.
* Recompile the project.

#### Android build fails on Windows for no good reason

Both npm and android file hierarchies tend to get very deep and even worse when you combine them. Since Windows file system has a max length, long file name addresses will result in numerous errors including `Execution failed for task ':react-native-vector-icons:processReleaseResources'`. So try to keep the path to your project folder as short as possible.

## License

This project is licenced under the [MIT License](http://opensource.org/licenses/mit-license.html).

Any bundled fonts are copyright to their respective authors and mostly under MIT or [SIL OFL](http://scripts.sil.org/OFL).
