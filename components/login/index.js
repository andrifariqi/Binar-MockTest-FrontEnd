import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { axiosLoginAccount } from "../../store/action/login";
import Link from "next/link";

export const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = () => {
    dispatch(axiosLoginAccount(email, password, router));
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold w-80">Login</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100" data-aos="fade-right" data-aos-duration="700" data-aos-easing="ease-in-sine">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" defaultValue={email} onChange={handleChangeEmail} required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" defaultValue={password} onChange={handleChangePassword} required />
              </div>

              <div className="flex flex-row justify-between font-semibold italic">
                <span />
                <Link href="/register">
                  <label className="label label-text-alt link link-hover text-md">Register</label>
                </Link>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary" onClick={handleLogin}>
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
