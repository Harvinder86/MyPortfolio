
import React from 'react'


const SkillsBar = () => {
    const percentage = 66;
  return (
    <>
    <div id='skillbg' className='h-[140vh]'>
      <div className='flex justify-center text-center text-6xl text-white  font-semibold '><h1>Ski</h1>
      <h1 className='text-6xl text-orange-600 '>lls</h1></div>
      
      <div className="skills  ">
        <div className="progress-bar-container w-40">
            <h2 className='ml-4'>HTML</h2>
            <div className="progress-bar w-[40vw]">
                <span className="percentage c"></span>
            </div>
        </div>
 
        <div className="progress-bar-container">
            <h2 className='ml-4'>CSS</h2>
            <div className="progress-bar w-[40vw]">
                <span className="percentage java"></span>
            </div>
        </div>
 
        <div className="progress-bar-container ">
            <h2 className='ml-4'>JavaScript</h2>
            <div className="progress-bar w-[40vw]">
                <span className="percentage python"></span>
            </div>
        </div>
        <br /><br /><br />
      
        <div className='ml-[50%]'>
        <div className="progress-bar-container">
            <h2 className='ml-4'>React JS</h2>
            <div className="progress-bar w-[40vw]">
                <span className="percentage html"></span>
            </div>
        </div>
 
        <div className="progress-bar-container">
            <h2 className='ml-4'>SQL</h2>
            <div className="progress-bar w-[40vw]">
                <span className="percentage css"></span>
            </div>
        </div>
 
        <div className="progress-bar-container">
            <h2 className='ml-4'>Java</h2>
            <div className="progress-bar w-[40vw]">
                <span className="percentage javascript"></span>
            </div>
        </div>
        </div>
        {/* ---------------------------------------------------------------------============ */}

        {/* <div className='w-[100vw]  h-[100vh] flex justify-center items-center'>
                    <iframe src="src\assets\CxrL.gif" frameborder="0" className=' w-[400px] h-[400px] ml-80 '></iframe>
                </div> */}

{/* <div className="w-[100vw] h-[100vh] flex justify-end items-center pr-40 pb-[90%]">
    <iframe 
        src="src/assets/CxrL.gif" 
        frameBorder="0" 
        className="w-[570px] h-[500px] relative mb-96 ml-96 "
    ></iframe>
</div> */}

       
      
        
    </div>
    </div>
    </>
  )
}

export default SkillsBar

