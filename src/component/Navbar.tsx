
const Navbar = () => {
  return (
    <nav className="border-[2px] mx-10 py-4 px-6 font-inter border-primary text-primary rounded-[16px] flex justify-between">
        <ul className="flex gap-5 items-center">
            {nav_list_one.map((item, i) => <li className="cursor-pointer" key={i}>{item.name}</li>)}
        </ul>
        <img src="/Logo.svg" alt="" />
        <ul className="flex gap-5 items-center">
            {nav_list_two.map((item, i) => <li className="cursor-pointer" key={i}>{item.name}</li>)}
        </ul>
    </nav>
  )
}

export default Navbar

const nav_list_one = [
    {id: 1, name: "About us"},
    {id: 2, name: "Catalog"},
    {id: 3, name: "Blog"},
    {id: 4, name: "Ingredients"},
    {id: 5, name: "FAQ"},
]

const nav_list_two = [
    {id: 1, name: "Take the quiz"},
    {id: 2, name: "Contacts"},
    {id: 3, name: "English"},
    {id: 4, name: "Ingredients"},
    {id: 5, name: "FAQ"},
]