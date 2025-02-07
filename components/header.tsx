'use client'

import { MobileSidebar } from "./mobile-sidebar"

export const Header = () => {

    return (
        <header className="h-20 w-full border-b-2 border-slate-200 px-4">
            <div className="lg:max-w-screen-kg mx-auto flex items-center justify-between h-full">
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <MobileSidebar />
                    <h3 className="font-bold text-2xl">Sports bet</h3>
                </div>
                <appkit-button />
            </div>
        </header>
    )
}
