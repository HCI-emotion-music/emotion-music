const AppMenu = () => {
    return(
        <div className="container px-4 mx-auto">
            <div className="flex items-center justify-between py-5">
                {/* <div className="w-auto pr-2">
                    <img src="" alt="" />
                </div> */}
                <div className="flex flex-wrap items-center">
                    <div className="w-auto hidden lg:block">
                        <ul className="flex items-center mr-8">    
                            <li className="mr-14 font-medium text-white hover:text-gray-200 tracking-tight">
                                <a
                                href="/#"
                                className="text-sm font-semibold leading-6 text-gray-900">
                                    Home
                                </a>
                            </li>
                            <li className="mr-14 font-medium text-white hover:text-gray-200 tracking-tight">
                                <a
                                href="/main"
                                className="text-sm font-semibold leading-6 text-gray-900">
                                    Main
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppMenu;
