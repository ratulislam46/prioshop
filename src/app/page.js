import { getServerSession } from "next-auth";
import UserInfo from "../components/UserInfo";
import Banner from "./Components/Home/Banner/Banner";
import Product from "./Components/Home/Product/Product";
import { authOptions } from "./api/auth/[...nextauth]/route";

export const dynamic = "force-dynamic";

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <div className="space-y-20">
      <section>
        <Banner />
      </section>
      <section className="container mx-auto pb-20">
        <Product />
      </section>
      <section>
        <p className="text-xl">FROM CLIENT COMPONENT</p>
        <UserInfo />
        {JSON.stringify(session)}
      </section>
    </div>
  );
}
