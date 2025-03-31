// import { FiArrowRight } from "react-icons/fi";

const Testimonial = () => {
  return (
    <section className="mt-40 mx-10">
        <div className='flex justify-center font-playfair'>
            <h1 className="text-[44px] font-medium w-[648px] leading-[100%] self-center text-center">
                What those who have <span className="italic">already chosen</span> us are saying
            </h1>
        </div>
            <div className="flex overflow-x-scroll w-full gap-x-10 my-10">
                {testimonials.map((item, i) => 
                <div key={i} className="flex flex-1 w-[1100px] min-w-[1100px]">
                    <img className="w-1/2" src={item.image} alt="" />
                    <div className="p-6 w-1/2 bg-primary text-[#FBFFDC] rounded-[10px] flex flex-col justify-between">
                        <h2 className="font-playfair font-medium text-[32px] italic">{item.name}</h2>
                        <p className="font-inter text-[20px] leading-[120%]">{item.comment}</p>
                    </div>
                </div>)}
                {/* <div className="absolute right-20">
                    <div className="relative">
                        <img src="/Star.svg" alt="" />
                        <FiArrowRight className="absolute top-8 right-8 text-[#FBFFDC] text-[52px]" />
                    </div>
                </div> */}
            </div>
    </section>
  )
}

export default Testimonial

const testimonials = [
    {image: "/Testimonial-One.png", name: "Michael, Owner of Bella", comment: `"We tried numerous dog foods, but none suited Bella—she either refused to eat or had digestive issues. Since we switched to TOVLO food, everything has changed! Bella not only eats with appetite but has also become more active and playful. I especially appreciate the natural ingredients—now I’m confident that my dog is getting everything she needs for her health. Thank you for the quality and care for our pets!"`},
    {image: "/Testimonial-Two.png", name: "Sarah, Owner of Max", comment: `"Max has had sensitive skin since he was a puppy, and many foods caused allergic reactions. With your product, we finally found the perfect balance! His coat is now smooth and shiny, the itching has completely disappeared, and most importantly—Max eagerly runs to his bowl for every meal. I love that the food contains no artificial additives and is suitable even for dogs with special needs. I recommend it to all pet owners!"`},
]