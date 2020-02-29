/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('NewApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.app-main',

    /**moved out the requires */
    requires: [
        'NewApp.view.main.Requires'
    ],   
    
    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Home',
        iconCls: 'icon-barcode',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'transactionscontainer'
        }]
    }, {
        title: 'Users',
        iconCls: 'fa-user',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Deposit',
        iconCls: 'fa-user',
        items: [{
            xtype: 'depositcontainer'
        }]
    }, {
        title: 'Transaction History',
        iconCls: 'fa-user',
        items: [{
            xtype: 'transactions'
        }]
    }, {
        title: 'Groups',
        iconCls: 'fa-users',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Settings',
        iconCls: 'fa-cog',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'UserDefined',
        iconCls: 'fa-cog',

            items: [{
                xtype: 'transactions'
            },
            {
                title: 'Settings',
                iconCls: 'fa-cog',
                bind: {
                    html: '{loremIpsum}'
                }
            }
        ]
        }
]
});