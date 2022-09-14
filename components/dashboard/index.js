import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosShowData } from "../../store/action/dashboard";

import { DashboardCardComponent } from "./card";

export const DashboardComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(axiosShowData());
  }, [dispatch]);

  const dataList = useSelector((state) => {
    return state.dashboard.showData;
  });

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:grid-flow-row justify-items-center content-center">
      {dataList.map((data) => {
        return (
          <div key={data.id}>
            <DashboardCardComponent id={data.id} imageurl={data.imageurl} name={data.name} price={data.price} />
          </div>
        );
      })}
    </div>
  );
};
