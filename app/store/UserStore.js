Ext.define('TestExt.store.UserStore', {
    extend: 'Ext.data.Store',
    model: 'TestExt.model.UserModel',
    storeId: 'userStore',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'data/mates.json'
    },
    onRenumber: function () {
        var i = 1,
          records = this.getRange();

        Ext.each(records, function (rec) {
            rec.set('id', i++);
        });
        this.commitChanges();
    },
    listeners: {
        load: 'onRenumber',
        add: 'onRenumber',
        remove: 'onRenumber'
    }
});