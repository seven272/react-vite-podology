import React from 'react'
import FungusImg from './fungusImg/FungusImg'
import Reasons from './reasons/Reasons'
import Prevention from './prevention/Prevention'
import Treatment from './treatment/Treatment'
import Symptoms from './symptoms/Symptoms'
import Quiz from './quiz/Quiz'
import Doctor from './doctor/Doctor'


const Root = () => {
  return (
    <>
      <FungusImg />
      <Reasons />
      <Symptoms />
      <Treatment />
      <Prevention />
      <Quiz />
      <Doctor />
    </>
  )
}

export default Root
