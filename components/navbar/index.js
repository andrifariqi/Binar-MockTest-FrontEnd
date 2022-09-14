import { useRouter } from "next/router";
import { removeUser } from "../../util";

import { DashboardModalComponent } from "../dashboard/modal";

export const NavbarComponent = () => {
  const router = useRouter();

  const handleLogout = () => {
    removeUser();
    router.push("/");
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
          </div>
          <DashboardModalComponent />
        </div>
        <div className="navbar-center hidden lg:flex"></div>
        <div className="navbar-end">
          <button className="btn btn-secondary" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      <div className="divider">Product List</div>
    </div>
  );
};
