 Ext.define('TestExt.controller.User', {
     extend: 'Ext.app.ViewController',
     alias: 'controller.TestExt.controller.User',
//     models: ['TestExt.model.User'],
//     stores: ['TestExt.store.User'],


    init: function() {
        console.log('Initialized Users! This happens before ' +
                     'the Application launch() function is called');
    },

    onApplyFilter: function() {
        var store = TestExt.store.User;
        store.filterBy(function(rec) {
            return (rec.age >= 35);
        });
    },

    onClearFilter: function() {
        var store = TestExt.store.User;
        store.clearFilter();
        //Ext.Msg.alert('Clear', 'ClearFilter');
    },
    
    onDelete: function(grid, rowIndex, colIndex) {
//        var rec = this.getView().getStore().getAt(rowIndex);
//        Ext.Msg.alert('Delete', 'Delete' + rec.name.last);
        Ext.Msg.alert('Clear', 'ClearFilter');
    },
    
    onEdit: function() {
//        var rec = this.getView().getStore().getAt(rowIndex);
//        Ext.Msg.alert('Edit', 'Edit' + rec.name.last);
        Ext.Msg.alert('Clear', 'ClearFilter');
    },
    
    onCreate: function() {
        Ext.Msg.alert('Create', 'Create');
    }
    
    
 });