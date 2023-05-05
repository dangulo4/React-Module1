let daniel = 'Daniel Angulo';
let hank = 'Hank Garland';
let grady = 'Grady Martin';
let bob = 'Bob Moore';
let george = 'George Barnes';
let junior = 'Junior Barnard';
let charlie = 'Charlie Christian';

const element = (
  <ul style={{ color: 'blue', fontSize: '24px' }}>
    <li>{daniel}</li>
    <li>{hank}</li>
    <li>{grady}</li>
    <li>{bob}</li>
    <li>{george}</li>
    <li>{junior}</li>
    <li>{charlie}</li>
  </ul>
);
ReactDOM.render(element, document.getElementById('content'));
