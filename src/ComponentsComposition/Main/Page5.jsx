import React from "react";

const Page5 = () => {
  return (
    <div id="page5" className="text-black h-[70vh] w-[100%] p-[30px]">
      <h1 className="text-center m-auto text-black">Appliances</h1>
      <p className="text-black text-center m-[-5px_0px_10px_0px] pb-[10px]">
        Servicing, Repair, Installation & Uninstallation
      </p>
      <ul className="text-black  h-[50vh] box-content w-[75%] flex m-[5px_auto_0px] list-none text-center justify-between items-center">
        <li className=" basis-[33%] box-content pr-[25px]">
          <img
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_c0667020.png"
            alt="Image"
            width="100%"
            className="ease-in-out rounded-[5px]"
          />
          <p className="text-[11px] mt-[12px] mb-[-5px]">Geyser</p>
          <small className="text-[11px] text-gray-500 font-medium">
            Starts at ₹249
          </small>
        </li>
        <li className=" text-black basis-[33%] box-content pr-[25px]">
          <img
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_bbb8c690.png"
            alt="Image"
            width="100%"
          />
          <p className="text-[11px] mt-[12px] mb-[-5px]">
            Water Purifier Services
          </p>
          <small className="text-[11px] text-gray-500 font-medium">
            Up to 45% Off
          </small>
        </li>
        <li className="cat3 text-black basis-[33%] box-content pr-[25px]">
          <img
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1635829954373-d05590.jpeg"
            alt="Image"
            width="100%"
          />
          <p className="text-[11px] mt-[12px] mb-[-5px]">
            Buy RO Water Purifier
          </p>
          <small className="text-[11px] text-gray-500 font-medium">
            Flat ₹100 off
          </small>
        </li>
      </ul>
    </div>
  );
};
export default Page5;
