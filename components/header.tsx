import Data from '../data.json';
import {useTranslation} from "next-i18next";

const Header = () => {
    const { t } = useTranslation('common');
    return (
        <div id="us">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="mt-1 text-4xl font-extrabold text-gray-900 font-Inter sm:text-5xl sm:tracking-tight lg:text-6xl">
                        {t('us-title')}
                    </h2>
                    <p className="max-w-xl mt-5 mx-auto text-gray-500 text-3xl">
                        {t('us-description')}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Header;

