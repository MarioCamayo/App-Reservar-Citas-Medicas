import { Banner } from "../componets/Banner";
import { Footer } from "../componets/Footer";
import { Header } from "../componets/Header"
import { TopDoctors } from "../componets/TopDoctors";
import { SpecialityMenu } from './../componets/SpecialityMenu';

export const Home = () => {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <TopDoctors />
      <Banner />
      <Footer />
    
    </div>
  )
}
