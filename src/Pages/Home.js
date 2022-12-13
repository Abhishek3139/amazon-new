import Box from "../Components/Box/Box";
import Checkout from "../Components/CheckOut/CheckOut";
import HoodiesList from "../Components/HoodiesList/HoodiesList";
import ImageSlider from "../Components/ImageSlider/ImageSlider";
import LocalShopCollection from "../Components/Local shops collection/LocalShopCollection";
import SignIn from "../Components/SignIn/SignIn";
import SingleBoxBanner from "../Components/SingleBoxBanner/SingleBoxBanner";
import TreandingList from "../Components/TreandingList/TreandingList";
import {
  BeautyCare,
  birthday,
  BOX_DATA,
  BOX_DATA_2,
  electronicsDevices,
  hoodiesData,
  LocalShopsCollectionData,
} from "../shared/constants";

export const Home = (props) => {
  return (
    <div onClick={props.focusOut}>
      <TreandingList />
      <ImageSlider />
      <div className="flexbox">
        <div className="subbox1">
          <Box data={BOX_DATA} />
          <SignIn />
        </div>
        <div className="subbox2">
          <Box data={BOX_DATA_2} />
        </div>
        <LocalShopCollection
          heading={"Refresh your home ambiance | Local shops collection"}
          link={"See all offers"}
          img={LocalShopsCollectionData}
        />
        <div style={{ display: "flex" }}>
          <SingleBoxBanner bd={birthday} />
          <Box data={electronicsDevices} />
        </div>
        <LocalShopCollection
          heading={"Frequently repurchased in Beauty & Personal Care"}
          img={BeautyCare}
        />
        <HoodiesList hd={hoodiesData} />
      </div>
    </div>
  );
};
