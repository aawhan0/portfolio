import React from 'react';

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm'>
      <div className='relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10 p-6'>
        <button
          onClick={closeModal}
          className='absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500 text-white font-bold'
          aria-label="Close Project Details"
        >
          ✕
        </button>

        {image && <img src={image} alt={title} className='w-full rounded-t-2xl mb-6' />}

        <h5 className='mb-2 text-2xl font-bold text-white'>{title}</h5>
        <p className='mb-3 font-normal text-neutral-400'>{description}</p>

        {subDescription && subDescription.map((subDesc, index) => (
          <p key={index} className='mb-3 font-normal text-neutral-400'>{subDesc}</p>
        ))}

        <div className='flex items-center justify-between mt-4'>
          <div className='flex gap-3'>
            {tags.map((tag) => (
              <img
                key={tag.id}
                src={tag.path}
                alt={tag.name}
                className='rounded-lg w-10 h-10 hover:opacity-80 cursor-pointer transition'
                title={tag.name}
              />
            ))}
          </div>

          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className='inline-flex items-center gap-1 font-medium hover:underline cursor-pointer text-blue-400'
          >
            View Project <img src="assets/arrow-up.svg" className='w-4 h-4' alt="arrow icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
