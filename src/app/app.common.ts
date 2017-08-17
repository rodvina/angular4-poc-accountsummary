export interface IAddress {
    street: string;
    city: string;
    state: string;
    zip: string;
}

export interface IPolicy {
    policyNumber: string;
    policyStatus: string;
    premium: string;
    effectiveDate: string;
    expirationDate: string;
    address: IAddress;
    policyType?: string;
    packageInd?: boolean;

}

export interface IPolicySummary {
    address: IAddress;
    policy: IPolicy;
}

export interface IAccountSummary {
    accountNumber: string;
    insuredName: string;
    policies: IPolicy[];
}

/*
 * Start of mock data
 */
export const data_search_results = [
    'Rodney',
     'Warren',
     'Diep'
];
export const data_address = {
        street: '505 Main Street',
        city: 'New York',
        state: 'NY',
        zip: '38329'
};

export const data_policy1: IPolicy = {
    policyNumber: '1928343301',
    policyStatus: 'bound',
    policyType: 'auto',
    effectiveDate: '01/01/2018',
    expirationDate: '06/01/2018',
    premium: '458.22',
    address: data_address
};

export const data_policy2 = {
    policyNumber: '1928343302',
    policyStatus: 'bound',
    policyType: 'home',
    effectiveDate: '01/01/2018',
    expirationDate: '12/01/2018',
    premium: '1458.22',
    address: data_address
};



export const data_policySummary = {
    address: data_address,
    policy: data_policy1
};

export const data_accountSummary = {
    accountNumber: '19283433',
    insuredName: 'Warren Smith',
    policies: [data_policy1, data_policy2]
};

export const data_accountSummary_Diep = {
    accountNumber: '90990000',
    insuredName: 'Diep Nguyen',
    policies: [data_policy2]
};

export const data_accountSummary_Rodney = {
    accountNumber: '23983993',
    insuredName: 'Rodney Odvina',
    policies: [data_policy1]
};



