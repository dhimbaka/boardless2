import Header from "../components/Header";
import Footer from "../components/Footer";

import { MapIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";

function search({ searchResults }) {
  const router = useRouter();
  //ES6 destructuring
  const { location, startDate, endDate, noOfGuests } = router.query;

  const formStartDate = format(new Date(startDate), "dd MMMM yy");
  const formEndDate = format(new Date(endDate), "dd MMMM yy");

  return (
    <div className="flex flex-col h-screen justify-between">
      {/* to make the footer stay at the bottom */}
      <Header />
      <main className="px-4 mb-auto">
        <section>
          <p className="text-s mt-4">
            {formStartDate} - {formEndDate} | {noOfGuests} guest(s)
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-4">
            Tours in {location}
          </h1>
        </section>

        <div className="hidden md:inline-flex mb-4 space-x-3 text-gray-800 whitespace-nowrap">
          <div className="filter">
            <MapIcon className="w-5 h-5 text-red-600" />
            <p className="text-s">Heritage</p>
          </div>

          <div className="filter">
            <MapIcon className="w-5 h-5 text-red-600" />
            <p className="text-s">Food</p>
          </div>

          <div className="filter">
            <MapIcon className="w-5 h-5 text-blue-600" />
            <p className="text-s">Nature</p>
          </div>

          <div className="filter">
            <MapIcon className="w-5 h-5 text-green-600" />
            <p className="text-s">Shopping</p>
          </div>
        </div>

        <div className="flex flex-col">
        {searchResults.map((item) => (
          <InfoCard 
          key={item.img}
          img={item.img}
          location={item.location}
          title={item.title}
          description={item.description}
          star={item.star}
          price={item.price}
          total={item.total}
          />
        ))}
      </div>

      </main>

      <Footer />
    </div>
  );
}

export default search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
