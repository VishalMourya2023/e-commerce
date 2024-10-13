import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi quaerat
              corrupti esse, officiis distinctio dolorem eos laudantium ad beatae quasi 
              aliquid incidunt inventore itaque, fugit, cum modi minus asperiores libero.
              Eos, necessitatibus dolore quaerat ullam, magni minima rem est quidem minus 
              consequuntur sapiente ipsam exercitationem incidunt dicta maiores esse eius nihil
              quibusdam reiciendis natus illum? Officiis ullam minus maxime ab?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi quaerat
              corrupti esse, officiis distinctio dolorem eos laudantium ad beatae quasi 
              aliquid incidunt inventore itaque, fugit, cum modi minus asperiores libero.
              Eos, necessitatibus dolore quaerat ullam, magni minima rem est quidem minus 
              consequuntur sapiente ipsam exercitationem incidunt dicta maiores esse eius nihil
              quibusdam reiciendis natus illum? Officiis ullam minus maxime ab?
            </p>
            <b className='text-gray-800'>Our Mission</b>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti porro aspernatur sed
              quam laudantium illo sunt voluptatibus eius eos sit, mollitia optio fugit deleniti dolor
              at nulla commodi amet eaque.
            </p>
        </div>
      </div>
      <div className='text-2xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20 gap-2'>
        <div className='border px-10 md:px-16 py-8 sm:-20 flex flex-col gap-5'>
          <b>Quality Assurence :</b>
          <p className='text-gray-600'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam eos iusto iure enim porro id 
            ipsa atque ipsum, commodi beatae cupiditate. Accusantium maiores itaque ratione distinctio eaque 
            ullam recusandae temporibus?
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:-20 flex flex-col gap-5'>
          <b>Convenience :</b>
          <p className='text-gray-600'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam eos iusto iure enim porro id 
            ipsa atque ipsum, commodi beatae cupiditate. Accusantium maiores itaque ratione distinctio eaque 
            ullam recusandae temporibus?
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:-20 flex flex-col gap-5'>
          <b>Exceptional Customer Serviece :</b>
          <p className='text-gray-600'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam eos iusto iure enim porro id 
            ipsa atque ipsum, commodi beatae cupiditate. Accusantium maiores itaque ratione distinctio eaque 
            ullam recusandae temporibus?
          </p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About;