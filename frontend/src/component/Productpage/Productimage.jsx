export function ProductImage({product}){
  return(
    <>
      <div className="md:w-1/2 w-full md:h-80 flex justify-center items-center ">
        <img src={product.Image} alt={product.name} className=" h-full"/>
      </div>
    </>
  )
}