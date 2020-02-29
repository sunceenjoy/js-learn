/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('NewApp.view.main.transactions.TransactionsViewModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.transactions',

    data: {
        inputamount: null
    },
    
    formulas: {
        balanceDisplay: {
            bind: {
                _balance: '{checkingAccount.balance}'
            },
            get: function(data) {
                return ("Balance:$" + data._balance);
            }
        } ,   
        colorMessage: {
            bind: {
                _balance: '{checkingAccount.balance}'
            },
            get: function(data) {
                return data._balance > 1500 ? 'fineLabel' : 'warningLabel';
            }
        }    
    }

});
