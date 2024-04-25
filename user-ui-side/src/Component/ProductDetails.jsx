import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(
      `https://user-server-side.vercel.app/singleProduct/${id}`
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault;
    const form = e.target;
    const name = form.name.value;
    const area = form.area.value;
    const village = form.village.value;
    const image = form.image.value;
    const user = { name, area, village, image };
    fetch(
      `https://user-server-side.vercel.app/updateProduct/${id}`,
      {
        method: "PUT",
        headers: { "content-type": "application/JSON" },
        body: JSON.stringify(user),
      }
    );
    console.log(user);
  };

  return (
    <div>
      <form className="space-y-5" onSubmit={handleUpdate}>
        <input
          type="text"
          name="name"
          defaultValue={data.name}
          placeholder="Type here"
          className="input input-bordered input-error w-full max-w-xs"
        />{" "}
        <br />
        <input
          type="text"
          name="area"
          defaultValue={data.area}
          placeholder="Lived Area"
          className="input input-bordered input-error w-full max-w-xs"
        />{" "}
        <br />
        <input
          type="text"
          name="village"
          defaultValue={data.village}
          placeholder="Village area"
          className="input input-bordered input-error w-full max-w-xs"
        />
        <br />
        <input
          type="text"
          name="image"
          defaultValue={data.image}
          placeholder="Image link"
          className="input input-bordered input-error w-full max-w-xs"
        />
        <br />
        <button className="btn btn-warning">Update</button>
      </form>
    </div>
  );
};

export default ProductDetails;
