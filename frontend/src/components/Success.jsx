import React from 'react';

import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux"
import { resetSuccess } from '../features/CounterSlice';

export const Success = () => {

    const isSuccess = useSelector((state) => state.counter.isSuccess)
    const dispatch = useDispatch()

    React.useEffect(() => {
        if (isSuccess) {
            const timer = setTimeout(() => {
                dispatch(resetSuccess());
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [isSuccess, dispatch]);

    return (

        <AnimatePresence>
            {isSuccess && (
                <motion.div
                    initial={{ height: 0 ,  rotateY: -90 }}
                    animate={{ height: 'auto',  rotateY: 0  }}
                    exit={{ height: 0 ,   }}
                    transition={{ duration: 0.1 }}
                    style={{ overflow: 'hidden' }}
                >
                    <div className='success'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 1024 1024">
                            <path fill="#25AE88" d="M512 64a448 448 0 1 1 0 896a448 448 0 0 1 0-896zm-55.808 536.384l-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z" />
                        </svg>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
