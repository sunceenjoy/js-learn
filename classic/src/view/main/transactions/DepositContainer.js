Ext.define('NewApp.view.main.transactions.DepositContainer', {
        extend: 'Ext.Container',
        xtype: 'depositcontainer',

        controller: 'transactions',
        viewModel: 'transactions',

        items: [ {
            xtype: 'deposit'
        },{
            xtype: 'transactions',
            margin: '20 0 0 0'
        }]
    })