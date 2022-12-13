import "./SignInPage.css";
import { Link } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";
export default function SignInpage() {
  return (
    <div className="signInLogo">
      <Link to="/">
        <img src="/img/Amazon_logo.svg.webp" alt="" />
      </Link>
      <div className="signInBox">
        <h1>Sign In</h1>
        <p>Email or mobile phone number</p>
        <input type="email" />
        <button>Continue</button>
        <br />
        <span>
          By continuing, you agree to Amazon's<a href=""> Conditions of Use</a>
          and
          <a href="#">Privacy</a>
        </span>
        <br />
        <div className="lastlink">
          <a href="#">
            <FaCaretRight id="arrow" />
            Need help?
          </a>
        </div>
      </div>
      <div className="hrline">
        <hr id="line" />
        New to Amazon?
        <hr id="line" />
      </div>

      <button className="createId">Create your Amazon account</button>
      <hr />
      <div className="footer">
        <a href="#">Conditions of Use</a>
        <a href="#">Privacy Notice</a>
        <a href="#">Help</a>
        <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
      </div>
    </div>
  );
}
