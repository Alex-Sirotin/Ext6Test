Ext.define('TestExt.view.Demo', {
    extend: 'Ext.Panel',
    renderTo: Ext.getBody(),
    requires: [
        'TestExt.view.UserGrid',
        'TestExt.view.Filter',
        'TestExt.controller.UserController'
    ],
    controller: 'TestExt.controller.UserController',
    layout: 'border',
    items: [{
            title: 'Filter',
            region: 'west',
            xtype: 'TestExt.view.Filter',
            width: '25%',
            minWidth: 250,
            collapsible: true,
            layout: 'fit',
            split: true
        }, {
            title: 'Users',
            region: 'center',
            xtype: 'TestExt.view.UserGrid',
            layout: 'fit'
        }]
});
