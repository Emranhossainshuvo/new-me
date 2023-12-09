import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Banner from "../Banner/Banner";
import Swaiper from "../Swaiper/Swaiper";

const Home = () => {
  return (
    <div>
        <SectionTitle
        
        heading={'amar'}
        subHeading={'shonar bangla'}
        />
      <Banner></Banner>
      <Swaiper></Swaiper>
      <h3>This is home</h3>
    </div>
  );
};

export default Home;
