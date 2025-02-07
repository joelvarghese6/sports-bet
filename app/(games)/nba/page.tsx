import { BetInfo } from "@/components/bet-info";
import { UpcomingMatches } from "@/components/upcoming-matches";

export default function nba() {
    return (
        <div className="flex flex-col space-y-8 p-4">
            <UpcomingMatches />
            <BetInfo />
        </div>
    )
}