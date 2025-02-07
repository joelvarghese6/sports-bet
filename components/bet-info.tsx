
import { Payment, columns } from "@/app/(games)/uefa/columns"

import { DataTable } from "@/components/data-table"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { BetInfoHeader } from "./bet-info-header"


async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
        {
            oponnent: "Milan",
            amount: 100,
            odds: "pending",
            bet: "m@example.com",
        },
        // ...
    ]
}

export const BetInfo = async () => {

    const data = await getData();

    return (
        <Card>
            <CardHeader>
                <div className="space-y-4">
                    <BetInfoHeader />
                    <div className="mt-8">
                        <Select defaultValue="game">
                            <SelectTrigger className="w-[280px]">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="game">Game</SelectItem>
                                <SelectItem value="oponnent">Oponnent</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <DataTable columns={columns} data={data} />
            </CardContent>
        </Card>
    )
}