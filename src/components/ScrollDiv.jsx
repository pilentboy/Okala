import React, { useRef } from "react";

const ScrollableDiv = () => {
  const scrollContainerRef = useRef(null);
  let isDragging = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDragging = true;
    scrollContainerRef.current.style.cursor = "grabbing";
    startX = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeft = scrollContainerRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = x - startX; // Calculate the distance moved
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    isDragging = false;
    scrollContainerRef.current.style.cursor = "grab";
  };

  return (
    <div
      ref={scrollContainerRef}
      className="w-full  h-40   flex items-center gap-10 overflow-x-auto cursor-grab"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {[...Array(10)].map((_, index) => (
        <div className="flex flex-col  w-28 h-fit items-center  ">
          <div key={index} className="w-[72px] bg-[#f0ebe8] flex-shrink-0 ">
            <img
              src="https://asset.okala.com/Media/Index_v2/Category/400970-nd"
          
            />
          </div>
          <span className="text-gray-800 text-center text-[11px] font-[300]  h-7 overflow-hidden">
            نوشیدنی ها
          </span>
        </div>
      ))}
    </div>
  );
};

export default ScrollableDiv;
