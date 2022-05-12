import type {NextPage} from 'next'
import Privacy from "../privacy-policy.json"
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/ecoges-logo.png";
import PrimaryButton from "../components/atoms/button";

const Home: NextPage = () => {
    return (
        <div className="font-Barlow">
            <nav
                className="z-50 w-full bg-darkGreen flex items-center justify-evenly sm:justify-between py-2  font-Barlow relative text-white">
                <div className="ml-0 mr-4 md:ml-28">
                    <Link href="/">
                        <a>
                            <Image src={Logo} width={200} height={62}/>
                        </a>
                    </Link>
                </div>
                <PrimaryButton target={"/"} content={"Volver"} classname={"mr-6"}/>
            </nav>
            <div className="flex items-center justify-center">
                <div className="w-[85%] md:w-2/3 px-4 font-Barlow text-justify">
                    <h1 className="text-3xl font-bold my-2 text-center">{Privacy.politic}</h1>
                    <span>{Privacy["politic-description"]}</span>
                    <h2 className="text-2xl font-bold my-1 text-center">{Privacy.info}</h2>
                    <span>{Privacy["info-description"]}</span>
                    <h2 className="text-2xl font-bold my-1 text-center">{Privacy.use}</h2>
                    <span>{Privacy["use-description"]}</span>
                    <h2 className="text-2xl font-bold my-1 text-center">{Privacy.cookies}</h2>
                    <span>{Privacy["cookies-description"]}</span>
                    <h2 className="text-2xl font-bold my-1 text-center">{Privacy.links}</h2>
                    <span>{Privacy["links-description"]}</span>
                    <h2 className="text-2xl font-bold my-1 text-center">{Privacy.control}</h2>
                    <span>{Privacy["control-description"]}</span>
                </div>
            </div>
            <Footer />
        </div>
)
}

export default Home
