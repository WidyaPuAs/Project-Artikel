import React from "react";
import {
  Carousel,
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";



const Dashboard = () => {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false)
    );
    }, []);
    const navList = (
      <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <a href="#" className="flex items-center">
            Artikel Terbaru
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <a href="#" className="flex items-center">
            Contact
          </a>
        </Typography>
      </ul>
    );

    return (
      <div className="w-full">
        <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
          <div className="flex items-center justify-between text-blue-gray-900">
            <Typography
              as="a"
              href="#"
              className="mr-4 cursor-pointer py-1.5 font-medium"
            >
              Material Tailwind
            </Typography>
            <div className="flex items-center gap-4">
              <div className="mr-4 hidden lg:block">{navList}</div>
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>Buy Now</span>
              </Button>
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>
          <MobileNav open={openNav}>
            {navList}
            <Button variant="gradient" size="sm" fullWidth className="mb-2">
              <span>Buy Now</span>
            </Button>
          </MobileNav>
        </Navbar>
        <div className="mx-auto max-w-screen-md ">
          <Carousel className="h-screen">
            <div className="relative h-full w-full">
              <img
                src="./assets/berita3.jpg"
                alt="image 1"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                <div className="w-3/4 text-center md:w-2/4">
                  <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                  >
                    The Beauty of Nature
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80"
                  >
                    It is not so much for its beauty that the forest makes a
                    claim upon men&apos;s hearts, as for that subtle something,
                    that quality of air that emanation from old trees, that so
                    wonderfully changes and renews a weary spirit.
                  </Typography>
                  <div className="flex justify-center gap-2">
                    <Button size="lg" color="white">
                      Explore
                    </Button>
                    <Button size="lg" color="white" variant="text">
                      Gallery
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-full w-full">
              <img
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                alt="image 2"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                  <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                  >
                    The Beauty of Nature
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80"
                  >
                    It is not so much for its beauty that the forest makes a
                    claim upon men&apos;s hearts, as for that subtle something,
                    that quality of air that emanation from old trees, that so
                    wonderfully changes and renews a weary spirit.
                  </Typography>
                  <div className="flex gap-2">
                    <Button size="lg" color="white">
                      Explore
                    </Button>
                    <Button size="lg" color="white" variant="text">
                      Gallery
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-full w-full">
              <img
                src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                alt="image 3"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
                <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                  <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                  >
                    The Beauty of Nature
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80"
                  >
                    It is not so much for its beauty that the forest makes a
                    claim upon men&apos;s hearts, as for that subtle something,
                    that quality of air that emanation from old trees, that so
                    wonderfully changes and renews a weary spirit.
                  </Typography>
                  <div className="flex gap-2">
                    <Button size="lg" color="white">
                      Explore
                    </Button>
                    <Button size="lg" color="white" variant="text">
                      Gallery
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
          <div className="flex flex-row md:flex-col sm:flex-col xs:flex-col lg:flex-col pt-3">
            <div className="mx-auto w-3/5">
              <Card className="h-[37rem] bg-gray-300">
                <div className="h-1/4">
                  <img
                    src="./assets/berita2.jpg"
                    alt=""
                    className="w-full h-[28rem] rounded-xl object-cover"
                  />
                  <div className="w-full absolute p-4 flex flex-col justify-center bg-transparent-black h-[12rem] top-[16rem]">
                    <h1 className="text-4xl my-auto font-extrabold text-white">
                      Megawati: Jokowi kalau tidak ada PDIP, Kasihan!
                    </h1>
                    <Button className="bg-black mb-4 w-28 hover:shadow-14">
                      News
                    </Button>
                  </div>
                </div>
                <div className="flex bg-white h-[9rem] mt-[19rem]">
                  <div className="flex m-3 my-auto w-1/2">
                    <img
                      src="./assets/berita2.jpg"
                      className="h-[6rem] top w-[6rem] object-cover"
                    />
                    <div className="flex-col my-auto">
                      <h1 className=" mx-4 my-auto font-semibold text-black">
                        Megachan, huwuwww anak presiden ni bosss senggol dong
                        srepetetetetetetetet ashiapp
                      </h1>
                      <h1 className=" mx-4 mt-2 my-auto text-sm font-medium text-black">
                        8 Juni 2023 | 16:29 Wib
                      </h1>
                    </div>
                  </div>
                  <div className="flex m-3 my-auto w-1/2">
                    <img
                      src="./assets/berita2.jpg"
                      className="h-[6rem] top w-[6rem] object-cover"
                    />
                    <div className="flex-col my-auto">
                      <h1 className=" mx-4 my-auto font-semibold text-black">
                        Megachan, huwuwww anak presiden ni bosss senggol dong
                        srepetetetetetetetet ashiapp
                      </h1>
                      <h1 className=" mx-4 mt-2 my-auto text-sm font-medium text-black">
                        8 Juni 2023 | 16:29 Wib
                      </h1>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            <div className="w-1/4 mx-auto">
              <h1 className="text-xl lg:mt-20 lg: my-auto font-extrabold text-black">
                Terpopuler
              </h1>
              <div className="flex flex-col  h-[6rem]">
                <div className="flex w-full h-full lg:flex-row flex-wrap">
                  <div className="flex m-3 my-4 w-full">
                    <img
                      src="./assets/berita2.jpg"
                      className="h-[6rem] top w-[6rem] object-cover"
                    />
                    <div className="flex-col my-auto">
                      <h1 className=" mx-4 my-auto font-semibold text-black">
                        Megachan, huwuwww anak presiden ni bosss senggol dong
                        srepetetetetetetetet ashiapp
                      </h1>
                      <h1 className=" mx-4 mt-2 my-auto text-sm font-medium text-black">
                        8 Juni 2023 | 16:29 Wib
                      </h1>
                    </div>
                  </div>
                  <div className="flex m-3 my-2 w-full">
                    <img
                      src="./assets/berita2.jpg"
                      className="h-[6rem] top w-[6rem] object-cover"
                    />
                    <div className="flex-col my-auto">
                      <h1 className=" mx-4 my-auto font-semibold text-black">
                        Megachan, huwuwww anak presiden ni bosss senggol dong
                        srepetetetetetetetet ashiapp
                      </h1>
                      <h1 className=" mx-4 mt-2 my-auto text-sm font-medium text-black">
                        8 Juni 2023 | 16:29 Wib
                      </h1>
                    </div>
                  </div>
                  <div className="flex m-3 my-2 w-full">
                    <img
                      src="./assets/berita2.jpg"
                      className="h-[6rem] top w-[6rem] object-cover"
                    />
                    <div className="flex-col my-auto">
                      <h1 className=" mx-4 my-auto font-semibold text-black">
                        Megachan, huwuwww anak presiden ni bosss senggol dong
                        srepetetetetetetetet ashiapp
                      </h1>
                      <h1 className=" mx-4 mt-2 my-auto text-sm font-medium text-black">
                        8 Juni 2023 | 16:29 Wib
                      </h1>
                    </div>
                  </div>
                  <div className="flex m-3 my-2 w-full">
                    <img
                      src="./assets/berita2.jpg"
                      className="h-[6rem] top w-[6rem] object-cover"
                    />
                    <div className="flex-col my-auto">
                      <h1 className=" mx-4 my-auto font-semibold text-black">
                        Megachan, huwuwww anak presiden ni bosss senggol dong
                        srepetetetetetetetet ashiapp
                      </h1>
                      <h1 className=" mx-4 mt-2 my-auto text-sm font-medium text-black">
                        8 Juni 2023 | 16:29 Wib
                      </h1>
                    </div>
                  </div>
                  <div className="flex m-3 my-2 w-full">
                    <img
                      src="./assets/berita2.jpg"
                      className="h-[6rem] top w-[6rem] object-cover"
                    />
                    <div className="flex-col my-auto">
                      <h1 className=" mx-4 my-auto font-semibold text-black">
                        Megachan, huwuwww anak presiden ni bosss senggol dong
                        srepetetetetetetetet ashiapp
                      </h1>
                      <h1 className=" mx-4 mt-2 my-auto text-sm font-medium text-black">
                        8 Juni 2023 | 16:29 Wib
                      </h1>
                    </div>
                  </div>
                  <div className="flex m-3 my-2 w-full">
                    <img
                      src="./assets/berita2.jpg"
                      className="h-[6rem] top w-[6rem] object-cover"
                    />
                    <div className="flex-col my-auto">
                      <h1 className=" mx-4 my-auto font-semibold text-black">
                        Megachan, huwuwww anak presiden ni bosss senggol dong
                        srepetetetetetetetet ashiapp
                      </h1>
                      <h1 className=" mx-4 mt-2 my-auto text-sm font-medium text-black">
                        8 Juni 2023 | 16:29 Wib
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};
export default Dashboard;