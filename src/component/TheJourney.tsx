
const TheJourney = () => {
  return (
    <section>
      <div className='flex justify-center'>
        <h1 className="text-[44px] font-medium font-playfair w-[800px] leading-[100%] self-center text-center">Our products are good for him, good for her, and <span className="italic">good for every</span> beloved pet</h1>
      </div>
      <div  className="my-10">
       {lists.map((item, i) => 
       <div className="hover:bg-[#D5E9D7]">
         <div key={i} className={`grid grid-cols-3 mx-10 py-4 border-b-2 border-primary  ${ i === 0 && "border-t-2"}`}>
            <p className="font-medium text-[32px] italic font-playfair flex items-center justify-start">{item.title}</p>
            <div className="flex justify-end items-center">
              <p className="w-[378px]">{item.description}</p>
            </div>
            <p className="flex items-center justify-end">({item.number})</p>
          </div>
       </div>)}
      </div>
    </section>
  )
}

export default TheJourney

const lists = [
  {title: "Sourcing farm-fresh ingredients", description: "We begin with premium, natural ingredients sourced from trusted farms, ensuring every meal is crafted with care.", number: "01"},
  {title: "Gently Air-Drying to perfection", description: "We begin with premium, natural ingredients sourced from trusted farms, ensuring every meal is crafted with care.", number: "02"},
  {title: "Quality Control and Testing", description: "We begin with premium, natural ingredients sourced from trusted farms, ensuring every meal is crafted with care.", number: "03"},
  {title: "Delivered to your doorstep", description: "We begin with premium, natural ingredients sourced from trusted farms, ensuring every meal is crafted with care.", number: "04"},
]