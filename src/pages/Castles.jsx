import { NavBar } from '../first_components/NavBar/NavBar';
import { Footer } from '../first_components/Footer/Footer';
import { CardsActivities } from '../first_components/CardsActivities/CardsActivities';
import { Header } from '../first_components/Header/Header';
import { Separator } from '../first_components/Separator/Separator';
import { InfoPage } from '../first_components/InfoPage/InfoPage';
import CastleDatas from '../datas/castles.json';

export const Castles = () => {
  return (
    <>
      <Header typeOfCarousel="troisieme" />
      <NavBar />
      <Separator />
      <InfoPage />
      <Separator />
      <CardsActivities data={CastleDatas} />
      <Footer />
    </>
  );
};
