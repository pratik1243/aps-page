import React from "react";
import TextField from "../commonComponents/TextField";
import Button from "../commonComponents/Button";
import { FaCheck } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import { FaApple } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { RiMetaLine } from "react-icons/ri";
import { LuEyeClosed } from "react-icons/lu";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import ApsLogo from "../commonComponents/ApsLogo";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login-section">
      <div className="logo-sec">
         <ApsLogo textColor={'#fff'} />
      </div>
      <div className="left-sec">
        <div className="inner-sec">
          <h3 className="heading">
            Expert Level Cybersecurity in <span>hours</span> not weeks.
          </h3>

          <div className="features-sec">
            <h4>What's included</h4>

            <ul>
              <li>
                <FaCheck />
                <p>
                  Effortlessly spider and map targets to uncover hidden security
                  flaws
                </p>
              </li>
              <li>
                <FaCheck />
                <p>
                  Deliever high quality, validated findings in hours, not weeks.
                </p>
              </li>
              <li>
                <FaCheck />
                <p>
                  Generate professional, enterprise-grade security reports
                  automatically.
                </p>
              </li>
            </ul>
          </div>

          <div className="rating-sec">
            <div className="txt-1">
              <IoIosStar size={17} /> Trustpilot
            </div>
            <div>
              <span className="txt-2">Rated: 4.5/5.0</span>
              <span className="txt-3">(100k+ reviews)</span>
            </div>
          </div>
        </div>
      </div>
      <div className="right-sec">
        <div className="form-section">
          <div className="heading-sec">
            <h4>Sign Up</h4>
            <p>
              Already have an account? <a href="#">Log in</a>
            </p>
          </div>
          <div>
            <TextField placeholder="First name*" width={93} />
            <TextField placeholder="Last name*" width={93} />
            <TextField placeholder="Email address*" width={93} />
            <TextField
              type="password"
              placeholder="Password (8+characters)*"
              width={93}
              passwordIcon={(ispass) =>
                ispass ? (
                  <LuEyeClosed size={18} />
                ) : (
                  <MdOutlineRemoveRedEye size={20} />
                )
              }
            />
          </div>

          <div className="form-button-section">
            <Button
              fullwidth
              text={"Create account"}
              color={"#0e9e9e"}
              roundEdges={20}
              onClick={()=>{
                navigate('/dashboard')
              }}
            />
            <Button
              fullwidth
              icon={<FaApple size={18} />}
              color={"#000"}
              roundEdges={20}
            />
            <Button
              fullwidth
              icon={<FcGoogle size={18} />}
              color={"#f9f2ef"}
              roundEdges={20}
            />
            <Button
              fullwidth
              icon={<RiMetaLine size={18} />}
              color={"#3d6ddf"}
              roundEdges={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
