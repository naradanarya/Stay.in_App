import Feed from "../../components/feed/Feed";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import "./home.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="homeContainter">
        <span className="spanContent">
          Meet the world, Let's make your best Staycation ever !
        </span>
        <img
          src="data:image/jpeg;base64,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"
          alt="homePicture"
          className="homeImage"
        />
      </div>
      <Feed />
      <div className="homeContent">
        <span className="spanContent2">Why Staycation</span>
        <img
          src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="cardContent"
          className="cardContent1"
        />
        <img
          src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="cardContent2"
          className="cardContent2"
        />
      </div>
      <Footer />
    </>
  );
}