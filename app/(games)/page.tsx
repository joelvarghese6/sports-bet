"use client";

import { ConnectButton } from "@/components/connect-button";
import { ActionButtonList } from "@/components/action-button-list";
import { InfoList } from "@/components/info-list";
import { UpcomingMatches } from "@/components/upcoming-matches";
import { BetInfo } from "@/components/bet-info";


export default function Home() {

  return (
    <div className="flex flex-col space-y-8 p-4">
      <UpcomingMatches />
      <BetInfo />
    </div>
  )
}