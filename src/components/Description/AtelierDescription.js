import React from 'react'

import { createUseStyles } from 'react-jss'
import { motion } from 'framer-motion'

const useStyle = createUseStyles({
    description:{
      position: 'relative',
      display: 'flex',
      width: '80%',
      minWidth: '350px',
      flexDirection: 'column',
      alignItems: 'center',
      '& > div':{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }
    },
    caption: {
      fontSize: '56px',
      textAlign: 'center',
	  position: 'relative',
      margin: 0,
	  '&:after':{
      content: "'X'",
      position: 'absolute',
      bottom: '5px',
      right: '35px',
      rotate: '15deg',
      color: 'red',
      fontSize: '30px',
		  },
	  '&:before':{
      content: "'X'",
      position: 'absolute',
      top: 0,
      left: '65px',
      rotate: '-15deg',
      color: 'red',
      fontSize: '30px',
		  },
    },
    subCaption:{
      width: '290px',
      fontSize: '22px',
      '@media (max-width:900px)':{
        fontSize: '18px'
      }
    },
    text: {
        width: '290px',
        fontSize: '22px',
        '@media (max-width:900px)': {
            fontSize: '18px'
        }
    }
})

function AtelierDescription() {

    const style = useStyle()

    return (
        <motion.div 
            className={style.description}
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration:1, ease: 'easeInOut'}}>
            <h2 className={style.caption}>ATELIER <br /> FOR RENT</h2>
            <div>
                <h4 className={style.subCaption}>Perfect for subject content photography</h4>
                <p className={style.text}>Lorem, ipsum dolor amet consectetur adipisicing elit. Iste, earum dolores! Ullam eligendi velit at, iusto expedita libero fugit aliquam, eos tempore voluptatum ex in tempora nulla amet cum iure! </p>
            </div>

        </motion.div>
    )
}

export default AtelierDescription