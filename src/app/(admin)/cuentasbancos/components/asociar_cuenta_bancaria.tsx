"use client"
import type React from "react"
import { useState } from "react"
import { Badge, Card, CardBody } from "@/components/daisyui";
import {useSupabasePais} from '@/hooks/useSupabasePaises';
interface BankData {
    accountHolderName: string
    accountNumber: string
    accountType: string
    bankName: string
    swiftCode: string
    routingNumber: string
    country: string
    currency: string
    address: string
}

export function AsociarCuentaBancaria() {
   
   
    const { paises, loading, error } = useSupabasePais();
    
    const [bankData, setBankData] = useState<BankData>({
        accountHolderName: "",
        accountNumber: "",
        accountType: "",
        bankName: "",
        swiftCode: "",
        routingNumber: "",
        country: "",
        currency: "",
        address: ""
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setBankData(prevState => ({ ...prevState, [name]: value }))
    }

    return (
        <div className="p-6 space-y-8">
            <Card className="relative bg-base-100 shadow">
                <CardBody className="p-6">
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Nombre del Beneficiario</label>
                            <input
                                type="text"
                                name="accountHolderName"
                                value={bankData.accountHolderName}
                                onChange={handleInputChange}
                                className="mt-2 block w-full border  focus:border-indigo-500 focus:ring-indigo-500"
                            />
                        </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700">País Banco Destino</label>
                            <select
                                name="country"
                                value={bankData.country}
                                onChange={handleInputChange}
                                className="mt-2 block w-full border focus:border-indigo-500 focus:ring-indigo-500"
                            >
                                <option value="">Seleccione un país</option>
                                {paises && paises.map((pais: any) => (
                                    <option key={pais.codigo} value={pais.nombre}>
                                        {pais.nombre}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Banco Destino</label>
                            <input
                                type="text"
                                name="accountHolderName"
                                value={bankData.accountHolderName}
                                onChange={handleInputChange}
                                className="mt-1 block w-full border rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Numero Cuenta Bancaria Beneficiario</label>
                            <input
                                type="text"
                                name="accountHolderName"
                                value={bankData.accountHolderName}
                                onChange={handleInputChange}
                                className="mt-1 block w-full border rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Código Swift</label>
                            <input
                                type="text"
                                name="accountHolderName"
                                value={bankData.accountHolderName}
                                onChange={handleInputChange}
                                className="mt-1 block w-full border rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Dirección Banco Destino</label>
                            <input
                                type="text"
                                name="accountHolderName"
                                value={bankData.accountHolderName}
                                onChange={handleInputChange}
                                className="mt-1 block w-full border rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                        </div>
                      
                        {/* Additional fields for account number, bank name, etc. */}
                    </form>
                    <div className="flex justify-end gap-4 mt-6">
                        <button
                            type="button"
                            className="btn btn-outline"
                            onClick={() => {
                                // Limpia el formulario o realiza otra acción de cancelar
                                setBankData({
                                    accountHolderName: "",
                                    accountNumber: "",
                                    accountType: "",
                                    bankName: "",
                                    swiftCode: "",
                                    routingNumber: "",
                                    country: "",
                                    currency: "",
                                    address: ""
                                });
                            }}
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            // onClick={...} // Aquí puedes manejar el submit si lo necesitas
                        >
                            Aceptar
                        </button>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}