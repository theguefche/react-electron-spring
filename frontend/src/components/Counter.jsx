import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';



const Counter = () => {
    const count = useSelector((state) => state.counter.counter)

    return (
        <div >
            <motion.div
                style={{
                    fontSize: 36,
                    fontWeight: 'bold',
                    color: 'white',
                    textAlign: 'center',
                }}
                key={count}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
            >
                {count}
            </motion.div>
        </div>
    );
};

export default Counter;
