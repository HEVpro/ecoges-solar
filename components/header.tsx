import Data from '../data.json';

const Header = (props: any) => {
    return (
        <div>
            <div className="max-w-7xl mx-auto py-8 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="text-center">
                    <p className="mt-1 text-4xl font-extrabold text-gray-900 font-Inter sm:text-5xl sm:tracking-tight lg:text-6xl">
                        {Data.header.title}
                    </p>
                    <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                        Start building for free, then add a site plan to go live. Account plans unlock additional features.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Header;

