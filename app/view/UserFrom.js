Ext.define('TestExt.view.UserForm', {
    extend: 'Ext.form.Panel',
    renderTo: Ext.getBody(),
    alias: 'widget.TestExt.view.UserForm',
    controller: 'TestExt.controller.UserController',
    margin: 5,
    id: 'userEditForm',
    closeAction: 'onSave',
    defaults: {
        labelWidth: 80,
        labelAlign: 'right',
        width: '100%',
        msgTarget: 'under',
        allowBlank: false
    },
    modelValidation: true,
    items: [{
            xtype: 'textfield',
            fieldLabel: 'Last name',
            name: 'lastName',
            minLength: 2,
            maxLength: 50,
            bind: '{user.lastName}',
            vtype: 'alpha'
        }, {
            xtype: 'textfield',
            fieldLabel: 'First name',
            name: 'firstName',
            minLength: 2,
            maxLength: 50,
            bind: '{user.firstName}',
            vtype: 'alpha'
        }, {
            xtype: 'textfield',
            fieldLabel: 'Email',
            name: 'email',
            bind: '{user.email}',
            vtype: 'email',
            maxLength: 50
        }, {
            xtype: 'numberfield',
            fieldLabel: 'Age',
            name: 'age',
            minValue: 1,
            maxValue: 120,
            bind: '{user.age}'
        }, {
            xtype: 'hidden',
            name: 'guid',
            bind: '{user.guid}'
        }],
    buttons: [{
            text: 'Save',
            handler: 'onSave',
            formBind: true
        }, {
            text: 'Cancel',
            handler: 'onCancel'
        }]
})