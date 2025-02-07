"use client";

import { useState } from "react";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button"

const data = [
    {
        id: 1,
        name: "Arsenala vs Barcelona (16/02/2025)"
    },
    {
        id: 2,
        name: "Aston Villa vs Inter (18/02/2025)"
    },
    {
        id: 3,
        name: "Milan vs Paris (26/02/2025)"
    },
    {
        id: 4,
        name: "Madrid vs City (06/03/2025)"
    },
]

export const UpcomingMatches = () => {

    const [selectedMatch, setSelectedMatch] = useState(data[0].id);

    const handleSelectMatch = (e: number) => {
        setSelectedMatch(e);
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Upcoming Games</CardTitle>
                <CardDescription>Here you can view upcoming games in the league</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="container m-auto grid grid-cols-3 gap-4">
                    {data.map((items) => (
                        <Button
                            variant={selectedMatch === items.id ? "default" : "outline"}
                            key={items.id}
                            onClick={() => handleSelectMatch(items.id)}
                            
                        >
                            {items.name}
                        </Button>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}