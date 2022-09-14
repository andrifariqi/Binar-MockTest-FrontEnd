import { useState } from "react";
import { useDispatch } from "react-redux";
import { axiosUpdateData } from "../../../../store/action/dashboard";

export const DashboardModalUpdateComponent = (props) => {
  const [name, setName] = useState(props.name);
  const [price, setPrice] = useState(props.price);
  const [imageurl, setImageUrl] = useState(props.imageurl);

  const id = props.id;

  const dispatch = useDispatch();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };
  const handleSubmit = () => {
    dispatch(axiosUpdateData(id, name, price, imageurl));
  };

  return (
    <div>
      <label htmlFor={props.name} className="btn btn-success btn-sm">
        Edit Item
      </label>

      <input type="checkbox" id={props.name} className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-3">Edit Item</h3>
          <input type="text" placeholder="Product Name" className="input input-bordered input-primary w-full input-sm my-2" defaultValue={name} onChange={handleNameChange} />
          <input type="text" placeholder="Price (Dollar USD)" className="input input-bordered input-primary w-full input-sm my-2" defaultValue={price} onChange={handlePriceChange} />
          <input type="text" placeholder="Image Url" className="input input-bordered input-primary w-full input-sm my-2" defaultValue={imageurl} onChange={handleImageUrlChange} />
          <div className="modal-action">
            <button className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
            <label htmlFor={props.name} className="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
