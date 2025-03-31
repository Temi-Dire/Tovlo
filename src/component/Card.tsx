import { FaBasketShopping } from 'react-icons/fa6'

interface CardProps {
    name: string,
    ingredients: string,
    price: string,
    image: string,
}

const Card: React.FC<CardProps> = ({name, ingredients, price, image}) => {
  return (
    <div className="w-fit">
                <div className="border-[2px] border-[#FDB58E] bg-[#FBFFDC] rounded-[60px] py-4 px-6 text-primary">
                    <header className="flex justify-between">
                        <div className="font-playfair flex gap-[10px] text-[14px]">
                            <div className="rounded-[20px] bg-[#E4E8C7]  px-3 py-1">1.4kg</div>
                            <div className="rounded-[20px] bg-[#E4E8C7]  px-3 py-1">0.7kg</div>
                        </div>
                        <div className="bg-[#34302D] rounded-full p-2 text-[#FAFCEB]">
                            <FaBasketShopping />
                        </div>
                    </header>
                    <img className="my-10" src={image} alt="" />
                </div>
                <div className="flex flex-col items-center text-primary">
                    <p className="font-playfair text-[20px]">{name}</p>
                    <p className="font-inter text-[17px]">{ingredients}</p>
                    <p className="font-playfair text-[18px]">{price}</p>
                </div>
            </div>
  )
}

export default Card