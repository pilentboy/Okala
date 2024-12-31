import CustomSlider from "../CustomSlider";
import ScrollableDiv from "../components/ScrollDiv";
import HomeTop from "../components/HomeTop";
import Offers from "../components/Offers";

const Home = () => {
  return (
    <div className="w-full py-8 overflow-x-hidden full flex flex-col">
      <HomeTop />
      <CustomSlider />
      <ScrollableDiv />
      <Offers />
    </div>
  );
};

export default Home;
