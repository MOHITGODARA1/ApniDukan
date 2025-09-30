import Logo from "../../assets/logo.png"
export function CartNavbar(){
  return(
    <>
      <div className="flex justify-center items-center bg-gray-100 h-14">
        <img src={Logo} alt="logo" className="h-20 w-20"/>
      </div>
    </>
  )
}