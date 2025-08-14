"use client";

import downloadIcon from "@iconify/icons-lucide/download";
import eyeIcon from "@iconify/icons-lucide/eye";
import trashIcon from "@iconify/icons-lucide/trash";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useMemo } from "react";

import { Icon } from "@/components/Icon";
import {
    Button,
    Card,
    CardBody,
    Checkbox,
    Table,
    TableBody,
    TableHead,
    TableRow,
    maskClassesFn,
} from "@/components/daisyui";
import { cn, currencyHelper, dateHelper } from "@/helpers";
import { IEcommerceDashboardOrder } from "@/types/dashboards/ecommerce";
import arrowDownIcon from '@iconify/icons-lucide/arrow-down-circle';
import banknoteIcon from '@iconify/icons-lucide/banknote';
import arrowUpIcon from '@iconify/icons-lucide/arrow-up-circle';
import { useEcommerceDashboard } from "../use-ecommerce-dashboard";
import useUsuarios from '@/hooks/useTransacciones';
const OrderRow = ({ order }: { order: IEcommerceDashboardOrder }) => {
    const { orderTableSelected, onOrderTableSelection } = useEcommerceDashboard();
    // const checked = useMemo(() => orderTableSelected.includes(order.id), [orderTableSelected]);
    const isIngreso = order.tipo === 'in';

    const color = isIngreso ? 'text-green-700' : 'text-red-700';
    const label = isIngreso ? 'Ingreso' : 'Egreso';
    const icon = isIngreso ? arrowDownIcon : arrowUpIcon;
    const colorMap = {
        completed: 'bg-green-100 text-green-800',
        pending: 'bg-yellow-100 text-yellow-800',
        cancelled: 'bg-red-100 text-red-800',
    };

    const labelMap = {
        completed: 'Completado',
        pending: 'Pendiente',
        cancelled: 'Cancelado',
    };
    return (
        <TableRow className="cursor-pointer">
            {/* <Checkbox
                size={"xs"}
                checked={checked}
                aria-label="checked-order"
                id={`checked-order-${order.id}`}
                onChange={() => {}}
            /> */}

            {/* <div className="flex items-center space-x-3 truncate">
                <Image
                    src={order.image}
                    height={32}
                    width={32}
                    alt={"order image"}
                    className={cn("size-8 bg-base-content/10", maskClassesFn({ variant: "squircle" }))}
                />

                <p className="line-clamp-2 font-medium">{order.name}</p>
            </div> */}
            {/* 
            <div>
                <div className="font-medium">
                    {currencyHelper.sign}
                    {order.amount}
                </div>
            </div> */}
            <div className="text-nowrap text-xs">{dateHelper.formatted(order.attributes.created_at)}</div>
            <div>
                <div className={`flex items-center space-x-2 ${color}`}>
                    <div className="relative w-7 h-7">
                        <Icon icon={banknoteIcon} width={28} height={28} className="absolute" />
                        <Icon icon={icon} width={14} height={14} className="absolute top-0 right-0 bg-white rounded-full" />
                    </div>
                    <span className="text-sm font-semibold">{label}</span>
                </div>

                {/* <StatusWidget status={order.status} /> */}
            </div>
            <div className="text-nowrap text-xs">{order.attributes.included.withdrawal.bank_account.company_name}</div>
            <div>
                <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${colorMap[order.attributes.status]}`}
                >
                    {labelMap[order.attributes.status]}
                </span>
            </div>
                  <div className="text-nowrap text-xs font-semibold">{currencyHelper.sign}{order.attributes.total} USD</div>
                     <div className="text-nowrap text-xs font-semibold">{currencyHelper.sign}{order.attributes.fee_value} USD</div>
                      <div className="text-nowrap text-xs font-semibold">{currencyHelper.sign}{order.attributes.sender_wallet.balances.usd} USD</div>
            {/* <div className="flex items-center">
                <Button color="ghost" size="sm" shape={"square"} aria-label="Show product">
                    <Icon icon={eyeIcon} className="text-base-content/70" fontSize={20} />
                </Button>
                <Button
                    color="ghost"
                    className="text-error/70 hover:bg-error/20"
                    size="sm"
                    shape={"square"}
                    aria-label="Delete product">
                    <Icon icon={trashIcon} fontSize={20} />
                </Button>
            </div> */}
        </TableRow>
    );
};

// const StatusWidget = ({ status }: { status: IEcommerceDashboardOrder["status"] }) => {
//     if (status == "delivered") {
//         return (
//             <div className="inline rounded-badge border border-success/50 bg-success/5 px-3 py-1 text-xs font-medium text-success">
//                 Delivered
//             </div>
//         );
//     } else if (status == "cancelled") {
//         return (
//             <div className="inline rounded-badge border border-error/50 bg-error/5 px-3 py-1 text-xs font-medium text-error">
//                 Cancelled
//             </div>
//         );
//     } else if (status == "on_going") {
//         return (
//             <div className="inline rounded-badge border border-info/50 bg-info/5 px-3 py-1 text-xs font-medium text-info">
//                 On Going
//             </div>
//         );
//     } else
//         return (
//             <div className="inline rounded-badge border-base-content/70 bg-base-content/10 px-2 py-1 text-base-content">
//                 {status}
//             </div>
//         );
// };

const DashboardRecentOrder = () => {

    const { transacciones, loading, error } = useUsuarios();
    // console.log("pico", transacciones[0]?.transactions);
    // const { orders, orderTableSelectionState, onOrderTableAllSelection } = useEcommerceDashboard();

    return (
        <Card className="bg-base-100">
            <CardBody>
                <div className="flex items-center justify-between">
                    <span className="font-medium">Transacciones</span>
                    <Button
                        startIcon={<Icon icon={downloadIcon} fontSize={16} />}
                        color="ghost"
                        className={"bg-base-content/5"}
                        size={"sm"}>
                        Report
                    </Button>
                </div>
                <div className="overflow-auto">
                    <Table className="rounded-box">
                        <TableHead>
                            <span className="text-sm font-medium text-base-content/80">Fecha</span>
                            <span className="text-sm font-medium text-base-content/80">Tipo</span>
                            <span className="text-sm font-medium text-base-content/80">Nombre</span>
                            <span className="text-sm font-medium text-base-content/80">Estado</span>
                            <span className="text-sm font-medium text-base-content/80">Importe</span>
                              <span className="text-sm font-medium text-base-content/80">Transfer Fee</span>
                            <span className="text-sm font-medium text-base-content/80">Saldos</span>
                        </TableHead>

                        <TableBody>
                            {transacciones[0]?.transactions.map((transacciones: IEcommerceDashboardOrder, index: number) => (
                                <OrderRow order={transacciones} key={index} />
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </CardBody>
        </Card>
    );
};

export { DashboardRecentOrder };
