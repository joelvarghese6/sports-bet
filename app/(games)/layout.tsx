import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { SheetProvider } from "@/providers/sheet-provider";

type Props = {
    children: React.ReactNode;
}

const WrapperLayout = ({ children }: Props) => {
    return (
        <div className="h-full flex flex-col">
            <Header />
            <div className="h-full">
                <Sidebar className="hidden lg:flex"/>
                <main className="lg:pl-[256px] h-full">
                    <div className="h-full">
                        {children}
                    </div>
                </main>
            </div>
            <SheetProvider />

            {/* <Footer /> */}
        </div>
    )
}

export default WrapperLayout;