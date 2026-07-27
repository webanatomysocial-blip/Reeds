import Image from "next/image";
import "./(Css)/index.css";
import HomeBanner from "./(Components)/(Home)/HomeBanner";
import TickerTape from "./(Components)/(Home)/TickerTape";


const Home = () => {
  return (
    <>
      <HomeBanner />
      <TickerTape />
    </>
  );
}


export default Home;