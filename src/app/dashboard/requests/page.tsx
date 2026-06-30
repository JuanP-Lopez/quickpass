import { Header } from "@/components/ui/header/header";
// import { RequestCard } from "@/components/ui/request-card/request-card";
import { RequestEmpty } from "@/components/ui/requests-empty/requests-empty";
import { SearchBar } from "@/components/ui/searchbar/searchbar";
import { RequestTab } from "@/components/ui/requests-tabs/requests-tabs";
import { RequestAccordion } from "@/components/ui/request-data/request-data";

export default function Requests() {
    return (
        <div className="flex-1 flex-col">

            <Header header="Solicitudes"/>
            <main className="p-1 flex flex-col w-full">
                <div className="flex flex-col gap-1 justify-between lg:flex-row">
                    <RequestTab />
                    <SearchBar />
                </div>

                <div>

                    <RequestEmpty />

                    {/* <RequestAccordion 
                        usuario="Juan López"
                        evento="Fila pagos Caja 2"
                        fecha="24/06/26"
                        hora="13:20 p.m."
                    />
                    <RequestAccordion 
                        usuario="Juan López"
                        evento="Fila pagos Caja 2"
                        fecha="24/06/26"
                        hora="13:20 p.m."
                    />
                    <RequestAccordion 
                        usuario="Juan López"
                        evento="Fila pagos Caja 2"
                        fecha="24/06/26"
                        hora="13:20 p.m."
                    /> */}
                </div>

            </main>

        </div>
    );
}