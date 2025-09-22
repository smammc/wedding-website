import Image from 'next/image'
import { useEffect, useState } from 'react'

const images = [
  '/1.jpeg',
  '/2.jpeg',
  '/3.jpeg',
  '/4.jpeg',
  '/5.jpeg',
  '/6.jpeg',
]

export default function Slideshow() {
  // Polaroid frame size (50% bigger)
  const frameWidth = 270 // px
  const frameHeight = 180 // px
  const [numFrames, setNumFrames] = useState(8) // default for SSR

  // Dynamically calculate how many frames are needed to fill 2x viewport width
  useEffect(() => {
    const handleResize = () => {
      const vw = window.innerWidth
      // +2 to ensure no gap at the end
      setNumFrames(Math.ceil((vw * 2) / frameWidth) + 2)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [frameWidth])

  // Repeat images to fill the required number of frames, then duplicate for seamless loop
  const allImages = Array.from({ length: numFrames }, (_, i) => images[i % images.length])
  const loopImages = [...allImages, ...allImages]

  return (
    <div className="relative w-full flex justify-center items-center h-[220px] md:h-[260px] slideshow-viewport overflow-hidden bg-white">
      <div
        className="flex items-center slideshow-loop"
        style={{
          width: `${loopImages.length * frameWidth}px`,
          height: `${frameHeight + 40}px`,
        }}
      >
        {loopImages.map((src, idx) => (
          <div
            key={idx}
            className="mx-4 bg-white polaroid-frame flex flex-col items-center justify-end"
            style={{
              width: `${frameWidth}px`,
              height: `${frameHeight + 40}px`,
              padding: '12px 12px 32px 12px',
              boxSizing: 'border-box',
              // Add a slight rotation for a playful effect
              transform: `rotate(${(idx % 2 === 0 ? -1 : 1) * (2 + (idx % 3))}deg)`,
            }}
          >
            <div className="relative w-full flex-1 flex items-center justify-center overflow-hidden rounded-md" style={{height: `${frameHeight}px`}}>
              <Image
                src={src}
                alt={`Slideshow image ${(idx % images.length) + 1}`}
                width={frameWidth - 24}
                height={frameHeight}
                className="object-cover w-full h-full"
                style={{ objectFit: 'cover' }}
                priority={idx === 0}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Add the following CSS to your global stylesheet (app/globals.css):
// .slideshow-loop {
//   animation: slideshow-move 20s linear infinite;
// }
// @keyframes slideshow-move {
//   0% { transform: translateX(0); }
//   100% { transform: translateX(-50%); }
// }
