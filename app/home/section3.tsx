import { StickyScroll } from '@/components/ui/scroll-reveal';
import React from 'react'

type Props = {}

const Section3 = (props: Props) => {
    const content = [
        {
          "title": "Web Developer",
          "description": "Elevate your digital presence with our platform designed for Web Developers. Collaborate seamlessly, track real-time changes, and enjoy version control to ensure your projects are always up-to-date. Boost your productivity and streamline your workflow effortlessly."
        },
        {
          "title": "FullStack Developer",
          "description": "Embrace the power of collaborative editing tailored for FullStack Developers. Work harmoniously on both front-end and back-end aspects in real time. Bid farewell to version control headaches and experience a fluid development process, keeping your team aligned and projects on the cutting edge."
        },
        {
          "title": "3D Artist",
          "description": "Unleash your creativity with our platform catered to 3D Artists. Collaborate seamlessly with your team, witness real-time changes in your projects, and bid farewell to version control complexities. Stay focused on your artistry, while our platform takes care of the technical intricacies."
        },
        {
          "title": "Frontend Developer",
          "description": "Revolutionize your frontend development journey with our collaborative platform. Experience real-time updates, seamless collaboration, and effortless version control. Keep your projects in sync, eliminate confusion, and stay ahead in the fast-paced world of frontend development."
        },
        {
          "title": "Typescript Enthusiast",
          "description": "Calling all Typescript enthusiasts! Elevate your coding experience with our platform. Collaborate effortlessly, witness real-time changes, and never worry about version control again. Keep your TypeScript projects up-to-date, ensuring a smooth and uninterrupted development flow."
        }
      ];
    const content2 = [
        {
          "title": "Web Developer",
          "description": "Elevate your digital presence with our platform designed for Web Developers. Collaborate seamlessly, track real-time changes, and enjoy version control to ensure your projects are always up-to-date. Boost your productivity and streamline your workflow effortlessly."
        },
        {
          "title": "FullStack Developer",
          "description": "Embrace the power of collaborative editing tailored for FullStack Developers. Work harmoniously on both front-end and back-end aspects in real time. Bid farewell to version control headaches and experience a fluid development process, keeping your team aligned and projects on the cutting edge."
        },
        {
          "title": "3D Artist",
          "description": "Unleash your creativity with our platform catered to 3D Artists. Collaborate seamlessly with your team, witness real-time changes in your projects, and bid farewell to version control complexities. Stay focused on your artistry, while our platform takes care of the technical intricacies."
        },
        {
          "title": "Frontend Developer",
          "description": "Revolutionize your frontend development journey with our collaborative platform. Experience real-time updates, seamless collaboration, and effortless version control. Keep your projects in sync, eliminate confusion, and stay ahead in the fast-paced world of frontend development."
        },
        {
          "title": "Typescript Enthusiast",
          "description": "Calling all Typescript enthusiasts! Elevate your coding experience with our platform. Collaborate effortlessly, witness real-time changes, and never worry about version control again. Keep your TypeScript projects up-to-date, ensuring a smooth and uninterrupted development flow."
        }
      ];
      
  return (
    <div className='text-center'>
        <StickyScroll content={content}/>
    </div>
  )
}

export default Section3