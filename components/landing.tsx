import { cn } from "../lib/utils";
export default function LandingPage() {
  return (
    <section className="relative  h-screen w-full overflow-hidden ">
      <div className="max-w-7xl mx-auto w-full h-full flex items-center justify-center relative">
     
        <div className="p-10 size-full">
          <div className="relative p-10  size-full flex flex-col justify-between">
           
            <nav className="flex items-center  justify-between relative z-20 ">
              <div className="flex items-center gap-8">
                <h2 className="tracking-tighter  bg-clip-text text-transparent  bg-gradient-to-b from-blue-400  to-blue-800 text-lg font-bold text-shadow-lg   px-4"> 
                 Accent.lore
                </h2>
                <a href="#" className="text-neutral-700 text-xs">
                  Features
                </a>
                <a href="#" className="text-neutral-700 text-xs">
                  Pricing
                </a>
                <a href="#" className="text-neutral-700 text-xs">
                  Changelog
                </a>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-4 py-2  rounded-md bg-gradient-to-t text-neutral-700 text-shadow-lg text-shadow-black/2 text-black text-xs ">
                  Read Documentation
                </button>
                <button className="px-4 py-2  rounded-md bg-gradient-to-t from-blue-700 to-blue-500 text-shadow-lg text-shadow-black/2 text-black text-xs ">
                  Try For Free
                </button>
              </div>
            </nav>
            
         
          </div>
        </div>
      </div>
    </section>
  );
}
