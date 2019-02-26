Ext.define('TestExt.view.UserGrid', {
    extend: 'Ext.grid.Panel',
    renderTo: Ext.getBody(),
    alias: 'widget.TestExt.view.UserGrid',
    store: 'userStore',
    reference: 'userGrid',
    width: '100%',
    title: 'Application Users',
    controller: 'TestExt.controller.UserController',
    columns: [{
            text: '#',
            dataIndex: 'id',
            flex: 1
        }, {
            text: 'GUID',
            hidden: true,
            dataIndex: 'guid',
            align: 'left'
        }, {
            dataIndex: 'avatar',
            flex: 1,
            renderer: function (v, meta, rec) {
                if (!v) {
                    v = 'https://i.postimg.cc/RCcQFxcD/User.png';
                }
                return Ext.String.format('<img src="{0}" height="15">', v);
            }
        }, {
            text: 'First Name',
            dataIndex: 'firstName',
            flex: 4,
            align: 'left'
        }, {
            text: 'Last Name',
            dataIndex: 'lastName',
            flex: 4,
            align: 'left'
        }, {
            text: 'Email',
            dataIndex: 'email',
            flex: 4,
            align: 'left',
            renderer: function (v, meta, rec) {
                return Ext.String.format('{2}. {3}. - <a href="mailto:{0}">{1}</a>', v, v, rec.get('firstName').charAt(0), rec.get('lastName').charAt(0))
            }
        }, {
            text: 'Age',
            dataIndex: 'age',
            flex: 1
        }, {
            xtype: 'actioncolumn',
            flex: 1,
            text: 'Actions',
            items: [{
                    tooltip: 'Edit',
                    iconCls: 'fas fa-edit',
                    handler: 'onEdit'
                }, {
                    tooltip: 'Delete',
                    iconCls: 'far fa-trash-alt',
                    handler: 'onDelete'
                }]
        }],
    buttons: [{
        text: 'Create User',
        modal: true,
        handler: 'onCreate'
    }]
})
