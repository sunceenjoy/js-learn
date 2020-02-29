/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('NewApp.view.main.TransactionsController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.transactions',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
    
    onInputClick: function (btn) {
        debugger;
        var me = this,
            id = btn.getItemId(),
            newBalance = null,
            vm = btn.lookupViewModel(),
            input = vm.get('inputamount'),
            mvm = me.getViewModel(),
            location = 'checkingAccount.balance',
            balance = mvm.get(location);

        id === 'depositbtn' ? newBalance = balance + input: newBalance = balance - input;
        
        if(!Ext.isNumber(input)||input<=0) {
            Ext.Msg.alert('Error', 'Invalid Entry!');
        } else if (newBalance<0) {
            Ext.Msg.alert('Error','You go broke!');            
        } else {
            mvm.set(location, newBalance);
            vm.set('inputamount', null);
       
            //Add a transaction record to the store
             var store = mvm.getStore('basetransactions'),
             id = mvm.get('userID');
             debugger;
           //  console.log(mvm)
            NewApp.util.Transactions.addTransaction(store,input,id,btn);
        }
        console.log(mvm.get(location))
    },

    filterTransactions: function() {
        debugger;
        var me = this,
            mvm = me.getMainVM(),
            store = mvm.getStore('basetransactions');
        store.clearFilter();
        console.log(store);
    },

    filterTransactionsStore: function(store,action) {
        if(!store){
            return;
        }
        store.clearFilter();
        store.filter('action', action)
    },

    activateDeposit: function(depoistview) {
        var store = this.getTransactionStore(depositView);
        this.filterTransactionStore(store,'deposit;')
    },

    showMsg: function (){
        console.log(this.event)
    }
});
