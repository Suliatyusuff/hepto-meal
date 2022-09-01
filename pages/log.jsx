import Image from "next/image";
import { Layout, Button } from "components";
import { Punjabi, Dum, Navratan } from "assets";


var curr = new Date();
var date = curr.toISOString().substring( 0, 10 );

export default function MealPreparation () {
    return (
        <Layout title="Meal Plan">

            <section className="px-4 md:px-10 mb-20 bg-[#E5E5E5]/25 min-h-screen ">
                <div className="w-full flex justify-center flex-col items-center gap-5">
                    <form action="" method="post" className="mr-40 w-6/12 pt-5">
                        <div className="relative  ">

                            <input type="input" placeholder="Type your Food" className="bg-primary-500/40 h-12 px-3 w-full focus:border-black/40 placeholder-gray-500 font-bold text-xl focus:outline-none text-black/30 rounded-lg" />

                            <span className="absolute inset-y-0 right-10 flex items-center pl-3">
                                <svg className="h-7 w-7 fill-black/60" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30"
                                    height="30" viewBox="0 0 30 30">
                                    <path
                                        d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z">
                                    </path>
                                </svg>
                            </span>
                        </div>
                    </form>
                    <div className="mr-40 w-6/12 pt-7 bg-white rounded-xl px-16 flex justufy-around">

                    </div>
                </div>

            </section>

        </Layout>
    )
}
