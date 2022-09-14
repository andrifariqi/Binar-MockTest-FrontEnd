// import { useEffect } from "react";
// import { protectedRoute } from "../../middleware";
import { hasToken } from "../../util";

import { NavbarComponent } from "../../components/navbar";
import { DashboardComponent } from "../../components/dashboard";

export const Dashboard = () => {
  // useEffect(() => {
  //   protectedRoute();
  // }, []);

  hasToken();

  return (
    <div>
      <NavbarComponent />

      <DashboardComponent />
    </div>
  );
};

export default Dashboard;
