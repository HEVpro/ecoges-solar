import {ResponsiveMenu, NavbarObject} from '../../utils/types'
import Data from '../../data.json'
import Link from "next/link";

const ResponsiveMenu = ({edit, setEdit}: ResponsiveMenu) => {

    return (
        <>
            {edit ? (
                    <div className="relative h-10 w-6 mt-1 -mr-2 lg:hidden">
                        <div
                            className="absolute flex flex-col items-center place-content-evenly z-50 transform translate-y-16 -translate-x-14 p-2 w-auto bg-softGreen rounded-md text-white sm:translate-x-10">
                            {Data.navbar.map((item: string, index: any) =>
                                <Link key={index} href={"#"+item}>
                                    <a className="font-Barlow text-2xl my-3 font-medium px-4">{item}</a>
                                </Link>
                            )}
                            <button className="text-xl border-2 text-white rounded-full m-2 w-10 h-10" onClick={() => setEdit(false)}>X</button>
                        </div>
                    </div>) :
                (
                    <div className="relative h-10 w-6 mt-1 -mr-2 lg:hidden"></div>
                )

            }
        </>
    )
}
export default ResponsiveMenu;