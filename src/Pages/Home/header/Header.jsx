

const Header = () => {
    return (
        <>
           <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
                Brand new
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-2xl md:text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
             Flexible Chair 
              
              
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
            Introducing the epitome of comfort and versatility – our Flexible Chair. Designed with your utmost comfort in mind, this chair seamlessly adapts to your body contours, providing unparalleled support during long hours of work or relaxation.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            
           <button className="btn bg-orange-500 text-white hover:bg-black hover:text-orange-500 font-bold md:px-10">Shop Now</button>
          </div>
        </div>
        <div className="relative lg:w-1/2">
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1218&q=80"
            alt=""
          />
          
        </div>
      </div>
    </div> 
        </>
    );
};

export default Header;