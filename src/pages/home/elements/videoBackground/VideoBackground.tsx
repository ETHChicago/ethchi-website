
export default function VideoBackground({videoId}: {videoId: string}) {

    return (
        <div className="flex w-full h-full justify-center items-center">
          <video autoPlay loop muted>
            <source src="/videos/ethchi-hype-video.mp4" type='video/mp4' />
          </video>
        </div>
    )
}
