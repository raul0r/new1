function Home() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 px-4">
        <section className="max-w-4xl text-center space-y-6">
          <h1 className="text-5xl font-extrabold text-gray-800">
            Welcome to <span className="text-blue-600">Digital Agency</span>
          </h1>
          <p className="text-lg text-gray-600">
            We provide top-notch digital services to grow your business.
          </p>
          <div className="space-x-4">
            <a
              href="#services"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>
    );
  }
  
  export default Home;
  