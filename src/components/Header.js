import Button from "./Button";

const Header = ({ title, toOpenForm, btntext, btnColor }) => {

  return (
    <header className="flex justify-between items-center mb-5">
      <h1>{title}</h1>
      <Button style = {btnColor} btnOnClick={toOpenForm} text={btntext} />
    </header>
  );
};
export default Header;
