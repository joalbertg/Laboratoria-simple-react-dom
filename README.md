# React-DOM

* React.DOM._<Element>_(options, children);
* React.createElement('Element', options, children);

```js
const Header = props => {
  const DOM = React.DOM;
  return DOM.header(null, DOM.h1(null, props.titulo),
    DOM.p(null, props.parrafo));
};
```

```js
const Header = props => {
  return React.createElement('header', null,
    React.createElement('h1', null, props.titulo),
    React.createElement('p', null, props.parrafo));
};
```
