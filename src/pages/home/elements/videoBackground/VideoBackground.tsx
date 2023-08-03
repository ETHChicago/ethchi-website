
export default function VideoBackground({videoId}: {videoId: string}) {

    return (
        <div className="flex w-full h-screen">
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
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

              <p className="text-primaryType text-xl m-6">
                THREE DAYS OF BUILDING BRIDGES BETWEEN WEB3 BUILDERS, CREATORS, TRADITIONAL BUSINESSES,
                FINANCIAL EXPERTS AND POLICYMAKERS.
              </p>

            </div>
          </div>
        </div>
    )
}
