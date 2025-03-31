
const Welcome = () => {
  return (
    <section className="mt-40">
        <div className='flex justify-center font-playfair'>
            <h1 className="text-[44px] font-medium w-[648px] leading-[100%] self-center text-center">
            <span className="italic">Welcome to the world </span>of quality nutrition for your dogs! 
            </h1>
        </div>
        <div className="bg-[#D5E9D7] grid grid-cols-2 h-[815px] mt-10">
            <div className="w-full rounded-r-full bg-primary flex items-center justify-center">
                <img className="w-[495px]" src="/Case.svg" alt="" />
            </div>
            <div className="flex flex-col justify-center items-center relative">
                <div className="w-[475px] flex flex-col items-center">
                    <h2 className="font-medium text-[44px] italic font-playfair leading-[110px]">Starter Pack</h2>
                    <p className="inter text-[20px] leading-[120%] text-center ">Don’t wait any longer to give your dog the fresh, wholesome food they deserve. Start today and experience the TOVLO transformation. Your dog’s health, happiness, and vitality are just a meal away.</p>
                    <button className="bg-primary rounded-[5px] text-[#FBFFDC] py-2 px-8 w-fit font-inter mt-10">Read more</button>
                </div>
                <img className="w-[232px] h-[128px] absolute right-10 top-10" src="/Bone-Three.svg" alt="" />
                <img className="w-[102px] h-[128px] absolute left-10 top-10 -rotate-90" src="/Bone-Three.svg" alt="" />
                <img className="w-[82px] h-[128px] absolute left-10 bottom-10 rotate-90" src="/Bone-Three.svg" alt="" />
                <img className="w-[62px] h-[128px] absolute right-64 bottom-0 rotate-6" src="/Bone-Three.svg" alt="" />
            </div>
        </div>
    </section>
  )
}

export default Welcome