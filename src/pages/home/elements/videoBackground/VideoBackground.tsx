
export default function VideoBackground() {

    return (
        <div className="flex w-full h-full justify-center items-center">
          <video autoPlay loop muted playsInline>
            <source src="/videos/ethchi-hype-video.mp4" type='video/mp4' />
          </video>
        </div>
    )
}
