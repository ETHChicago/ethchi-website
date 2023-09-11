
export default function VideoBackground() {

    return (
        <div className="flex flex-col w-full h-full justify-center items-center">
          <VideoOverlay />
            <video autoPlay loop muted playsInline className="w-full">
              <source src="/videos/ethchi-hype-video-broll-only.mp4" type='video/mp4' />
            </video>
        </div>
    )
}

function VideoOverlay() {
  return (
    <div className="absolute top-[120px] md:top-[160px] lg:top-[250px] w-[300px] md:w-[400px] lg:w-[800px] xl:top-[300px] xl:w-[1400px]">
        <div className="text-primaryType text-center">

          <p className="text-primaryType text-md md:text-2xl font-bold">September 15-17 2023</p>
          <div className='flex items-center justify-center p-4'>
              <img 
                src="/images/brand/ethchi_banner.svg"
                alt="ETHChi Banner"
                className="w-2/3 md:w-full h-full"
              />
          </div>
          <p className="text-primaryType text-xs md:text-xl font-bold">
            THREE DAYS OF BUILDING BRIDGES BETWEEN WEB3 BUILDERS, CREATORS, TRADITIONAL BUSINESSES,
            FINANCIAL EXPERTS AND POLICYMAKERS.
          </p>
        </div>
      </div>
  )
}
