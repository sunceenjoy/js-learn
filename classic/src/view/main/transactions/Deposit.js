Ext.define('NewApp.view.main.transactions.Deposit', {
    extend: 'Ext.panel.Panel',
    xtype: 'deposit',

    title: 'Deposit',
    
    listeners: {
        activate: 'filterTransactions',
        focusenter: 'showMsg',
        render: 'showMsg'
    },

    items: [{
        xtype:'label',
        bind: {
            html: '{balanceDisplay}',
            userCls: '{colorMessage}'
        },
        colspan: 3,
        margin: 10
    },{
        xtype:'numberfield',
        itemId:'depositfield',
        bind:{
            value:'{inputamount}'
        }
    },{
        xtype:'button',
        itemId:'depositbtn',
        text:'Deposit',
        listeners: {
            click:'onInputClick'
        }
    },{
        xtype:'button',
        itemId:'withdrawbtn',
        text:'Withdraw',
        listeners: {
            click:'onInputClick'
        }
    }],

    layout:{
        type:'table',
        columns: 3
    },

    defaults:{
        padding: 5,
        margin: 5,
        width: 150,
        height: 30
    },
})