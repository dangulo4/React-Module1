let daniel = 'Daniel Angulo';
let hank = 'Hank Garland';
let grady = 'Grady Martin';
let bob = 'Bob Moore';
let george = 'George Barnes';
let junior = 'Junior Barnard';
let charlie = 'Charlie Christian';
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    color: 'blue',
    fontSize: '24px'
  }
}, /*#__PURE__*/React.createElement("li", null, daniel), /*#__PURE__*/React.createElement("li", null, hank), /*#__PURE__*/React.createElement("li", null, grady), /*#__PURE__*/React.createElement("li", null, bob), /*#__PURE__*/React.createElement("li", null, george), /*#__PURE__*/React.createElement("li", null, junior), /*#__PURE__*/React.createElement("li", null, charlie));
ReactDOM.render(element, document.getElementById('content'));