import PropTypes from "prop-types";
const Button = ({ text, style, btnOnClick}) => {
  return (
    <button
      style={style}
      onClick={btnOnClick}
      className="block text-white border-none px-5 py-2.5 m-1.5 rounded cursor-pointer no-underline text-base font-inherit focus:outline-none active:scale-95"
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string
};

export default Button;
