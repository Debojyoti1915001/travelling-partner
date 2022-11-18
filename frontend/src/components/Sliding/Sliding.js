import React from 'react'
import "./Sliding.css"


const Sliding = () => {
  return (
    <section id='slider'>
      <input type="radio" name='slider' id='s1' />
        <input type="radio" name='slider' id='s2' />
          <input type="radio" name='slider' id='s3' checked/>
            <input type="radio" name='slider' id='s4' />
              <input type="radio" name='slider' id='s5' />

      <label htmlFor="s1" id='slide1'>
        <img src="./images/slidingImg.png" alt="" />
      </label>
      <label htmlFor="s2" id='slide2'>
        <img src="./images/slidingImg.png" alt="" />
      </label>
      <label htmlFor="s3" id='slide3'>
        <img src="./images/slidingImg.png" alt="" />
      </label>
      <label htmlFor="s4" id='slide4'>
        <img src="./images/slidingImg.png" alt="" />
      </label>
      <label htmlFor="s5" id='slide5'>
        <img src="./images/slidingImg.png" alt="" />
      </label>
    </section>
  )
}

export default Sliding