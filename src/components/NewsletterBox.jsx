import React from 'react';

const NewsletterBox = () => {

    const onsubmitHandler = (event) => {
        event.preventDefault();
    }

    return (
        <div className='text-center'>
            <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
            <p className="text-gray-400 mt-3">
                Lorem ipsum dolor, quasi dolorem consectetur provident.
            </p>
            <form className="w-3/4 sm:1/2 flex items-center gap-3 mx-auto my-6 border-[2px] pl-5" onSubmit={onsubmitHandler}>
                <input className='w-full sm:flex-1 outline-none' placeholder='enter your email' type="email" required/>
                <button type="submit" className='bg-black text-white text-xs px-8 py-2'>Subscribe</button>
            </form>
        </div>
    )
}

export default NewsletterBox;

