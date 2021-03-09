# Stack

Implementation of a stack (...based on arrays and has an ordered strcuture) in JavaScript.

## Install

`git clone https://github.com/ahadb/stack`, create a tarball, or use directly for now

NPM:

`npm install other-stack`

## Use

```javascript
import Stack from 'other-stack';

const pile = new Stack();
// ...
```


## API

### `Constructor & Instance`

```javascript
const pile = new Stack();
```

### `pile.push`

Push an item that gets added to the top of the stack

```javascript
const pile = new Stack();

pile.push(1);
pile.push(2);
pile.push(3);
```

### `pile.pop`

Remove item from the top of the stack

```javascript
const pile = new Stack();

pile.pop();
```

### `stack.peek`

See which element is next in line

```javascript
const pile = new Stack();

pile.peek();
```

### `stack.toString`

Converts stack to string

## On Creating Your Own Data Structures

Note: you can create your data structures without using arrays as well, or even use my [linked-list](https://github.com/ahadb/linked-list)
as a base.

## Todo

- [ ] add isEmpty method


