export default function Nav () {
    return (
        <nav className=" border-gray-200 dark:bg-gray-900 fixed w-full z-20">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">HA0</span>
                </a>
                <div className={`sm:block sm:w-auto`} id="navbar-default">
                    <ul className="font-medium flex p-0 flex-row sm:space-x-8 ">
                        <li>
                        <a href="#about" className="block py-2 px-3 rounded bg-transparent text-blue-700 p-0" aria-current="page">About</a>
                        </li>
                        <li>
                        <a href="#project" className="block py-2 px-3 text-gray-900 rounded p-0">Projects</a>
                        </li>
                        <li>
                        <a href="#contact" className="block py-2 px-3 text-gray-900 rounded hover:text-blue-700 p-0 ">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}