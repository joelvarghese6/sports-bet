'use client'

import { createAppKit } from '@reown/appkit/react'
import { SolanaAdapter } from '@reown/appkit-adapter-solana/react'
import { solana, solanaTestnet, solanaDevnet } from '@reown/appkit/networks'
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets'
import { projectId } from '@/config'
//import { QueryClient } from '@tanstack/react-query';
import React, { type ReactNode } from 'react';


const solanaWeb3JsAdapter = new SolanaAdapter({
    wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()]
})


if (!projectId) {
    throw new Error('Project ID is not defined')
}

// Set up metadata
const metadata = {
    name: 'appkit-example',
    description: 'AppKit Example',
    url: 'https://appkitexampleapp.com', // origin must match your domain & subdomain
    icons: ['https://avatars.githubusercontent.com/u/179229932']
}

// Create the modal
const modal = createAppKit({
    adapters: [solanaWeb3JsAdapter],
    networks: [solana, solanaTestnet, solanaDevnet],
    metadata: metadata,
    projectId,
    features: {
        analytics: true // Optional - defaults to your Cloud configuration
    }
})

function ContextProvider({ children }: { children: ReactNode }) {


    return (
        <>
            {children}
        </>
    )
}

export default ContextProvider