import React from "react";

const Page6 = () => {
  return (
    <div id="page6" className="text-black h-[70vh] w-[100%] p-[30px]">
      <h1 className="text-center m-[5px_0px_0px] pb-[5px] text-black">
        Salon, Spa and Massage services
      </h1>
      <p className="text-black text-center m-[-5px_0px_5px_0px] pb-[10px]">
        Hygienic & Single use products | Low-contact services
      </p>
      <ul className="text-black  h-[50vh] box-content w-[95%] flex m-[5px_auto_0px] list-none text-center justify-between items-center">
        <li className="cat1 basis-[25%] box-content pr-[25px]">
          <img
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1603078782132-dfcd55.jpeg"
            alt="Image"
            width="100%"
            className="ease-in-out rounded-[5px]"
          />
          <p className="text-[11px] mt-[12px] mb-[-5px]">Salon Prime</p>
          <small className="text-[11px] text-gray-500 font-medium">
            Free Waxing
          </small>
        </li>
        <li className="cat2 basis-[25%] box-content pr-[25px]">
          <img
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1615874646690-66ab68.jpeg"
            alt="Image"
            width="100%"
            className="ease-in-out rounded-[5px]"
          />
          <p className="text-[11px] mt-[12px] mb-[-5px]">Salon for Men</p>
          <small className="text-[11px] text-gray-500 font-medium">
            Flat ₹100 off
          </small>
        </li>
        <li className="cat3 basis-[25%] box-content pr-[25px]">
          <img
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1601893536279-77bf02.png"
            alt="Image"
            width="100%"
            className="ease-in-out rounded-[5px]"
          />
          <p className="text-[11px] mt-[12px] mb-[-5px]">Spa for Women</p>
          <small className="text-[11px] text-gray-500 font-medium">
            Free head massage
          </small>
        </li>
        <li className="cat4 basis-[25%] box-content pr-[25px]">
          <img
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/supply/customer-app-supply/1606211470897-f4afbc.jpeg"
            alt="Image"
            width="100%"
            className="ease-in-out rounded-[5px]"
          />
          <p className="text-[11px] mt-[12px] mb-[-5px]">Massage for Men</p>
          <small className="text-[11px] text-gray-500 font-medium">
            Starts at ₹499
          </small>
        </li>
      </ul>
    </div>
  );
};
export default Page6;
