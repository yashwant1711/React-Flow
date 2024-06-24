export const Initaledges = [];
//  export const Initaledges = [{ id: "1-2", source: "1", target: "2", animated: true }];


export const Initialnodes = [
    {
        id: "1",
        position: { x: 100, y: 100 },
        data: { amount: 10 },
        type: 'paymentinit'
    },
    {
        id: "2",
        position: { x: 350, y: 20 },
        data: { currency: "USD", country: "Uited States", countryCode: "US" },
        type: 'paymentcountry'
    },
    {
        id: "3",
        position: { x: 350, y: 200 },
        data: { currency: "Pound", country: "England", countryCode: "GB" },
        type: 'paymentcountry'
    },
    {
        id: "4",
        position: { x: 550, y: -50 },
        data: { name: "Google-Pay", code: "Gp" },
        type: 'paymentprovider'
    },
    {
        id: "5",
        position: { x: 550, y: 125 },
        data: { name: "Stripe", code: "St" },
        type: 'paymentprovider'
    },
    {
        id: "6",
        position: { x: 550, y: 325 },
        data: { name: "Apple pay", code: "Ap" },
        type: 'paymentprovider'
    }
];
