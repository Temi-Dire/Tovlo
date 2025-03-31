
const WhatYouFeed = () => {
  return (
    <section className="mt-40">
        <div className='flex justify-center'>
            <h1 className="text-[44px] font-medium font-playfair w-[1700px] leading-[100%] self-center text-center">
                What you feed your dog today affects their health tomorrow. By switching to TOVLO, you're giving them real, nutritious food.
            </h1>
        </div>
        <div className="grid grid-cols-2 m-10">
            <div className="flex items-center">
                <img className="" src="/Woman-One.png" alt="" />
            </div>
            <div className="flex flex-col gap-6">
                <p className="w-[465px]">
                At TOVLO, we believe dogs deserve better than these harmful, processed meals. That’s why we’ve crafted a food that’s as nourishing as it is delicious. Every TOVLO meal is created by expert chefs and veterinarians, combining at least 75% high-quality protein with 25% nutritious, whole ingredients like vegetables, healthy grains, and wholesome fats.
                Unlike mass-produced food, which is loaded with fillers, TOVLO meals are packed with everything your dog needs to thrive. This is real food—fresh, whole, and full of the nutrients your dog’s body craves. It’s food we’d happily eat ourselves.
                </p>
                <button className="bg-[#FE6B40] text-[#FBFFDC] w-[362px] py-2">READ MORE</button>
                <img src="/Dog-Two.png" alt="" />
            </div>
        </div>
    </section>
  )
}

export default WhatYouFeed