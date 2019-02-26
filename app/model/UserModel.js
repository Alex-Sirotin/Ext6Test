Ext.define('TestExt.model.UserModel', {
    extend: 'Ext.data.Model',
    idProperty: 'guid',
    fields: [{
            name: 'id',
            type: 'number',
        }, {
            name: 'guid',
            type: 'string',
        }, {
            name: 'age',
            type: 'number'
        }, {
            name: 'name'
        }, {
            name: 'lastName',
            type: 'string',
            mapping: function (data) {
                return data.name.last;
            }
        }, {
            name: 'firstName',
            type: 'string',
            mapping: function (data) {
                return data.name.first;
            }
        }, {
            name: 'email',
            type: 'string'
        }, {
            name: 'avatar',
            type: 'string'
        }
    ],
    validators: {
        lastName: [
            'precense'
        ]
    }
});