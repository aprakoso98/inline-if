# Inline-If

Inline If is a programming method to make a condition in a line.

## Installation

Use the package manager [node.js](https://node.js.org) to install inline-if.

```bash
npm install inline-if
```
or if you use yarn


```bash
yarn add inline-if
```

## Usage

Usually js inline condition

```javascript
render(){
   return condition ? <Text>Condition if true</Text> : <Text>Condition if else</Text>
}
```

change it to


```javascript
import iif from "inline-if"

render(){
   iif(condition)(
      <Text>Condition if true</Text>
   )(
      <Text>Condition if else</Text>
   )
}
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.