import { NavLink } from "react-router-dom";

export default function HomeTop() {
  return (
    <div className="w-full h-20 my-2 flex items-start justify-between flex-row-reverse">
      <NavLink to={"/"}>
        <img
          src="https://asset.okala.com/unsigned/rs:fill/size:0:0/plain/s3:/cdn/static/react-ui-v2/okala-logo.svg"
          className="w-12"
        />
      </NavLink>

      <NavLink
        to={"auth"}
        className="flex text-sm items-center justify-center   h-6  typo-body-6 px-4  text-[#fd8012] bg-[#ffdca8]  font-semibold rounded-md"
      >
        ورود
      </NavLink>
    </div>
  );
}
