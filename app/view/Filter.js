Ext.define('TestExt.view.Filter', {
    extend: 'Ext.Panel',
    renderTo: Ext.getBody(),
    alias: 'widget.TestExt.view.Filter',
    frame: true,
    controller: 'TestExt.controller.User',
    items: [{
        defaults: {
            labelWidth: 40,
            labelAlign: 'right',
            width: 230
        },
        frame: true,
        xtype: 'panel',
        items: [{
            xtype: 'textfield',
            fieldLabel: 'Name',
            name: 'name'
        }, {
            xtype: 'textfield',
            fieldLabel: 'Email',        
            name: 'email'
        }, {
            xtype: 'numberfield',
            fieldLabel: 'Age',        
            name: 'age',
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