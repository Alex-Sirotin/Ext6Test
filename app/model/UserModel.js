Ext.define('TestExt.model.UserModel', {
    extend: 'Ext.data.Model',
    idProperty: 'guid',
    identifier: 'uuid',
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
    validationSeparator: '; ',

    validators: {
        lastName: [
            'presence',
            {type: 'length', min: 2, max: 50}
        ],
        firstName: [
            'presence',
            {type: 'length', min: 2, max: 50}
        ],
        age: [
            'presence', 
            {type: 'range', min: 1, max: 120}
        ],
        email: [
            'presence', 
            'email',
            {type: 'length', min: 5, max: 50}
        ],
        id: 'presence',
        guid: 'presence',
    }

});