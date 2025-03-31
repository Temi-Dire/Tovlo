
const WhyChooseTovlo = () => {
  return (
    <section className="mx-10 my-14">
        <div className="grid grid-cols-2 gap-5">
            <img src="/Dog-Food.png" alt="" />
            <div className="border-[2px] border-primary text-primary rounded-[16px] flex justify-center items-center -tracking-[3%] relative">
                <div className="w-[500px] flex items-center flex-col">
                    <h1 className="font-medium text-[44px] italic font-playfair leading-[110px]">Why Choose TOVLO?</h1>
                    <p className="inter text-[20px] leading-[120%] text-center ">
                    We use only high-quality meats, such as chicken and beef—no by-products or fillers. No junk, just whole vegetables, nutritious grains, and healthy fats—nothing artificial.
                    You will notice positive changes in your dog's health: from increased energy to a shiny coat. Your dog deserves more than empty calories and fillers. Switch to TOVLO today for a healthier and happier dog. With just one meal, you’ll see the difference.
                    </p>
                </div>
                <img className="absolute bottom-10 right-60 w-[99px]" src="/Paw-One.svg" alt="" />
                <img className="absolute -bottom-10 right-10 w-[94px]" src="/Paw-Two.svg" alt="" />
            </div>
        </div>
    </section>
  )
}

export default WhyChooseTovlo