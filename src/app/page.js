import Banner from "./Components/Home/Banner/Banner";
import Product from "./Components/Home/Product/Product";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="space-y-20">
      <section>
        <Banner />
      </section>
      <section className="container mx-auto pb-20">
        <Product />
      </section>
    </div>
  );
}
