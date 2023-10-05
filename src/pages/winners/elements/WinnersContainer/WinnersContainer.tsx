import WinnerCard, {TEAMS} from "../WinnerCard/WinnerCard";

export default function WinnersContainer() {
    return (
        <div className="px-8 pb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-2">
                <WinnerCard teamName={TEAMS.WHALE_WATCHER} />
                <WinnerCard teamName={TEAMS.CHIC_CARE} />
                <WinnerCard teamName={TEAMS.HEY_NEIGHBOR} />
                <WinnerCard teamName={TEAMS.X_SAFE} />
                <WinnerCard teamName={TEAMS.INIT_MAIL} />
                <WinnerCard teamName={TEAMS.REVERBERATE} />
                <WinnerCard teamName={TEAMS.DAO_PROP_BOT} />
                <WinnerCard teamName={TEAMS.VITA} />
                <WinnerCard teamName={TEAMS.DAKINE_HOME} />
            </div>
        </div>
    )
}