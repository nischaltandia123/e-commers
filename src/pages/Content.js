import React from "react";
function Big(){
  return(<button className="flex mx-auto mt-16 mb-4 text-white bg-green-600 border-0 py-2 px-5 md:px-16 focus:outline-none  text-lg ">
    VIEW PRODUCT
  </button>);
};
const Content = () => {
   
   

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className=" px-0 py-0 mx-5 ">
          <div className="flex flex-wrap w-full my-5 mx-3 flex-col ">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Your Best Picks
            </h1>
          </div>
          <div className="">
            <div className="py-5">
              <h2 className="sr-only">Products</h2>
              <div className="flex flex-col md:flex-row ">
                <div className="flex flex-row">
                  <a href="#" className="group  mx-3 text-center font-semibold">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 mx ">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                        alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                        className="h-full w-full object-cover object-center group-hover:opacity-75 rounded-md"
                      />
                    </div>
                    <h3 className="mt-4 text-md text-black">Flash Sale</h3>
                  </a>

                  <a
                    href="#"
                    className="group mx-3 text-center   font-semibold"
                  >
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg"
                        alt="Olive drab green insulated bottle with flared screw lid and flat top."
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <h3 className="mt-4 text-md text-black">Plants</h3>
                  </a>
                </div>
                <div className="flex flex-row ">
                  <a href="#" className="group mx-3 text-center  font-semibold">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg"
                        alt="Person using a pen to cross a task off a productivity paper card."
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <h3 className="mt-4 text-md text-black">Pots & Planters</h3>
                  </a>
                  <a href="#" className="group mx-3 text-center  font-semibold">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
                        alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <h3 className="mt-4 text-md text-black">Plant Care</h3>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className=" px-0 py-0 mx-5 ">
          <div className="flex flex-wrap w-full my-5 mx-3 flex-col ">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Bestsellers
            </h1>
          </div>
          <div className="">
            <div className="py-5">
              <h2 className="sr-only">Products</h2>
              <div className="flex flex-col md:flex-row ">
                <div className="flex flex-row">
                  <a href="#" className="group  mx-3 text-center font-semibold">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 mx ">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                        alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                        className="h-full w-full object-cover object-center group-hover:opacity-75 rounded-md"
                      />
                    </div>
                    <h3 className="mt-4 text-md text-black">Flash Sale</h3>
                    <Big/>
                  </a>

                  <a
                    href="#"
                    className="group mx-3 text-center   font-semibold"
                  >
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg"
                        alt="Olive drab green insulated bottle with flared screw lid and flat top."
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <h3 className="mt-4 text-md text-black">Plants</h3>
                    <Big/>
                  
                  </a>
                </div>
                <div className="flex flex-row ">
                  <a href="#" className="group mx-3 text-center  font-semibold">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg"
                        alt="Person using a pen to cross a task off a productivity paper card."
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <h3 className="mt-4 text-md text-black">Pots & Planters</h3>
                    <Big/>
                  
                  </a>
                  <a href="#" className="group mx-3 text-center  font-semibold">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
                        alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <h3 className="mt-4 text-md text-black">Plant Care</h3>
                    <Big/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button className="flex mx-auto mt-16 text-white bg-green-600 border-0 py-2 px-24 focus:outline-none  rounded text-lg">
            VIEW ALL
          </button>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className=" px-0 py-0 mx-5 ">
          <div className="flex flex-wrap w-full my-5 mx-3 flex-col ">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              New Arrivals
            </h1>
          </div>
          <div className="">
            <div className="py-5">
              <div className="flex flex-col md:flex-row ">
                <div className="flex flex-row">
                  <a href="#" className="group  mx-3 text-center font-semibold">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 mx ">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                        alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                        className="h-full w-full object-cover object-center group-hover:opacity-75 rounded-md"
                      />
                    </div>
                    <h3 className="mt-4 text-md text-black">Flash Sale</h3>
                    <Big/>
                  </a>

                  <a
                    href="#"
                    className="group mx-3 text-center   font-semibold"
                  >
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg"
                        alt="Olive drab green insulated bottle with flared screw lid and flat top."
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <h3 className="mt-4 text-md text-black">Plants</h3>
                    <Big/>
                  </a>
                </div>
                <div className="flex flex-row ">
                  <a href="#" className="group mx-3 text-center  font-semibold">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg"
                        alt="Person using a pen to cross a task off a productivity paper card."
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <h3 className="mt-4 text-md text-black">Pots & Planters</h3>
                    <Big/>
                  </a>
                  <a href="#" className="group mx-3 text-center  font-semibold">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
                        alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <h3 className="mt-4 text-md text-black">Plant Care</h3>
                    <Big/>
                  </a>
                </div>
              </div>
            </div>
            <div className="py-5">
              <div className="flex flex-col md:flex-row ">
                <div className="flex flex-row">
                  <a href="#" className="group  mx-3 text-center font-semibold">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 mx ">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                        alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                        className="h-full w-full object-cover object-center group-hover:opacity-75 rounded-md"
                      />
                    </div>
                    <h3 className="mt-4 text-md text-black">Flash Sale</h3>
                    <Big/>
                  </a>

                  <a
                    href="#"
                    className="group mx-3 text-center   font-semibold"
                  >
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg"
                        alt="Olive drab green insulated bottle with flared screw lid and flat top."
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <h3 className="mt-4 text-md text-black">Plants</h3>
                    <Big/>
                  </a>
                </div>
                <div className="flex flex-row ">
                  <a href="#" className="group mx-3 text-center  font-semibold">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg"
                        alt="Person using a pen to cross a task off a productivity paper card."
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <h3 className="mt-4 text-md text-black">Pots & Planters</h3>
                    <Big/>
                  </a>
                  <a href="#" className="group mx-3 text-center  font-semibold">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
                        alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <h3 className="mt-4 text-md text-black">Plant Care</h3>
                   <Big/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button className="flex mx-auto mt-16 text-white bg-green-600 border-0 py-2 px-24 focus:outline-none  rounded text-lg">
            VIEW ALL
          </button>
        </div>
      </section>
      <div class="my-2 mx-11">
    <h1 class="font-semibold text-xl mb-4">About Plant Bazzaar</h1>

    <p className="py-2">Welcome to <strong>Plant Bazzaar</strong>, your ultimate destination for all things green! Plant Bazzaar is dedicated to serving as your go-to online plant nursery, catering to every gardening enthusiast's needs. Whether you're looking for exquisite <a href="#" class="text-blue-700">indoor plants</a>, robust <a href="#" class="text-blue-700">outdoor varieties</a>, vibrant <a href="#" class="text-blue-700">flowering plants</a>, or charming <a href="#" class="text-blue-700">succulents</a>, we have it all.</p>

    <p className="py-2">At <strong>Plant Bazzaar</strong>, we take pride in offering premium quality organic seeds for <a href="#" class="text-blue-700">vegetables</a>, <a href="#" class="text-blue-700">herbs</a>, and <a href="#" class="text-blue-700">flowers</a>, ensuring your garden starts on the right foot. Complementing our diverse plant collection, we provide trendy <a href="#" class="text-blue-700">planters</a>, top-notch <a href="#" class="text-blue-700">soil blends</a>, high-quality <a href="#" class="text-blue-700">fertilizers</a>, and essential <a href="#" class="text-blue-700">gardening tools</a>.</p>

    <p className="py-2">More than just a plant store, <strong>Plant Bazzaar</strong> is your companion on your gardening journey. We believe in the transformative power of gardening—where nurturing plants helps nurture the soul. Whether it's the joy of witnessing new <a href="#" class="text-blue-700">leaves</a> unfold, the beauty of your first <a href="#" class="text-blue-700">bloom</a>, or the excitement of seeing seeds sprout, we're here to celebrate every milestone with you.</p>

    <p className="py-2"><strong>Plant Bazzaar</strong> is committed to not only enhancing your gardening experience but also providing lifelong support. Think of us as a friend who's always there to guide and inspire, ensuring both you and your garden thrive beautifully.</p>
</div>


    </div>
  );
};

export default Content;
