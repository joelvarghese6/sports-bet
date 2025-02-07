"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import useCreateBetSheetHandler from "@/zustand/create-bet-sheet-handler"

export const BetInfoHeader = () => {

    const { onOpen } = useCreateBetSheetHandler();

    return (
        <div className="flex justify-between items-center">
            <div>
                <CardTitle>Bets</CardTitle>
                <CardDescription>Here you can create new bet, or bet against the current one.</CardDescription>
            </div>
            <div>
                <Button onClick={onOpen}>Create bet</Button>
            </div>
        </div>
    )
}