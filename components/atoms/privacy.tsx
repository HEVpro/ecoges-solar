import Link from "next/link";
import {classNames} from "../../utils/utils";


const Privacy = () => {
    return (
            <Link href="/privacy-policy">
                <a className="ml-1">
                    Política de privacidad
                </a>
            </Link>
    )
}
export default Privacy;