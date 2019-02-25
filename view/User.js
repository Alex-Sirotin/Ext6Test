Ext.define('TestExt.view.User', {
    extend: 'Ext.grid.Panel',
    renderTo: Ext.getBody(),
    alias: 'widget.TestExt.view.User',
    store: 'TestExt.store.User',
    width: '100%',
    height: 200,
    title: 'Application Users',
    controller: 'TestExt.controller.User',
    columns: [{
        text: '#',
        dataIndex: 'id',
        flex: 1
    }, {
        text: 'GUID',
        hidden: true,
        dataIndex: 'guid'
    }, {
        dataIndex: 'avatar',
        flex: 1,
        renderer: function(v, meta, rec) {
            if (!v) {
                 v = 'https://i.postimg.cc/RCcQFxcD/User.png';
            }
            return Ext.String.format('<img src="{0}" height="15">', v);
        }
    }, {
        text: 'First Name',
        dataIndex: 'name',
        flex: 4,
        renderer: function(v) {
            return v.first;
        }
    }, {
        text: 'Last Name',
        dataIndex: 'name',
        flex: 4,
        renderer: function(v) {
            return v.last;
        }
    }, {
        text: 'Email',
        dataIndex: 'email',
        flex: 4,
        renderer: function(v, meta, rec) {
            return Ext.String.format('{2}. {3}. - <a href="mailto:{0}">{1}</a>', v, v, rec.get('name').first.charAt(0), rec.get('name').last.charAt(0))
        }
    }, {
        text: 'Age',
        dataIndex: 'age',
        flex: 1
    }, {
        xtype:'actioncolumn',
        flex: 1,
        text: 'Actions',
        items: [{
            tooltip: 'Edit',
            iconCls: 'fas fa-edit',
            handler: 'onEdit'
            // handler: function(grid, rowIndex, colIndex) {
            //     var rec = grid.getStore().getAt(rowIndex);
            //     alert("Edit " + rec.get('name').last);
            // }
        }, {
            tooltip: 'Delete',
            iconCls: 'far fa-trash-alt',
            handler: 'onDelete'
            // handler: function(grid, rowIndex, colIndex) {
            //     var rec = grid.getStore().getAt(rowIndex);
            //     alert("Terminate " + rec.get('name').last);
            // }
        }]
    }]
})
