import React, {useState} from 'react'

import Content from '../../components/Content/Content'
import Header from '../../components/Header/Header'
import Frame from '../../components/Frame/Frame'
import Overlay from '../../components/Overlay/Overlay'
import { createUseStyles } from 'react-jss'
import { motion } from 'framer-motion'

import VideoWide from '../../assets/video/motion.mp4'


const useStyle = createUseStyles({
    videoContainer:{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'flex-end',
    },
    background: {
        width: '100%',
        height: '100vh',
        objectFit: 'cover',
        objectPosition: 'center',
    },
    vimeo: {
        width: '80vw',
        height: '95vh',
        border: 'none'
    }
})

function Video() {

    const style = useStyle()

    const [overlay, setOverlay] = useState(false)

    const handleOpenOverlay = () => {setOverlay(true)}
    const handleCloseOverlay = () => {setOverlay(false)}


    return (
        <>
            <Content>
            <Header />
            <motion.div 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration:3, ease: 'easeOut'}}
                id="Video" 
                className={style.videoContainer}
            >

                <video autoPlay loop muted className={style.background} onClick={handleOpenOverlay}>
                    <source src={VideoWide} type="video/mp4" />
                </video>
                <Frame />
            </motion.div>
            </Content>

            {overlay &&
                <Overlay onClose={handleCloseOverlay}>
                    <iframe title="Intro" src='https://player.vimeo.com/video/732085536?h=5cb9947eaf&autoplay=1&loop=1&title=0&byline=0&portrait=0&' className={style.vimeo} allow="autoplay; fullscreen; picture-in-picture" />
                </Overlay>
            }
        </>
    )
}

export default Video