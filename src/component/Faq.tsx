// import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";

const Faq = () => {
    // const [, setShow] = useState<number | null>(null)
  return (
    <section className="">
        <div className='flex justify-center font-playfair'>
            <h1 className="text-[44px] font-medium w-[648px] leading-[100%] self-center text-center">
                <span className="italic">FAQ</span>
            </h1>
        </div>
        <div className="my-10">
            {faqs.map((item, i) => 
            <div key={i} className={` grid grid-cols-[auto_650px_auto] px-10 py-5 border-y-2 border-primary `}>
                <div className="flex items-star">
                    <p className="text-[32px] m-0 font-playfair">{item.number}</p>
                </div>
                <div>
                    <h2 className="font-medium italic text-[32px] font-playfair">{item.question}</h2>
                    {/* <p className="text-[20px] font-inter">TOVLO's natural Daily Dog Food is free from artificial additives, packed with real whole ingredients-no byproducts or processed meals, and mirrors what dogs thrive on in nature- keeping them healthier and happier.</p> */}
                </div>
                <div className="flex justify-end h-fit">
                    <div className={`bg-[#D5E9D7] p-2 rounded-full cursor-pointer border-2 border-primary`}>
                    {/* <div className={`bg-[#FBFFDC] p-2 rounded-full cursor-pointer border-2 border-primary`}> */}
                        {/* <FaArrowUp className="text-primary" /> */}
                        <FaArrowDown className="text-primary " />
                    </div>
                </div>
            </div>)}
        </div>
    </section>
  )
}

export default Faq

const faqs = [
    {id: 1, number: "01", question: "Why should I feed my dog natural food?", answer: "TOVLO's natural Daily Dog Food is free from artificial additives, packed with real whole ingredients-no byproducts or processed meals, and mirrors what dogs thrive on in nature- keeping them healthier and happier."},
    {id: 2, number: "02", question: "What makes air-dried food better for my dog?", answer: "TOVLO's natural Daily Dog Food is free from artificial additives, packed with real whole ingredients-no byproducts or processed meals, and mirrors what dogs thrive on in nature- keeping them healthier and happier."},
]