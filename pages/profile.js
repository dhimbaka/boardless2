import Header from "../components/Header";
import Footer from "../components/Footer";
import Tour from "../components/Tour";
import Image from "next/image";

import { useRouter } from "next/router";
import { format } from "date-fns";

function profile({tourData}) {
//   const router = useRouter();
//   const { location, startDate, endDate, noOfGuests } = router.query;
//   const formStartDate = format(new Date(startDate), "dd MMMM yy");
//   const formEndDate = format(new Date(endDate), "dd MMMM yy");

  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <main className="px-4 mb-auto"> 

      <section className="max-w-7xl mx-auto">
      <div className="relative flex items-center h-40 w-40 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      </section>

        <section className="max-w-7xl mx-auto">
        <h1 className="bg-red-400 text-white p-2 rounded-md font-medium">Tours offered by NAME</h1>
        <div className="grid grid-cols-1">
          {tourData.map((item)=>(
          <Tour 
          key={item.img}
          img={item.img}
          name={item.location}
          description={item.distance}
          />
          ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default profile;

export async function getStaticProps(){
    const tourData = await fetch("https://www.jsonkeeper.com/b/4G1G").then (
     (res)=>res.json()
    );
    
    return{
     props: {
       tourData,
     }
    }
   
   }
