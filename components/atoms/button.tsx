import Link from "next/link";
import {classNames} from "../../utils/utils";

interface Button {
    target: string;
    content: string;
    classname?: string;
}

const PrimaryButton = ({target, content, classname}: Button) => {
    return (
        <button className={classNames("h-10 bg-softGreen text-white rounded-md px-5 text-sm", classname)}>
            <Link href={target}>
                <a>
                    {content}
                </a>
            </Link>
        </button>
    )
}
export default PrimaryButton;