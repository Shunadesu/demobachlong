"use client";

import { DailySalesList } from "./dailylists/DailySalesList";
import Iphone16Canvas from "./layoutComponents/Iphone16Canvas";
import Iphone16Description from "./layoutComponents/Iphone16Des";


export default function DailySales() {
  return (
    <div className="max-w-[1880px] w-full flex flex-col mx-auto justify-center items-center">
      <div className="max-w-[1440px] w-full h-full relative flex justify-center items-center flex-col">
        <div className="flex w-full min-h-[70vh] justify-center items-center">
          
          <div className="w-[800px] h-[500px] flex justify-center flex-col items-center rounded-2xl shadow-lg">
            <Iphone16Canvas/>
            <p className="text-xl pb-4 gradient-text">IPHONE 15 PROMAX</p>
          </div>
          <Iphone16Description />
        </div>

        <div className="w-full flex gap-8 justify-center items-center flex-col">
          <h1 className="text-4xl gradient-text font-bold w-full text-center uppercase">Our Iphone Product</h1>
          <DailySalesList />
        </div>
      </div>
    </div>
  );
}
