/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('NewApp.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    stores: {
        basetransactions: {
            type: 'transactions'
        },
        transactions: {
            type: 'transactions'
        }
    },

    data: {
        name: 'Testing',
        loremIpsum: '"Waaaaaah!" - Waluigi',
        userID: 32345,
        checkingAccount: {
            balance:2000,
            lastAccess: new Date()
        }
    }

});
