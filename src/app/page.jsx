"use client"

import Image from "next/image"
import {motion} from "framer-motion"
import { useRouter } from "next/navigation"

const Homepage = () => {
  const router = useRouter()
  return (
    <motion.div
      className="h-full"
      initial={{y: "-200vh"}}
      animate={{y: "0%"}}
      transition={{duration: 1}}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="https://res.cloudinary.com/rashot/image/upload/v1709614431/Rasheed_ackbjd.jpg" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Creating digital interfaces, shaping the future of design.
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Step into my digital playground, where creativity and innovation
            blend seamlessly. With a sharp focus on design and a mastery of
            frontend development, my portfolio exhibits a varied array of
            projects that exemplify my dedication to excellence.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white" onClick={ () => router.push( "/portfolio" ) }>
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black" onClick={ () => router.push("/contact")}>
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Homepage
