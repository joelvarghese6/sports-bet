"use client";

import useCreateBetSheetHandler from "@/zustand/create-bet-sheet-handler"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";



export const CreateBetSheet = () => {

    const { isOpen, onClose } = useCreateBetSheetHandler();

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Create Bet</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-4">
                    <div>
                        <Select>
                            <SelectTrigger className="">
                                <SelectValue placeholder="Select the team" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="game">Game</SelectItem>
                                    <SelectItem value="opponent">Opponent</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        
                        <Input id="amount" type="number" placeholder="Enter the amount" />
                    </div>
                    <Button>Create</Button>

                </div>
            </SheetContent>
        </Sheet>
    )
}