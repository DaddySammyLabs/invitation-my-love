import styles from "./Home.module.css";

import Navigation from "../components/Navigation/Navigation";
import Hero from "../components/Hero/Hero";
import Invitation from "../components/Invitation/Invitation";

function Home() {
  return (
    <div className={styles.home}>
      <main className={styles.main}>
        <Hero />
        <Invitation />
      </main>

      <Navigation />
    </div>
  );
}

export default Home;

// import Timer from "../components/Timer/Timer";
// import Location from "../components/Location/Location";
// import Program from "../components/Program/Program";
// import Photos from "../components/Photos/Photos";
// import DressCode from "../components/DressCode/DressCode";
// import RSVP from "../components/RSVP/RSVP";
// import Footer from "../components/Footer/Footer";

// <Timer />
// <Location />
// <Program />
// <Photos />
// <DressCode />
// <RSVP />
// <Footer />
