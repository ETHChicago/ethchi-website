
interface ITCPopup {
    url: string
}
 export default function TCPopup({url}: ITCPopup) {
    return (
        <div>
            <iframe src={url} />
        </div>
    )
 }