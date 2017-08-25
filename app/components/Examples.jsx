var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples!</h1>
      <p>Here are a few example locations to try out:</p>
      <ul>
        <li>
          <Link to='/?location=Amman'>Amman</Link>
        </li>
        <li>
          <Link to='/?location=Kiev'>Kiev, Ukraine</Link>
        </li>
      </ul>
    </div>
  );
};

module.exports = Examples;
