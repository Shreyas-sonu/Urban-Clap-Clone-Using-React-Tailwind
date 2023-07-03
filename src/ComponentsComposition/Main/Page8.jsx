import React from "react";

const Page8 = () => {
  return (
    <div className="text-[#111] h-[70vh] w-[100%] p-[30px]">
      <h1 className="text-center m-[5px 0px 0px] pb-[5px] ">
        UC Luxury Experience
      </h1>
      <p className="text-center m-[-5px 0px 5px 0px] pb-[10px]">
        Top Professionals | Best Brands | Premium Experience
      </p>
      <ul className="h-[50vh] w-[95%] pl-[25px] m-auto flex m-[5px auto 0px] text-center justify-between items-center">
        <li className="basis-[25%] pr-[25px]">
          <img
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883165804-025664.png"
            alt="Image"
            width="100%"
            className="ease-in-out duration-[0.6s] rounded-[5px] hover:scale-110"
          />
          <p className="text-sm mt-[12px] mb-[-5px]">Salon Luxe</p>
        </li>
        <li className="basis-[25%] pr-[25px]">
          <img
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883164057-dd5910.png"
            alt="Image"
            width="100%"
            className="duration-[0.6s] ease-in-out rounded-[5px] hover:scale-110"
          />
          <p className="text-sm mt-[12px] mb-[-5px]">Salon for Men Royale</p>
        </li>
        <li className="basis-[25%] pr-[25px]">
          <img
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883164904-165c1e.png"
            alt="Image"
            width="100%"
            className="duration-[0.6s] ease-in-out rounded-[5px] hover:scale-110"
          />
          <p className="text-sm mt-[12px] mb-[-5px]">Spa Luxe</p>
        </li>
        <li className="basis-[25%] pr-[25px]">
          <img
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883164502-08f9f6.png"
            alt="Image"
            width="100%"
            className="duration-[0.6s] ease-in-out rounded-[5px] hover:scale-110"
          />
          <p className="text-sm mt-[12px] mb-[-5px]">
            Massage Therapy for Men Royale
          </p>
        </li>
      </ul>
    </div>
  );
};
export default Page8;
