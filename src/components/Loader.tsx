import { useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Loader = ({ isVisible }: any) => {
    useEffect(() => {
        if (isVisible) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isVisible]);

    return (
        <>
            {isVisible && (
                <div className='loader'>
                    <ThreeDots visible={true} height="80" width="80" color="#1C252E" radius="9" ariaLabel="three-dots-loading" />
                </div>
            )}
        </>
    );
};

export default Loader;
