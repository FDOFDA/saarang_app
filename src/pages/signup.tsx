import { MyForm } from "./form";
import "./design/form_style.css";
import Image from "react-bootstrap/Image";

export const Signup = () => {
  return (
    <div>
      <Image src="/images/insta.png" className="saarang-image" />

      <a className="btn btn-primary Login-btn" href="#" role="button">
        LOG IN
      </a>

      <MyForm />
      <div id="container2">
        <a href="https://www.instagram.com/saarang_iitmadras/" className="social-image">
          <Image src="/images/insta.png" alt="Instagram_Page" />
        </a>

        <a href="https://www.instagram.com/saarang_iitmadras/" className="social-image">
          <Image src="/images/insta.png" alt="Instagram_Page" />
        </a>

        <a href="https://www.instagram.com/saarang_iitmadras/" className="social-image">
          <Image src="/images/insta.png" alt="Instagram_Page" />
        </a>

        <a href="https://www.instagram.com/saarang_iitmadras/" className="social-image end-image">
          <Image src="/images/insta.png" alt="Instagram_Page" />
        </a>
      </div>
    </div>
  );
};
