import { useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Loader = ({ isVisible }: any) => {
    useEffect(() => {
        return isVisible ? document.body.classList.add('no-scroll') : document.body.classList.remove('no-scroll');
    }, [isVisible]);

    return (
        <>
            {isVisible && (
                <div className='loader flex flex-col'>
                    <div className="font-cursive text-4xl font-bold text-[#1C252E]">Sampatti Search</div>
                    <ThreeDots visible={true} height="80" width="80" color="#1C252E" radius="9" ariaLabel="three-dots-loading" />
                </div>
            )}
        </>
    );
};

export default Loader;
