Ext.define('NewApp.view.main.Requires', {
    extend:Ext.Container,
    xtype: 'requires',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'NewApp.model.Base',
        'NewApp.model.Transactions',

        'NewApp.store.Transactions',

        'NewApp.view.main.MainController',
        'NewApp.view.main.MainModel',
        'NewApp.view.main.List',

        'NewApp.view.main.transactions.Transactions',
        'NewApp.view.main.transactions.TransactionsContainer',

        'NewApp.view.main.transactions.Deposit',
        'NewApp.view.main.transactions.DepositContainer',
        
        'NewApp.util.Transactions'
    ]

})