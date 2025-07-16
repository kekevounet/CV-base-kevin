import { motion } from 'framer-motion';
function Transition (OgComponent)
{
    return () =>(
        <>
        <OgComponent />
            <motion.div className="absolute top-0 left-0 w-full h-screen origin-top Transition"
                initial={{scaleY:0}}
                animate={{scaleY:0}}
                exit={{scaleY:1}}
                transition={{duration: 1, ease:[0.22,1,0.36,1]}}
            />
            <motion.div className="absolute top-0 left-0 w-full h-screen origin-top Transition "
                initial={{scaleY:1}}
                animate={{scaleY:0}}
                exit={{scaleY:0}}
                transition={{duration: 1, ease:[0.22,1,0.36,1]}}
            >
            </motion.div>
        </>
    )
}
export default Transition;