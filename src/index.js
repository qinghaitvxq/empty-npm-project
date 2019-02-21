
import React, { Component } from 'react';
// console
//     .log(
//     'hello' +
//         "my" +
// "friend"
//     )
// ;
// const test = 'hello world';

// class App extends Component {
//   render() {
//     return (
//       <div>hello</div>
//     )
//   }
// }

console
  .log(
    'hello'
    + 'my'
    + 'friend',
  );

// const bar = 10;

const work = Promise((resolve, reject) => {
  resolve('Some data');
});
work.then((data) => {
  console.log(data);
});


class App extends Component {
  componentDidMount() {
    console.log('test');
  }

  render() {
    return (
      <div>hello</div>
    );
  }
}
export default App;
