import React, {useEffect} from 'react';
import styles from './css/style.module.css'; 
import { MainMenu } from "./menu/MainMenu";
import { motion } from "framer-motion"
function Home() {
    useEffect(() => {
        document.title = "Home"
     }, []);

    return (
        <motion.div
            key="modal"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
        >
                <MainMenu/>
            <div className={styles.container}>
                <h1>Home</h1>
            </div>
        </motion.div>
    )
}
    
export default Home;
    