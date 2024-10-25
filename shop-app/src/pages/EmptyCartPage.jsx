function EmptyCartPage() {
  return (
    <>
      {/* <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
         
          <div className="mb-6">
            <img
              src="https://i.pinimg.com/originals/81/c4/fc/81c4fc9a4c06cf57abf23606689f7426.jpg"
              alt="Empty menu illustration"
              className="mx-auto"
            />
          </div>

          
          <h1 className="text-xl font-semibold text-gray-800">Empty Menu</h1>
          <p className="text-gray-600 mb-6">
            Looks like you haven't made your choice yet...
          </p>

         
          <button
            className="bg-rose-500 hover:bg-rose-600 text-white font-semibold py-2 px-6 rounded-lg"
            onClick={() => alert("Back to Menu")}
          >
            Back to Menu
          </button>

          
          <div className="mt-4 text-sm text-rose-400">
            <a href="#" className="hover:underline">
              Check what we've got for you and get it swished!
            </a>
          </div>
        </div>
      </div> */}
      <div className=" w-full h-screen bg-zinc-100 flex justify-center items-center">
        <div className="bg-white w-2/5 h-5/6  top-28 left-96 rounded-md shadow-xl">
          <img
            src="https://i.pinimg.com/originals/81/c4/fc/81c4fc9a4c06cf57abf23606689f7426.jpg"
            alt="Empty menu illustration"
            className="mx-auto mb-6 w-full h-1/2 rounded-md"
          />
        </div>
      </div>
    </>
  );
}

export default EmptyCartPage;
