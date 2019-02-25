Ext.define('TestExt.model.User', {
    extend: 'Ext.data.Model',
    fields: [
        'id',
        'guid', 
        'age', 
        'name', 
        'email',
        'avatar'
    ],
    validators: {
        name: [
            'precense'
        ]
    }
});