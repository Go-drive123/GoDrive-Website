import img1 from '../../assets/images/home-img.png';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${img1})` }}>
      <div className="absolute top-1/2 left-10 md:left-20 lg:left-40 transform -translate-y-1/2 bg-white bg-opacity-20 backdrop-blur-md border border-white border-opacity-30 shadow-md rounded-lg p-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-6 text-center">Book Your Trip</h2>
        <div className="mb-4">
          <label className="block text-black text-sm md:text-base lg:text-lg font-bold mb-2" htmlFor="starting-location">
            Starting Location
          </label>
          <input
            id="starting-location"
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter starting location"
          />
        </div>
        <div className="mb-6">
          <label className="block text-black text-sm md:text-base lg:text-lg font-bold mb-2" htmlFor="destination">
            Destination
          </label>
          <input
            id="destination"
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter destination"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-black hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Book Trip
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
