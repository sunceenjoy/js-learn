Ext.define('NewApp.view.main.transactions.Transactions', {
    extend: 'Ext.grid.Panel',
    xtype: 'transactions',

    title: 'Transaction History',

    columns: [
        {text: 'User', dataIndex: 'user'},
        {text: 'Action', dataIndex: 'action', flex: 1},
        {text: 'Amount', dataIndex: 'amount', flex: 1},
        {text: 'Date', dataIndex: 'date', flex: 1}
    ],

    bind: {
        store: '{basetransactions}'
    }
})