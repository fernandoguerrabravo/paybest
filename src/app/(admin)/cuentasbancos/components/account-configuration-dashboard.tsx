"use client"

import { useState } from "react"
import buildingIcon from '@iconify/icons-lucide/building';
import { Badge, Card, CardBody } from "@/components/daisyui";
import { Icon } from "@/components/Icon";
import { AsociarCuentaBancaria } from "./asociar_cuenta_bancaria";

const bankAccounts = [
    {
        id: 1,
        bankName: "BANK OF AMERICA, N.A.",
        accountType: "Cuenta de cheques",
        accountNumber: "5051",
        icon: buildingIcon
    },
    {
        id: 2,
        bankName: "CITY NATIONAL BANK OF FLORIDA",
        accountType: "Cuenta de cheques",
        accountNumber: "6415",
        icon: buildingIcon
    }
]


export function AccountConfigurationDashboard() {
    const [selectedCurrency, setSelectedCurrency] = useState("USD")

    return (
        <div className="flex min-h-screen w-full">
            <div className="p-6 space-y-8">
                {/* Header */}
                <div>
                    <h1 className="text-2xl font-semibold text-gray-900">Configuración de la cuenta</h1>
                </div>
                {/* Main Content */}
                <div className="space-y-8">
                    {/* Money, Bank Accounts and Cards Section */}
                    <div>
                        <h2 className="text-lg font-medium text-gray-900 mb-6">
                            Cuentas Bancarias
                        </h2>
                        {/* Bank Accounts */}
                        <div className="space-y-6">
                            <div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {bankAccounts.map((account) => (
                                        <Card key={account.id} className="relative bg-base-100 shadow">
                                            <CardBody className="p-6">
                                                <div className="flex items-start justify-between mb-4">
                                                    <div className="p-3 bg-gray-100 rounded-lg">
                                                        <Icon icon={buildingIcon} width={20} height={20} />
                                                    </div>
                                                    <span className="text-sm text-gray-500">•• {account.accountNumber}</span>
                                                </div>
                                                <div className="space-y-1">
                                                    <h4 className="font-medium text-gray-900 text-sm leading-tight">
                                                        {account.bankName}
                                                    </h4>
                                                    <p className="text-sm text-gray-600">
                                                        {account.accountType} •••• {account.accountNumber}
                                                    </p>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    ))}
                                    {/* Add Bank Account Card */}
                                    <Card className="border-dashed border-2 border-gray-300 hover:border-blue-400 transition-colors cursor-pointer bg-base-100">
                                        <CardBody className="p-6 flex flex-col items-center justify-center text-center min-h-[140px]">
                                            <div className="p-3 bg-blue-50 rounded-lg mb-3">
                                                <Icon icon={buildingIcon} width={20} height={20} />
                                            </div>
                                            <span className="text-sm font-medium text-blue-600">
                                                Asociar cuenta bancaria
                                            </span>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="p-6 space-y-8">
                    <h2 className="text-lg font-medium text-gray-900 mb-6">
                        Asociar Cuenta Bancaria
                    </h2>
                    <AsociarCuentaBancaria />
                </div></div>
        </div>
    )
}
