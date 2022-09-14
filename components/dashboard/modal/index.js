import { useState } from "react";
import { useDispatch } from "react-redux";
import { axiosCreateData } from "../../../store/action/dashboard";

export const DashboardModalComponent = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imageurl, setImageUrl] = useState("");

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
    dispatch(axiosCreateData(name, price, imageurl));
  };

  return (
    <div>
      <label htmlFor="createModal" className="btn btn-primary">
        Add
      </label>

      <input type="checkbox" id="createModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-3">Create Item</h3>

          <input type="text" placeholder="Product Name" className="input input-bordered input-primary w-full input-sm my-2" defaultValue={name} onChange={handleNameChange} />
          <input type="text" placeholder="Price (Dollar USD)" className="input input-bordered input-primary w-full input-sm my-2" defaultValue={price} onChange={handlePriceChange} />
          <input type="text" placeholder="Image Url" className="input input-bordered input-primary w-full input-sm my-2" defaultValue={imageurl} onChange={handleImageUrlChange} />

          <div className="modal-action">
            <button className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>

            <label htmlFor="createModal" className="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
