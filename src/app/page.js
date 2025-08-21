import Banner from "./Components/Home/Banner/Banner";
import ProductMarquee from "./Components/Home/Marquee/ProductMarquee";
import Product from "./Components/Home/Product/Product";


export default function Home() {
  return (
    <div className="space-y-20">
      <section>
        <Banner />
      </section>
      <section className="container mx-auto">
        <ProductMarquee />
      </section>
      <section className="container mx-auto mb-20">
        <Product />
      </section>
    </div>
  );
}
