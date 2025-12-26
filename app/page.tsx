import Header from "./components/layout/Header";
import MainSection from "./components/sections/MainSection";
import Clients from "./components/sections/Clients";
import Technology from "./components/sections/Technology";
import Slogan from "./components/sections/Slogan";
import PersonalCab from "./components/sections/PersonalCab";
import Advantages from "./components/sections/Advantages";
import Map from "./components/sections/mapSec/Map";
import Registration from "./components/sections/Registration";
import Footer from "./components/layout/Footer";
import { Review } from "./components/sections/reviewSec/Review";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <MainSection />
        <Clients />
        {/* <Technology />
        <Slogan />
        <PersonalCab />
        <Advantages />
        <Review />
        <Map />
        <Registration />*/}
      </main>
    </>
  );
}
