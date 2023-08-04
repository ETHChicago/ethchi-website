import AboutTextBox from "./elements/aboutTextBox/AboutTextBox"

export default function About() {

    return(
        <>
            {/* about summary section */}
            <div className="bg-grid_bg_navy w-full h-full">
                <div className="p-28">
                    <AboutTextBox />
                </div>
            </div>
        </>
    )
}
