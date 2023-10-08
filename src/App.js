import HeroSection from "./HeroSection";
import NavBar from "./NavBar";

import brownPants from "./img/pant-1.webp";
import blackShirt from "./img/shirt-2.jpg";
import bestSeller from "./img/best-seller.webp";

export default function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

function Header() {
  return (
    <header>
      <NavBar />
      <HeroSection />
    </header>
  );
}

function Main() {
  return (
    <>
      <MainItem
        name="Comfy T-Shirts & Hoodies"
        img={<img src={blackShirt} alt="Black Shirt" />}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam tenetur
        recusandae modi voluptatum pariatur ut eius earum vel! Eum, amet in eius
        earum rerum quas doloremque velit accusantium fugit itaque?
      </MainItem>
      <MainItem
        name="Comfy Pants"
        img={<img src={brownPants} alt="Brown pants" />}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam tenetur
        recusandae modi voluptatum pariatur ut eius earum vel! Eum, amet in eius
        earum rerum quas doloremque velit accusantium fugit itaque?
      </MainItem>
      <MainItem
        name="705-Hoodie"
        isBestSeller={true}
        img={<img src={bestSeller} alt="Brown pants" />}
        price={700}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam tenetur
        recusandae modi voluptatum pariatur ut eius earum vel! Eum, amet in eius
        earum rerum quas doloremque velit accusantium fugit itaque?
      </MainItem>
    </>
  );
}

function MainItem({ children, name, img, price, isBestSeller = false }) {
  return (
    <div className="item">
      <div className="flex-item">
        {!isBestSeller && img}
        <div className="item-box">
          {isBestSeller && <p className="best-seller">Best Seller 🔥</p>}
          <p className="heading-secondary">{name}</p>
          <p className="item-description">{children}</p>
          <div className="price-box">
            <button className="btn btn-item Add">
              {isBestSeller ? "Add To Cart" : "Discover More"}
            </button>
            {isBestSeller && (
              <span className="Price">
                {price}
                <sup>EGP</sup>
              </span>
            )}
          </div>
        </div>
        {isBestSeller && img}
      </div>
    </div>
  );
}
