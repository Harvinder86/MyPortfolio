import React from 'react';
import SkillsBar from './SkillsBar';




const About = () => {
  
  return (
    <>
      
      <div id='About' className='w-[100vw] h-[100vh] '>
        <div className='relative flex items-center justify-center gap-2 inset-y-5 '>
          <h1 className='text-6xl text-white '>About</h1>
          <h1 className='text-6xl text-orange-600 '>Me</h1>
        </div>
        <div className='flex justify-between items-start mt-[100px]'>
          <div className='w-[60vw] text-orange-400 font-semibold ml-4 mt-10 text-center h-[50vh] text-2xl'>
            <p>
              Hey there! I'm Harvinder Singh, a budding web developer with a passion for crafting immersive digital experiences. As someone who loves to explore the endless possibilities of coding, I'm on a mission to create meaningful and impactful projects that leave a lasting impression.
            </p>
            </div>

            <div className='h-[14vh] w-[50vw] flex justify-between items-center absolute  '>
              <img id='photo' className='relative ' src="src\assets\WhatsApp Image 2024-05-20 at 11.54.40 AM.jpeg"   alt=""  />
                   </div>
        </div>

        

<section className="seperator-wrapper ">
  <div className="seperator gradient ">
  </div>
</section>


<div className='relative flex items-center justify-center inset-y-5' >
            <div className='mt-8'>
              {/* <h2 className='text-6xl w-[200x] text-orange-600 flex justify-center items-center '>Ed</h2>
              <h2 className='text-6xl w-[200x] text-orange-600 flex justify-center items-center '>ucation </h2>
              <h2 className='flex items-center justify-center text-6xl text-white '> Detail</h2> */}
              <div className='relative flex items-center justify-center inset-y-5 '>
          <h1 className='text-6xl text-orange-600 '>Edu</h1>
          <h1 className='relative gap-2 text-6xl text-white'>cation-</h1>
          
          <h1 className='text-6xl text-white '>Det</h1>
          <h1 className='text-6xl text-orange-600 '>ail</h1>
        

        </div>
              <br /><br /><br />
              <div className="main-section ">
                      <div className="container">
                        <div className="edu-exp">
                         
                           <div className="experience-list ">
                            <div className="experience-content">
                              <h2>MSD SR SEC PB SCH BATHINDA </h2>
                              <h3>2016-2017</h3>
                              <p>Matriculation</p>
                            </div>
                          </div>
                            <div className="experience-list">
                             <div className="experience-content">
                               <h2>Government Polytechnic College,Bathinda</h2>
                               <h3>2017-2020</h3>
                               <p>Electronics and Communications Engineering</p>
                             </div>
                            </div>

                         </div>

                                 <div className="edu-exp">
                                  
                                    <div className="experience-list">
                                     <div className="experience-content">
                                       <h2>Maharaja Ranjit Singh Punjab Technical University</h2>
                                       <h3>2020-2023</h3>
                                       <p>Electronics and Communications Engineering</p>
                                      </div>
                                    </div>
                                <div className="experience-list">
                                 <div className="experience-content">
                                   <h2>Q-Spider</h2>
                                   <h3>2023</h3>
                                   <p>Front End Training</p>
                                  </div>
                                </div>
                                </div>
                        </div>
                      </div>
               </div>
            </div>
           
            <br /><br /><br />

            <section className="seperator-wrapper mt-[0.5rem]">
  <div className="seperator gradient">
  </div>
</section>
<br /><br />


         
<SkillsBar/>

            
      </div>
     
    </>
  );
}

export default About;
