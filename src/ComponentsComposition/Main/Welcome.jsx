import React from "react";

const Welcome = () => {
  return (
    <div id="page1" className="w-[100%] h-[80vh] mt-9">
      <p className="text-center pt-[8vh]">
        <small>
          <sub>Home / Delhi-Ncr</sub>
        </small>
        <br />
        <span className="text-5xl font-bold inline-block mt-[12px] mb-[25px] mx-0">
          Home services, on demand.
        </span>
        <br />
        <span className="search" style={{ position: "relative" }}>
          <img
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_template/images/supply/partner-app-supply/1661338258375-6c99b1.png"
            alt=""
            width="25px"
            style={{ position: "absolute", left: "2%", top: "12%" }}
          />
          <select
            id="count"
            className="w-[15vw] h-[10vh] rounded-md mr-[1%] p-2 pl-12 text-base text-black"
          >
            <option value="Delhi NCR">Delhi NCR</option>
            <option value="Pakistan"></option>
            <option value="China"></option>
          </select>
          <i
            className="fa-solid fa-magnifying-glass"
            style={{
              position: "absolute",
              color: "grey",
              top: "12%",
              left: "29%",
              fontSize: "20px",
            }}
          ></i>
          <input
            type="search"
            placeholder="Search for Devices"
            className="w-[45vw] h-[10vh] rounded-md py-[10px] pl-12 text-sm"
            id="inp1"
          />
        </span>
        <br />
        <small className="text-base font-medium inline-block mt-3">
          <u>Women's Therapies</u>, <u>Salon for Men</u>, <u>Men's Therapies</u>
          etc
        </small>
      </p>
    </div>
  );
};

export default Welcome;
