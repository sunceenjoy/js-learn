Ext.define('NewApp.view.main.transactions.DepositContainer', {
        extend: 'Ext.Container',
        xtype: 'depositcontainer',

        controller: 'transactions',
        viewModel: 'transactions',
        initComponent() {
          this.callParent(arguments);
          alert('see me in DepositContainer')
        },
        listeners: {
          initialize :function() {
            alert('Why this is not executed')
          }
        },
        items: [ {
            xtype: 'deposit'
        },{
            xtype: 'transactions',
            margin: '20 0 0 0'
        }]
    })