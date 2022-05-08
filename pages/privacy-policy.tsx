import type {NextPage} from 'next'
import Navbar from "../components/navbar";
import Privacy from "../privacy-policy.json"
import Footer from "../components/footer";

const Home: NextPage = () => {

    return (
        <div>
            <Navbar/>
            <div className="flex items-center justify-center">
                <div className="w-2/3 px-20 font-Barlow text-justify">
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
