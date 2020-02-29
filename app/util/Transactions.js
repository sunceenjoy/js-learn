Ext.define('NewApp.util.Transactions', {
    singleton: true,

    addTransaction: function(store,cash,id,btn) {
        var action = null,
            idBtn = btn.getItemId();
        idBtn === 'depositbtn' ? action = 'Deposit': action = 'Withdraw';
        store.add({
            user: id,
            action: action,
            amount: cash,
            date: new Date()
        })
    }
})