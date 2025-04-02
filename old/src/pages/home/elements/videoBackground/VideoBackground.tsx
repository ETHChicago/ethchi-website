export default function VideoBackground() {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <VideoOverlay />
      <video autoPlay loop muted playsInline className="w-full">
        <source
          src="/videos/ethchi-hype-video-broll-only.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

function VideoOverlay() {
  return (
    <div className="absolute top-[200px] md:top-[260px] lg:top-[350px] w-[300px] md:w-[400px] lg:w-[800px] xl:top-[300px] xl:w-[1200px]">
      <div className="text-primaryType text-center">
        <div className="flex items-center justify-center p-4">
          <img
            src="/images/brand/ethchi_banner.svg"
            alt="ETHChi Banner"
            className="w-2/3 md:w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
