
const About = () => {
  return (
    <section className="font-playfair">
        <div className="mx-10 my-[63px]">
            <div className="grid grid-cols-2 text-primary h-[600px]">
                <div className="flex flex-col justify-between relative">
                    <p className=" text-[72px] leading-[95%] -tracking-[3%] ">TOVLO is a leading brand specializing in high-quality, <span className="font-black italic">air-dried dog food</span> made from 100% natural ingredients </p>
                    <button className="bg-primary rounded-[5px] text-[#FBFFDC] py-2 px-8 w-fit font-inter">Take the quiz now</button>
                    <img className="w-[232px] h-[128px] absolute -right-16 bottom-10" src="/Bone-Two.svg" alt="" />
                </div>
                <div className="relative">
                    <img className="w-[556px] absolute top-48 z-20" src="/Dog.png" alt="" />
                    <img className="w-[556px] absolute -right-10 -z-10 top-20" src="/Bone-One.svg" alt="" />
                    <img className="absolute -right-10 -z-10 -top-10" src="/Quality.svg" alt="" />
                </div>
            </div>
        </div>
        <div className="border-y text-primary text-[35px] border-primary py-3 px-5 italic bg-[#D5E9D7]">
            80-100% Meat Content
        </div>
    </section>
  )
}

export default About