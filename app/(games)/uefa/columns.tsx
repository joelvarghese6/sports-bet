"use client"

import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  oponnent: string
  amount: number
  odds: "pending" | "processing" | "success" | "failed"
  bet: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "oponnent",
    header: "Opponent",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "odds",
    header: "Odds",
  },
  {
    id: "actions",
    //header: "Bet",
    cell: ({ row }) => {
      const bet = row.original

      return (
        <Button>Bet game</Button>
      )
    },
  },
]
