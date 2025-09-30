import phoneicon from "../../assets/phoneicon.png"
import Grosery from "../../assets/grocery.png"
import electronics from "../../assets/leptop2.png"
import khadbeej from "../../assets/khadbeej.png"
import fastfood from "../../assets/fastfood.png"
// import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
export function CategoriesSection(){
    // const nevigate=useNavigate();
    const items=[
      {id:1,name:"Phone",image:phoneicon,link:"/phonepage"},
      {id:2,name:"Grocery",image:Grosery,link:"/Grocerypage"},
      {id:3,name:"Electronics",image:electronics,link:"/Electronicpgae"},
      {id:4,name:"Khad Beej",image:khadbeej,link:"/khadbeejpage"},
      {id:5,name:"Fast Food",image:fastfood,link:"/fastfoodpage"},
    ]
    return(
        <>
          <div className="w-full h-28 flex justify-center items-center">
            <div className="w-[90%] flex shadow-lg h-full shadow-gray-200  mt-3 overflow-x-scroll no-scrollbar bg-[#FAFAFA] rounded-lg">
              {
                items.map((item)=>{
                  return(
                    <Link to={item.link}>
                    <div className="h-full flex justify-center cursor-pointer items-center flex-col w-50 flex-shrink-0" key={item.id}>
                        <img src={item.image} alt="phoneicon" className="w-15 h-18"/>
                        <p>{item.name}</p>
                    </div>
                    </Link>
                  )
                })
              }
            </div>
          </div>
        </>
    )
}