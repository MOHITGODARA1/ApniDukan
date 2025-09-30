import metresss from "../../assets/metress.png"
export function SalePoster(){
  return(
    <>
       <div className="w-full h-38 flex justify-center items-center mt-6">
        <div className="w-[90%] h-full rounded-lg">
          <img src={metresss} alt="metresss" className="w-full h-full object-contain rounded-lg" />
        </div>

       </div>
    </>
  )
}