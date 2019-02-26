Ext.define('TestExt.view.Filter', {
    extend: 'Ext.Panel',
    renderTo: Ext.getBody(),
    alias: 'widget.TestExt.view.Filter',
    frame: true,
    items: [{
            defaults: {
                labelWidth: 80,
                labelAlign: 'right',
                width: '100%',
            },
            margin: 5,
            xtype: 'form',
            items: [{
                    xtype: 'textfield',
                    reference: 'filterLastName',
                    fieldLabel: 'Last name',
                    name: 'lastName'
                }, {
                    xtype: 'textfield',
                    reference: 'filterFirstName',
                    fieldLabel: 'First name',
                    name: 'firstName'
                }, {
                    xtype: 'textfield',
                    reference: 'filterEmail',
                    fieldLabel: 'Email',
                    name: 'email'
                }, {
                    xtype: 'numberfield',
                    fieldLabel: 'Min Age',
                    reference: 'filterMinAge',
                    name: 'minAge',
                    minValue: 0,
                    maxValue: 120,
                }, {
                    xtype: 'numberfield',
                    fieldLabel: 'Max Age',
                    reference: 'filterMaxAge',
                    name: 'maxAge',
                    minValue: 0,
                    maxValue: 120,
                }],
            buttons: [{
                    text: 'Apply',
                    handler: 'onApplyFilter'
                }, {
                    text: 'Clear',
                    handler: 'onClearFilter'
                }]
        }]
})