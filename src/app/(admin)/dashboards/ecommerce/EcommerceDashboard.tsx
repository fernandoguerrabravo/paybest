
"use client";
import { DashboardCounterWidget } from "./components/CounterWidget";
import { DashboardQuickChat } from "./components/QuickChat";
import { DashboardRecentOrder } from "./components/RecentOrder";
import { DashboardRevenueStatistic } from "./components/RevenueStatistic";
import { DashboardTopCountry } from "./components/TopCountry";
import { DashboardVisitorWidget } from "./components/VisitorWidget";
import dollarSign from "@iconify/icons-lucide/dollar-sign";

import arrowDownIcon from "@iconify/icons-lucide/arrow-down";
import arrowUpIcon from "@iconify/icons-lucide/arrow-up";
import arrowRightIcon from "@iconify/icons-lucide/arrow-right";
import { Icon } from "@/components/Icon";
import { Badge, Card, CardBody } from "@/components/daisyui";
import { currencyHelper } from "@/helpers";
import walletIcon from "@iconify/icons-lucide/wallet";
import buildingIcon from "@iconify/icons-lucide/building";
import { useEffect, useState } from "react";
const EcommerceDashboard = () => {
    
    
    return (
        <>
            <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
                <Card className="bg-base-100 shadow" bordered={false}>
                    <CardBody className="gap-2">
                        <div className="flex items-start justify-between gap-2 text-sm">
                            <div>
                                <p className="font-medium text-base-content/70"></p>
                                <div className="mt-4 flex items-center gap-2">
                                    <h2 className="inline text-4xl/none font-semibold">
                                        USD$ 5248.80
                                    </h2>
                                    

                                </div>
                            </div>
                            <div className="rounded bg-base-200 p-2">
                                <Icon icon={dollarSign} className="text-base-content/80" fontSize={20} />
                            </div>
                        </div>

                        <p className="text-sm font-medium">

                            <span className="ms-1.5 text-base-content/60">Saldo Disponible</span>
                        </p>
                    </CardBody>
                </Card>
                <Card className="bg-base-100 shadow" bordered={false}>
                    <CardBody className="gap-2">
                        <div className="flex items-start justify-between gap-2 text-sm">
                            <div>
                                <p className="font-medium text-base-content/70"></p>
                                <div className="mt-4 flex items-center gap-2">
                                    <h6 className="inline text-1xl/none font-semibold">
                                        <ol>
                                            <li> Beneficiary: Ecommerce Logistics LLC</li>
                                            <li> Bank Name: WELLS FARGO BANK, N.A.</li>
                                            <li> Routing number: 121000248</li>
                                            <li> Account number: 40630141462248841</li>
                                            <li> SWIFT Code: WFBIUS6SXXX</li>
                                        </ol>
                                    </h6>
                                </div>
                            </div>
                            <div className="rounded bg-base-200 p-2">
                                <Icon icon={walletIcon} className="text-base-content/80" fontSize={20} />
                            </div>
                        </div>

                        <p className="text-sm font-medium">

                            <span className="ms-1.5 text-base-content/60">Cuenta Bancaria en USD</span>
                        </p>
                    </CardBody>
                </Card>
            </div>
            {/* <div className="mt-6 grid gap-6 xl:grid-cols-12">
                <div className="xl:col-span-7">
                    <DashboardRevenueStatistic />
                </div>
                <div className="xl:col-span-5">
                    <DashboardVisitorWidget />
                </div>
            </div> */}
            <div className="mt-6 grid gap-6 xl:grid-cols-5 2xl:grid-cols-12 ">
                {/*TODO: Hide recent order in small screen due to responsive issue*/}
                <div className="col-span-12">
                    <strong>Accesos Rápidos</strong>
                    <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">

                        <CardBody className="gap-2">
                            <div className="flex items-start justify-between gap-2 text-sm">
                                <div>
                                    <p className="font-medium text-base-content/70"></p>
                                    <div className="mt-4 flex items-center gap-2">

                                        <h6 className="inline text-2xl/none font-semibold">
                                            <div className="flex items-center space-x-1">
                                                <Icon icon={walletIcon} width={20} height={20} />
                                                <Icon icon={arrowRightIcon} width={20} height={20} />
                                            </div>
                                        </h6>
                                        Retirar Dinero
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                        <CardBody className="gap-2">
                            <div className="flex items-start justify-between gap-2 text-sm">
                                <div>
                                    <p className="font-medium text-base-content/70"></p>
                                    <div className="mt-4 flex items-center gap-2">
                                        <h6 className="inline text-2xl/none font-semibold">
                                            <div className="flex items-center space-x-1">
                                                <Icon icon={buildingIcon} width={20} height={20} />
                                                <Icon icon={arrowRightIcon} width={20} height={20} />
                                            </div>
                                        </h6>
                                        Gestionar Cuentas Bancarias 
                                    </div>
                                </div>
                            </div>
                        </CardBody>

                    </div>
                </div>
                {/* <div className="xl:order-3 xl:col-span-3 2xl:col-span-4">
                    <DashboardTopCountry />
                </div>
                <div className="xl:order-2 xl:col-span-2 2xl:col-span-3">
                    <DashboardQuickChat />
                </div> */}
            </div>
            <div className="mt-6 grid gap-6 xl:grid-cols-5 2xl:grid-cols-12 ">
                {/*TODO: Hide recent order in small screen due to responsive issue*/}<div className="col-span-12">
                    <div className="hidden sm:block xl:col-span-3 2xl:col-span-5">

                        <DashboardRecentOrder /></div>
                </div>
                {/* <div className="xl:order-3 xl:col-span-3 2xl:col-span-4">
                    <DashboardTopCountry />
                </div>
                <div className="xl:order-2 xl:col-span-2 2xl:col-span-3">
                    <DashboardQuickChat />
                </div> */}
            </div>
            {/* Ejemplo de lista ordenada en JSX:
<ol>
  <li>Primer elemento</li>
  <li>Segundo elemento</li>
  <li>Tercer elemento</li>
</ol>

// Si tienes un array:
const items = ["Primer elemento", "Segundo elemento", "Tercer elemento"];
<ol>
  {items.map((item, idx) => (
    <li key={idx}>{item}</li>
  ))}
</ol> */}
            {/* Lista ordenada (ol)
<ol>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
</ol>

Lista desordenada (ul)
<ul>
  <li>Elemento A</li>
  <li>Elemento B</li>
</ul> */}
        </>
    );
};

export { EcommerceDashboard };
