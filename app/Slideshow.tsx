import Image from 'next/image'
  import { useEffect, useState } from 'react'

  const images = [
    '/1.jpeg',
    '/2_cores.jpeg',
    '/5_cores.jpeg',
    '/6_cores.jpeg',
    '/7.png',
    '/8.jpeg',
  ]

  function getFrameSize(width: number) {
    if (width < 640) return { frameWidth: 120, frameHeight: 80 } // mobile
    if (width < 1024) return { frameWidth: 200, frameHeight: 170 } // tablet
    return { frameWidth: 270, frameHeight: 180 } // monitor
  }

  export default function Slideshow() {
    const [frameSize, setFrameSize] = useState(getFrameSize(typeof window !== 'undefined' ? window.innerWidth : 1024))
    const [numFrames, setNumFrames] = useState(8)

    useEffect(() => {
      const handleResize = () => {
        const vw = window.innerWidth
        setFrameSize(getFrameSize(vw))
        setNumFrames(Math.ceil((vw * 2) / frameSize.frameWidth) + 2)
      }
      handleResize()
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }, [frameSize.frameWidth])

    const allImages = Array.from({ length: numFrames }, (_, i) => images[i % images.length])
    const loopImages = [...allImages, ...allImages]

    return (
      <div className="relative w-full flex justify-center items-center max-w-[60%] sm:max-w-[60%] lg:max-w[100%] h-[140px] sm:h-[220px] md:h-[260px] slideshow-viewport overflow-hidden bg-white"
      >
        <div
          className="flex items-center slideshow-loop"
          style={{
            width: `${loopImages.length * frameSize.frameWidth}px`,
            height: `${frameSize.frameHeight + 40}px`,
          }}
        >
          {loopImages.map((src, idx) => (
            <div
              key={idx}
              className="mx-2 sm:mx-4 bg-white polaroid-frame flex flex-col items-center justify-end"
              style={{
                width: `${frameSize.frameWidth}px`,
                height: `${frameSize.frameHeight + 40}px`,
                padding: '8px 8px 24px 8px',
                boxSizing: 'border-box',
                transform: `rotate(${(idx % 2 === 0 ? -1 : 1) * (2 + (idx % 3))}deg)`,
              }}
            >
              <div className="relative w-full flex-1 flex items-center justify-center overflow-hidden rounded-md" style={{height: `${frameSize.frameHeight}px`}}>
                <Image
                  src={src}
                  alt={`Slideshow image ${(idx % images.length) + 1}`}
                  width={frameSize.frameWidth - 16}
                  height={frameSize.frameHeight}
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