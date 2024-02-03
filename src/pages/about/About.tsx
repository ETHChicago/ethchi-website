import AboutTextBox from "./elements/aboutTextBox/AboutTextBox";
import CoreTeamContainer from "./elements/coreTeamContainer/CoreTeamContainer";
import VolunteerContainer from "./elements/volunteerContainer/VolunteerContainer";

export default function About() {
  return (
    <>
      {/* about summary section */}
      <div className="bg-grid_bg_navy w-full h-full">
        <div className="p-8 lg:p-28">
          <AboutTextBox />
        </div>
      </div>

      {/* contributers section */}
      <div className="bg-primaryBrand w-full h-full">
        <CoreTeamContainer />
      </div>
    </>
  );
}
