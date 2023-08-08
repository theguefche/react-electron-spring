import React from 'react'
import "./loader.css"

import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux"

export const Loader = () => {

    const isLoading = useSelector((state) => state.counter.isLoading)


    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className='w-full mt-5 flex justify-center'
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.1 }}
                >
                    <div className='Loader'>
                        <svg viewBox="25 25 50 50" fill='currentColor'>
                            <circle r="20" cy="50" cx="50"></circle>
                        </svg>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>

    )
}
