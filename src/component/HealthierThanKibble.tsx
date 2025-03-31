

const HealthierThanKibble = () => {
  return (
    <section className="mt-40 font-playfair mx-20">
        <div className='flex justify-center'>
            <h1 className="text-[44px] font-medium w-[648px] leading-[100%] self-center text-center">
                Healthier than <span className="italic">kibble,</span>
                easier than home cooked
            </h1>
        </div>
        <div className="mt-10">
            <div className="grid grid-cols-4 pb-6 border-b-[2px] place-items-center border-primary">
                <div></div>
                <p className="text-[34px] font-medium">Kibble Dog Food</p>
                <img src="/Logo.svg" alt="" />
                <p className="text-[34px] font-medium">Home cooked</p>
            </div>
           {advantages.map((item, i) =>  
           <div key={i} className="grid grid-cols-4 py-6 border-b-[2px] place-items-center border-primary">
                <div className="flex w-full justify-start">
                    <p className="text-[34px] font-medium">{item.type}</p>
                </div>
                <img src={item.cat_one} alt="" />
                <img src={item.cat_two} alt="" />
                <img src={item.cat_three} alt="" />
            </div>)}
        </div>
    </section>
  )
}

export default HealthierThanKibble

const advantages = [
    {type: "All-natiral ingredients", cat_one: '/wrong.svg', cat_two: '/right.svg', cat_three: '/right.svg'},
    {type: "Balanced and complete", cat_one: '/wrong.svg', cat_two: '/right.svg', cat_three: '/wrong.svg'},
    {type: "No fridge needed", cat_one: '/wrong.svg', cat_two: '/right.svg', cat_three: '/wrong.svg'},
    {type: "Easy to serve", cat_one: '/right.svg', cat_two: '/right.svg', cat_three: '/wrong.svg'},
]