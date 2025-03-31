import Card from "./Card";

const OurProducts = () => {
  return (
    <section className="mx-10 my-20 flex flex-col">
        <div className="relative flex justify-center">
            <h1 className="text-[44px] font-medium font-playfair w-[800px] leading-[100%] text-primary self-center text-center">Our products are good for him, good for her, and <span className="italic">good for every</span> beloved pet</h1>
            <button className="bg-[#FE6B40] text-[#FBFFDC] px-10 py-2 self-end absolute right-0 bottom-0">SEE MORE</button>
        </div>
        <div className="my-10 flex gap-5">
            {products.map((prod, i) => 
                <Card key={i} name={prod.name} ingredients={prod.ingredients} price={prod.price} image={prod.image}/>
            )}
        </div>
    </section>
  )
}

export default OurProducts

const products = [
    {name: "Chicken choice", ingredients: "Real chicken, eggs, natural superfoods", price: "159.90₪", image: "/Product-One.svg"},
    {name: "Chicken choice", ingredients: "Real chicken, eggs, natural superfoods", price: "159.90₪", image: "/Product-One.svg"},
    {name: "Chicken choice", ingredients: "Real chicken, eggs, natural superfoods", price: "159.90₪", image: "/Product-One.svg"},
    {name: "Chicken choice", ingredients: "Real chicken, eggs, natural superfoods", price: "159.90₪", image: "/Product-One.svg"},
]