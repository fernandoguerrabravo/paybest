import { IconifyIcon } from "@iconify/react";

export type IEcommerceDashboardRevenueStat = {
    amount: number;
    percent: number;
    series: IEcommerceDashboardRevenueSeries[];
};

type IEcommerceDashboardRevenueSeries = {
    date: Date;
    orders: number;
    revenues: number;
};

export type IEcommerceDashboardUserInteraction = {
    title: string;
    amount: string;
    percent: number;
};

export type IEcommerceDashboardRevenueDuration = "day" | "month" | "year";

export type IEcommerceDashboardCounter = {
    icon: IconifyIcon;
    title: string;
    amount: number;
    changes: number;
    changesAmount: number;
    inMoney: boolean;
};

export type IEcommerceDashboardMessage = {
    image: string;
    name: string;
    message: string;
    date: Date;
};

export type IEcommerceDashboardTopCountry = {
    name: string;
    orders: number;
};

export type IEcommerceDashboardOrder = {
    id: number;
    image: string;
    name: string;
    category: string;
    date: Date;
    attributes: {
      currency : string;
      total: string;
      fee_value: number;
      sender_wallet: {
        balances: {
            usd: number;
      };
    };
      status: 'completed' | 'pending' | 'cancelled';
      created_at : Date;
      included : {
        withdrawal : {
            country_iso_code: string;
            country_name:string;
            country_flag: string;
            bank_account: {
            company_name: string;
        }
      };
    };
}
    amount: number;
    
    tipo: 'in' | 'out';
};

export type IEcommerceDashboardData = {
    counters: IEcommerceDashboardCounter[];
    orders: IEcommerceDashboardOrder[];
    recentMessages: IEcommerceDashboardMessage[];
    overviewStats: Record<IEcommerceDashboardRevenueDuration, IEcommerceDashboardRevenueStat>;
    topCountries: IEcommerceDashboardTopCountry[];
    customerInteractions: IEcommerceDashboardUserInteraction[];
};
