Ext.define('NewApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'NewApp.model.Personnel',

    data: { items: [
        { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" , cphone:'678-557-9541'},
        { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" },
        { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333", cphone:'678-557-9541' },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
