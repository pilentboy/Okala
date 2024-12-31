import { Bell, Plus } from "lucide-react";


export default function Offers() {
  return    <div className="w-full overflow-y-hidden h-[400px] px-5 gap-5 my-10 flex flex-col items-end">
  {/* top */}
  <div className="flex flex-col text-end">
    <span className="text-red-400 font-bold">اتایم</span>
    <span className="text-gray-600  text-sm ">پرتخفیفت ترین ها</span>
  </div>
  <div className="flex flex-row-reverse justify-between    gap-5 w-full overflow-hidden h-[400px]">
    <div className=" w-10 h-full relative  rounded-lg bg-red-600 flex  flex-col items-center py-4 justify-center text-white text-center ">
      <Bell
        size={20}
        className=" absolute top-5 left-1/2 translate-x-[-50%]"
      />
      <pre className=" text-sm rotate-[270deg] ">پرتخفیفت ترین ها </pre>
    </div>

    <div className="w-full  py-1 h-full  flex-col gap-10 overflow-x-auto ">
      <div className="flex w-full mb-4 gap-4">
        {Array(10)
          .fill()
          .map(() => (
            <div className="flex flex-col  rounded-2xl items-center py-2  h-[170px] w-[100px]  flex-shrink-0 justify-between bg-white">
              <div className="relative w-full h-24">
                <img
                  src="https://asset.okala.com/unsigned/rs:fill/size:192:192/quality:100/plain/s3://cdn/product/45927.png"
                  className="w-full h-full object-contain"
                />
                <span className="absolute top-1/2 right-4 border-white border bg-red-500 text-white  w-10    rounded-md  text-[12px] flex items-center  justify-center">
                  ۴۰%
                </span>
              </div>

              <div className="flex flex-col items-start ">
                <span className="flex  gap-1 line-through	 flex-row-reverse text-gray-500 text-[10px]  crossed ">
                  ۵۰.۰۰۰
                  <span>تومان</span>
                </span>
                <span className="flex 	 flex-row-reverse text-gray-800 text-sm  crossed gap-1 ">
                  ۲۵.۰۰۰ <span>تومان</span>
                </span>
              </div>

              <button className="border-t w-full flex items-center justify-center p-1">
                <Plus size={18} color="red" />
              </button>
            </div>
          ))}
      </div>
      <div className="flex  w-full gap-4">
        {Array(10)
          .fill()
          .map(() => (
            <div className="flex flex-col  rounded-2xl items-center py-2  h-[170px] w-[100px]  flex-shrink-0 justify-between bg-white">
              <div className="relative w-full h-24">
                <img
                  src="https://asset.okala.com/unsigned/rs:fill/size:192:192/quality:100/plain/s3://cdn/product/45927.png"
                  className="w-full h-full object-contain"
                />
                <span className="absolute top-1/2 right-4 border-white border bg-red-500 text-white  w-10    rounded-md  text-[12px] flex items-center  justify-center">
                  ۴۰%
                </span>
              </div>

              <div className="flex flex-col items-start ">
                <span className="flex  gap-1 line-through	 flex-row-reverse text-gray-500 text-[10px]  crossed ">
                  ۵۰.۰۰۰
                  <span>تومان</span>
                </span>
                <span className="flex 	 flex-row-reverse text-gray-800 text-sm  crossed gap-1 ">
                  ۲۵.۰۰۰ <span>تومان</span>
                </span>
              </div>

              <button className="border-t w-full flex items-center justify-center p-1">
                <Plus size={18} color="red" />
              </button>
            </div>
          ))}
      </div>
    </div>
  </div>
</div>
}
