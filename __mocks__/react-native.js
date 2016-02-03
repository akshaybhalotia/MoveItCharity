var React = require('react');

var ReactNative = React;

ReactNative.StyleSheet = {
    create: function(styles) {
        return styles;
    }
};

class View extends React.Component {
  render() {
    return false;
  }
}

ReactNative.AppRegistry = {
  registerComponent: jest.genMockFn()
}

ReactNative.View = View;

module.exports = ReactNative;
