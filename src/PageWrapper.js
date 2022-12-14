import Navbar from "./Components/Navbar/Navbar";

export const PageWrapper = (props) => {
  return (
    <>
      <Navbar focus={props.focus} focusLiftState={props.focusLiftState} />
      {props.children}
    </>
  );
};
