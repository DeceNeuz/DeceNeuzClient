






















import Logo from "./logo";
const Footer = () => {
    return (

        <footer className="bg-black text-white absolute bottom-0 left-0 right-0 font-oswald-serif ">
            <div className="md:flex md:justify-between md:items-center sm:px-20 px-4 bg-[#ffffff19] py-7 max-h-56 pt-16">
                <div className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5 font-oswald text-3xl">

                    <Logo />
                    <h6 className="text-sm font-oswald text-3xl text-gray-300">Redefining journalism for Tommorrow.</h6>
                    <div><h6 className="text-sm font-oswald text-gray-500 mt-14">Deceneuz © 2022. All rights reserved.</h6></div>
                </div>
                <div className="pt-16">
                    {/* </div> */}
                </div>

                <div className="md:flex md:justify-between md:items-left mt-8 mr-8 font-oswald">
                    <div>
                        <div className="font-bold pr-16 ">Company</div>

                        <div className="mt-2 space-y-1 text-gray-500">
                            <div>Terms of Service</div>
                            <div>Privacy policy</div>
                            <div>Contact</div>
                        </div>
                    </div>

                    <div>
                        <div className="font-bold px-16">Site Map</div>

                        <div className="px-16 py-1 text-gray-500">
                            <div className="py-1">Home</div>
                            <div className="py-1">About</div>
                            <div className="py-1">FAQs</div>
                            <div className="py-1">Account</div>
                        </div>
                    </div>

                    <div>
                        <div className="font-bold">Connect</div>

                        <div className="mt-2 space-y-1 text-gray-500">
                            <div>Facebook</div>
                            <div>Twitter</div>
                            <div>LinkedIn</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="md:flex md:justify-between md:items-right sm:px-20 px-4 bg-[#ffffff19] py-7 mx-50 text-gray-500 ">Made with love by Team QuadScript</div> */}
            <div className="flex justify-center mt-auto py-5 bg-[#ffffff19]">
                <h4 className="px-4 py-3 text-gray-500 pt-8 font-oswald">
                    Made with love by Team QuadScript
                </h4>
            </div>
        </footer>

    );
};

export default Footer;

