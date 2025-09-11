import React from 'react'

const Project = ({ title, description, subdescription, href, image, tags }) => {
  return (
    <>
      <div className='flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0'>
        <p className='text-2xl'>{title}</p>
        <div className='flex gap-5 mt-2 text-sand'>
          {tags.map((tag, index) => (
            <span key={index}>{tag.name || tag}</span>
          ))}
        </div>
        <button className='flex items-center gap-1 cursor-pointer hover-animation' onClick={() => window.open(href, '_blank')}>
          Read More
          <img src="assets/arrow-right.svg" className="w-5" alt="arrow icon" />
        </button>
      </div>
      <div className='bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full'/>
      <ProjectDetails title={title} description={description} subDescription= {subdescription} image={image} tags={tags} href= {href}/>
    </>
  )
}


export default Project
