import { DashboardModalUpdateComponent } from "../modal/update";
import { DashboardModalDeleteComponent } from "../modal/delete";

export const DashboardCardComponent = (props) => {
  return (
    <div className="flex items-stretch">
      <div className="card w-48 md:w-60 bg-base-100 shadow-xl my-3 mx-3 ">
        <figure>
          <img src={props.imageurl} alt={props.name} className="h-36" />
        </figure>

        <div className="flex justify-between my-2 mx-2">
          <DashboardModalUpdateComponent id={props.id} name={props.name} price={props.price} imageurl={props.imageurl} />
          <DashboardModalDeleteComponent id={props.id} name={props.name} />
        </div>

        <div className="card-body">
          <h2 className="card-title h-16 md:h-12 md:w-48">
            {props.name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <div className="card-actions justify-center md:justify-between">
            <div className="badge badge-outline">$ {props.price}</div>
            <div className="badge badge-outline">Id : {props.id}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
