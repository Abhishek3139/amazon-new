import Navbar from "./Components/Navbar/Navbar";

export const PageWrapper = (props) => {
  return (
    <>
      <Navbar
        liftState={props.liftState}
        focus={props.focus}
        focusLiftState={props.focusLiftState}
      />
      {props.children}
    </>
  );
};
