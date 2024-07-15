import PropTypes from "prop-types";

const RadioButtonOption = ({ id, name, value, label }) => (
  <div className="flex gap-8 items-center">
    <div>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        className="radio-button-large mr-2 my-4"
      />
    </div>
    <div>
      <label className="font-medium text-lg" htmlFor={id}>
        {label}
      </label>
    </div>
  </div>
);

export default RadioButtonOption;

RadioButtonOption.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
