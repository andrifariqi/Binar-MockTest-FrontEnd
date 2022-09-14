import { useDispatch } from "react-redux";
import { axiosDeleteData } from "../../../../store/action/dashboard";

export const DashboardModalDeleteComponent = (props) => {
  const id = props.id;

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(axiosDeleteData(id));
  };

  return (
    <div>
      <label htmlFor={id} className="btn btn-error btn-sm">
        Delete Item
      </label>
      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-3">Delete Item</h3>
          <p>Are you sure want to delete "{props.name}"</p>
          <div className="modal-action">
            <button className="btn btn-error" onClick={handleSubmit}>
              Submit
            </button>
            <label htmlFor={id} className="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
