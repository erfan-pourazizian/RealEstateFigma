import InputHolder from './InputHolder'

const InputForm = () => {
  return (
    <div className='flex flex-col left-16  relative w-[125%] z-10 bg-white shadow-sp-input rounded'>
      <p className="ml-5 text-base text-[#4F4F4F] mt-5">For Current rent estimate, please provide the following :</p>
      <div className="flex mb-5">

        <div className="grid grid-cols-10 gap-6 mt-2 ml-10 w-[75%] ">
         
          <div className='col-span-7'>
            <InputHolder inputName={"Address *"} img={"/location.png"} op1={"test"} op2={"test"} />
          </div>

          <div className='col-span-2 '>
            <InputHolder inputName={"Unit"} img={"/empty.png"} op1={"test"} op2={"test"} />
          </div>

          <div className='col-start-1 col-end-4'>
            <InputHolder inputName={"Property Type "} img={"/property.png"} op1={"test"} op2={"test"} />
          </div>

          <div className='col-span-2'>
            <InputHolder inputName={"SQFT"} img={"/sqft.png"} op1={"test"} op2={"test"} />
          </div>

          <div className='col-span-2'>
            <InputHolder inputName={"Beds"} img={"/beds.png"} op1={"test"} op2={"test"} />
          </div>

          <div className='ml-2 col-span-2'>
            <InputHolder inputName={"Bath"} img={"/bath.png"} op1={"test"} op2={"test"} />
          </div>

        </div>
        <button className=" self-end ml-auto bg-sp-orange px-7 py-1 h-[35px] rounded-sm text-white mr-8">Submit</button>
      </div>
    </div>
  )
}

export default InputForm
