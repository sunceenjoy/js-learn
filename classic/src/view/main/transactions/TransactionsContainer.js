Ext.define(
    'NewApp.view.main.transactions.TransactionsContainer', {
        extend: 'Ext.Container',
        xtype: 'transactionscontainer',

        controller: 'transactions',
        viewModel: 'transactions',
        cls: 'deposit',

        requires: [
            'NewApp.view.main.transactions.Transactions'
        ],

        items: [ {
            xtype: 'transactions'
        }

        ]
    }
)