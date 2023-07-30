
export function load() {
    
    return {
        products: [
            {
                id: '1',
                name: 'Baton de Manioc',
                price: 4000,
                countries:['Cameroon', 'Congo', 'Ghana'],
                towns:['Buea','Baffoussam','Douala'],
                promotion: false,
                discount: 4,
                harvestDay: new Date(),
                quantity:'56 tonnes',
                category:'Processed Food',
                supplier: {
                    id: '23'
                }
            },
            {
                id: '2',
                name: 'Riz Rouge',
                price: 4000,
                countries:['Cameroon', 'Gabon'],
                towns:['Adamawa','Ngoudere','Bertoa'],
                promotion: true,
                discount: 0.5,
                harvestDay: new Date(),
                quantity:'56 tonnes',
                category:'Food',
                supplier: {
                    id: '23'
                }
            },
            {
                id: '3',
                name: 'Haricot Rouge',
                price: 4000,
                countries:['Cameroon'],
                towns:['Adamawa','Ngoudere','Bertoa'],
                promotion: true,
                discount: 10,
                harvestDay: new Date(),
                quantity:'200 kg',
                category:'Food',
                supplier: {
                    id: '90'
                }
            },
            {
                id: '4',
                name: 'Mangue Sauvage',
                price: 4000,
                countries:['Chad'],
                towns:['Chad 1 ','Chad 2'],
                promotion: false,
                discount: 0,
                harvestDay: new Date(),
                quantity:'140 kg',
                category:'Fruit',
                supplier: {
                    id: '3'
                }
            },
            {
                id: '5',
                name: 'Mangue Greffer',
                price: 4000,
                countries:['Nigeria'],
                towns:['lagos','Okra 2'],
                promotion: false,
                discount: 0,
                harvestDay: new Date(),
                quantity:'10 kg',
                category:'Fruit',
                supplier: {
                    id: '3'
                }
            },
            {
                id: '6',
                name: 'Escargots',
                price: 2500,
                countries:['Cameroon','Guinea','RDC','Nigeria'],
                towns:['lagos','Okra 2','bla','blabla'],
                promotion: false,
                discount: 0,
                harvestDay: null,
                quantity:'10 kg',
                category:'Meat',
                supplier: {
                    id: '3'
                }
            },
            {
                id: '7',
                name: 'Poison Silure',
                price: 4500,
                countries:['Cameroon','Guinea','RDC','Nigeria'],
                towns:['lagos','Okra 2','bla','blabla'],
                promotion: false,
                discount: 0,
                harvestDay: null,
                quantity:'120 kg',
                category:'Meat',
                supplier: {
                    id: '3'
                }
            },
            {
                id: '8',
                name: 'Escargots',
                price: 2500,
                countries:['Cameroon','Guinea','RDC','Nigeria'],
                towns:['Adis-abeh ba','Okra 2','bla','blabla'],
                promotion: false,
                discount: 0,
                harvestDay: null,
                quantity:'10 kg',
                category:'Meat',
                supplier: {
                    id: '1025'
                }
            },
            {
                id: '9',
                name: '9',
                price: 2500,
                countries:['Cameroon','Guinea','RDC','Nigeria'],
                towns:['lagos','Okra 2','bla','blabla'],
                promotion: false,
                discount: 0,
                harvestDay: null,
                quantity:'10 kg',
                category:'Meat',
                supplier: {
                    id: '3'
                }
            },
            {
                id: '10',
                name: 'Mais sec',
                price: 500,
                countries:['Cameroon','Congo','Chad','Nigeria'],
                towns:['lagos','Bertoa 2','Adamawa','blabla'],
                promotion: false,
                discount: 0,
                harvestDay: null,
                quantity:'10 kg',
                category:'Meat',
                supplier: {
                    id: '3'
                }
            },
            {
                id: '11',
                name: 'Plantains',
                price: 2500,
                countries:['Cameroon','Guinea','RDC','Nigeria'],
                towns:['lagos','Okra 2','bla','blabla'],
                promotion: false,
                discount: 0,
                harvestDay: null,
                quantity:'10 kg',
                category:'Nourriture',
                supplier: {
                    id: '3'
                }
            },
            {
                id: '12',
                name: 'Champignons',
                price: 2500,
                countries:['Guinea','RDC','Burkina Faso'],
                towns:['lagos','Okra 2','bla','blabla'],
                promotion: false,
                discount: 0,
                harvestDay: null,
                quantity:'300 kg',
                category:'Meat',
                supplier: {
                    id: '3'
                }
            },
            {
                id: '13',
                name: 'Ignames Jaunes',
                price: 8700,
                countries:['Cameroon','Mali','Burkina Faso'],
                towns:['lagos','Okra 2','bla','blabla'],
                promotion: false,
                discount: 0,
                harvestDay: null,
                quantity:'300 kg',
                category:'Meat',
                supplier: {
                    id: '3'
                }
            },
            {
                id: '14',
                name: 'Baton de Manioc',
                price: 4000,
                countries:['Cameroon', 'Congo', 'Ghana'],
                towns:['Buea','Baffoussam','Douala'],
                promotion: false,
                discount: 4,
                harvestDay: new Date(),
                quantity:'56 tonnes',
                category:'Processed Food',
                supplier: {
                    id: '23'
                }
            },
            {
                id: '15',
                name: 'Riz Parfumer',
                price: 4000,
                countries:['Cameroon', 'Gabon'],
                towns:['Adamawa','Ngoudere','Bertoa'],
                promotion: true,
                discount: 0.5,
                harvestDay: new Date(),
                quantity:'56 tonnes',
                category:'Food',
                supplier: {
                    id: '23'
                }
            },
            {
                id: '16',
                name: 'Haricot Noire',
                price: 4000,
                countries:['Cameroon'],
                towns:['Adamawa','Ngoudere','Bertoa'],
                promotion: true,
                discount: 10,
                harvestDay: new Date(),
                quantity:'200 kg',
                category:'Food',
                supplier: {
                    id: '90'
                }
            },
            {
                id: '17',
                name: 'Mangue Urbaine',
                price: 4000,
                countries:['Chad'],
                towns:['Chad 1 ','Chad 2'],
                promotion: false,
                discount: 0,
                harvestDay: new Date(),
                quantity:'140 kg',
                category:'Fruit',
                supplier: {
                    id: '3'
                }
            },
            {
                id: '18',
                name: 'Mangue Greffer 4',
                price: 4000,
                countries:['Nigeria'],
                towns:['lagos','Okra 2'],
                promotion: false,
                discount: 0,
                harvestDay: new Date(),
                quantity:'10 kg',
                category:'Fruit',
                supplier: {
                    id: '3'
                }
            },
        ]
    }
}