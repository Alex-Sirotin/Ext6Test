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
            width: 250,
            collapsible: true,
            margin: '5 0 5 5'
        }, {
            title: 'Users',
            region: 'center',
            xtype: 'TestExt.view.UserGrid',
            layout: 'fit',
            margin: '5 5 5 5'
        }]
});
