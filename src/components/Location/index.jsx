import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Location = ({ inputHandler }) => (
  <div className="inputContainer">
    <label className="zipcodeLabel">Enter your zipcode</label>
    <input className="zipcodeInput" name="zipcode" type="number" pattern="^(?(^00000(|-0000))|(\d{5}(|-\d{4})))$" onChange={(event) => inputHandler(event.target.value)}/>
  </div>
);

Location.propTypes = {
  inputHandler: PropTypes.func.isRequired,
};
export default Location;
