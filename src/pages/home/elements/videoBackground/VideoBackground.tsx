import YouTube from 'react-youtube'

export default function VideoBackground({videoId}: {videoId: string}) {
    const opts = {
        playerVars: {
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            modestbranding: 1,
            loop: 1,
            mute: 1,
        }
    }

    return (
        <div className="overflow-hidden">
          <YouTube 
            videoId={videoId} 
            opts={opts} 
            className="object-cover z-10" 
          />
          <div className="absolute top-20 left-0 w-full h-full flex items-center justify-center z-100">
            <div className="text-primaryType text-center">
              <p className="text-primaryType text-xl">Septemper 15-17 2023</p>

              <div className='flex items-center justify-center'>
                  <img 
                    src="/images/brand/ethchi_banner.svg"
                    alt="ETHChi Banner"
                    width={400}
                    height={160}
                    loading="lazy"
                  />
              </div>

              <p className="text-primaryType text-xl m-10">
                THREE DAYS OF BUILDING BRIDGES BETWEEN WEB3 BUILDERS, CREATORS, TRADITIONAL BUSINESSES,
                FINANCIAL EXPERTS AND POLICYMAKERS.
              </p>
            </div>
      </div>
        </div>
    )
}
