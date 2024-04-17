import CoreTeamCard from "../coreTeamCard/CoreTeamCard";

export default function CoreTeamContainer() {
  return (
    <div className="">
      <span className="underline text-primaryBackground underline-offset-4">
        <h1 className="text-6xl text-primaryType text-center font-bold p-4">
          Core Team
        </h1>
      </span>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8">
        <CoreTeamCard
          name="Thomas"
          title="Vice President"
          img="/images/team/thomas.png"
        />
        <CoreTeamCard
          name="Carl"
          title="Communications Lead"
          img="/images/team/carl.png"
        />
        <CoreTeamCard
          name="Tiara"
          title="Community Engagement"
          img="/images/team/tiara.png"
        />
        <CoreTeamCard
          name="Cullah"
          title="IRL Events Coordinator"
          img="/images/team/cullah.png"
        />
        <CoreTeamCard
          name="Katia"
          title="Partnerships Lead"
          img="/images/team/katia.png"
        />
        <CoreTeamCard
          name="Tippi"
          title="Hacakthon Lead"
          img="/images/team/tippi.png"
        />
        <CoreTeamCard
          name="Vlad"
          title="Technology Lead and Newsletter"
          img="/images/team/vlad.png"
        />
        <CoreTeamCard
          name="Erin"
          title="Finace Lead"
          img="/images/team/erin.png"
        />
        <CoreTeamCard
          name="Nelson"
          title="Legal Affairs"
          img="/images/team/nelson.png"
        />
        <CoreTeamCard
          name="Andrew"
          title="Special Projects"
          img="/images/team/andrew.png"
        />
      </div>
    </div>
  );
}
