'use client'
import { portfolioData, portfolioCategories, assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredProjects = activeCategory === 'all'
        ? portfolioData
        : portfolioData.filter(project => project.category === activeCategory);

    return (
        <div id='work' className='w-full px-[12%] py-20 scroll-mt-20'>
            {/* Section Header */}
            <h4 className='text-center mb-2 text-lg font-Ovo'>My Work</h4>
            <h2 className='text-center text-5xl font-Ovo'>Portfolio</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                Explore my projects across software development and automation solutions
            </p>

            {/* Category Filter Buttons */}
            <div className='flex flex-wrap justify-center gap-4 mb-12'>
                {portfolioCategories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`px-6 py-2 rounded-full border transition duration-300 ${
                            activeCategory === category.id
                                ? 'bg-black text-white border-black'
                                : 'border-gray-400 hover:bg-lightHover'
                        }`}
                    >
                        {category.label}
                    </button>
                ))}
            </div>

            {/* Project Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        className='border-[0.5px] border-gray-400 rounded-xl overflow-hidden
                                   cursor-pointer hover:-translate-y-2 transition-all duration-500
                                   hover:shadow-black group'
                    >
                        {/* Image Placeholder */}
                        <div className='w-full h-48 bg-gradient-to-br from-lightHover to-gray-100
                                        flex items-center justify-center relative overflow-hidden'>
                            <Image
                                src={assets.project_icon}
                                alt={project.title}
                                className='w-16 h-16 opacity-30'
                            />
                            {project.featured && (
                                <span className='absolute top-3 right-3 bg-black text-white text-xs
                                                 px-3 py-1 rounded-full'>
                                    Featured
                                </span>
                            )}
                        </div>

                        {/* Card Content */}
                        <div className='p-6'>
                            {/* Category Badge */}
                            <span className='inline-block px-3 py-1 bg-gray-100 text-gray-600
                                               text-xs rounded-full mb-3'>
                                {project.category === 'software-development'
                                    ? 'Software Development'
                                    : 'Automations'}
                            </span>

                            {/* Title */}
                            <h3 className='text-xl font-semibold text-gray-800 mb-3 font-Ovo'>
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className='text-gray-600 text-sm mb-4 line-clamp-3'>
                                {project.description}
                            </p>

                            {/* Technology Tags */}
                            <div className='flex flex-wrap gap-2'>
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className='text-xs px-2 py-1 bg-gray-50 text-gray-600 rounded'
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio
