Ext.define('TestExt.store.UserStore', {
    extend: 'Ext.data.Store',
    model: 'TestExt.model.UserModel',
    name: 'userStore',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'data/mates.json'
    },
    listeners: {
        load: function (o, records) {
            var i = 1;
            Ext.each(records, function (rec) {
                rec.set('id', i++);
                rec.commit();
            })
        }
    }
});