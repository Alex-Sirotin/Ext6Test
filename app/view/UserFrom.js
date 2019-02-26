Ext.define('TestExt.view.UserForm', {
    extend: 'Ext.form.Panel',
    renderTo: Ext.getBody(),
    alias: 'widget.TestExt.view.UserForm',
    margin: 5,
    defaults: {
        labelWidth: 80,
        labelAlign: 'right',
        width: '100%',
        allowBlank: false
    },
    items: [{
            xtype: 'textfield',
            reference: 'lastName',
            fieldLabel: 'Last name',
            name: 'lastName',
            allowBlank: false,
            minLength: 2,
            maxLength: 50
        }, {
            xtype: 'textfield',
            reference: 'firstName',
            fieldLabel: 'First name',
            name: 'firstName',
            allowBlank: false,
            minLength: 2,
            maxLength: 50
        }, {
            xtype: 'textfield',
            reference: 'email',
            fieldLabel: 'Email',
            name: 'email',
            allowBlank: false,
            vtype: 'email',
            maxLength: 50
        }, {
            xtype: 'numberfield',
            fieldLabel: 'Age',
            reference: 'age',
            name: 'age',
            allowBlank: false,
            minValue: 1,
            maxValue: 120
        }],
    buttons: [{
            text: 'Save',
            handler: 'onSave',
            formBind: true
        }]

})