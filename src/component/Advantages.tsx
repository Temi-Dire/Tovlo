
const Advantages = () => {
  return (
    <section className="mt-40 mx-10">
        <div className='flex justify-center'>
            <h1 className="text-[44px] font-medium font-playfair leading-[100%] self-center text-center">
                Advantages
            </h1>
        </div>
        <div className="flex gap-6 justify-between mt-10">
            {advantages.map((item, i) => 
            <div key={i} className="border-[2px] border-[#7EBEA0] rounded-[10px] py-6 pl-6 pr-40 bg-[#FBFFDC]">
                <div className="relative w-fit">
                    <img src="/Star.svg" alt="" />
                    <p className="absolute text-[#FBFFDC] text-[20px] z-20 top-[45px] right-[50px]">{item.number}</p>
                </div>
                <div className="mt-8">
                    <h2 className="text-[32px] italic font-medium font-playfair">{item.title}</h2>
                    <p className="leading-[120%] text-[20px] font-inter">{item.description}</p>
                </div>
            </div>)}
        </div>
        <div className="flex justify-center mt-8">
            <button className="bg-primary rounded-[5px] text-[#FBFFDC] py-2 px-8 w-fit font-inter">Take the quiz now</button>
        </div>
    </section>
  )
}

export default Advantages


const advantages = [
    {number: "01", title: "Nutrient Preservation", description: "The air-drying process retains the maximum nutritional value of the ingredients, providing a balanced and wholesome meal for dogs"},
    {number: "01", title: "Nutrient Preservation", description: "The air-drying process retains the maximum nutritional value of the ingredients, providing a balanced and wholesome meal for dogs"},
    {number: "01", title: "Nutrient Preservation", description: "The air-drying process retains the maximum nutritional value of the ingredients, providing a balanced and wholesome meal for dogs"},
]