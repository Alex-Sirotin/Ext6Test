Ext.application({
    name: 'TestExt',
    stores: ['TestExt.store.UserStore'],

    launch : function() {

    },

    autoCreateViewport: 'TestExt.view.Demo'

});
