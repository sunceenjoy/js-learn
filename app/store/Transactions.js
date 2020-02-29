Ext.define('NewApp.store.Transactions', {
    extend: 'Ext.data.Store',
    
    alias: 'store.transactions',
    storeId: 'transactions',

    model: 'NewApp.model.Transactions',

    data: [
        {user:'32345', action:'withdrawal',amount:500,date:'04/12/2019'},
        {user:'32345', action:'deposit',amount:1000,date:'04/13/2019'},
        {user:'32345', action:'withdrawal',amount:300,date:'04/16/2019'}
    ]



})