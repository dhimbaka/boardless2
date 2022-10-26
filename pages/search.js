import Header from "../components/Header";
import Footer from "../components/Footer";

function search() {
  return (
    <div className="flex flex-col h-screen justify-between">
        {/* to make the footer stay at the bottom */}
    <Header />
    <main className="px-4 mb-auto">
        <section>
            <p className="text-xs mt-2">300+ stays - 5 guests</p>
            <h1 className="text-3xl font-semibold mt-2 mb-4">Stays in Mars</h1>
        </section>

        <div className="hidden md:inline-flex mb-4">
         <p className="px-4 py-2 border rounded-full hover-show-lg active:scale-95 cursor-pointer">Food Tours</p>   
        </div>
    </main>
    <Footer />
    </div>
  )
}

export default search