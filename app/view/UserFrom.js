Ext.define('TestExt.view.UserForm', {
    extend: 'Ext.form.Panel',
    renderTo: Ext.getBody(),
    alias: 'widget.TestExt.view.UserForm',
    userRecord: null,
    controller: 'TestExt.controller.UserController',
    margin: 5,
    closeAction: 'onSave',
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
        }, {
            xtype: 'hidden',
            name: 'guid',
            reference: 'guid'
        }],
    buttons: [{
            text: 'Save',
            handler: 'onSave',
            formBind: true
        }],
    initComponent: function () {
        this.callParent();
        if (this.userRecord) {
            this.setValue(this.userRecord)
        }
    },
    setValue: function (record) {
        var refs = this.getReferences();
        refs.lastName.setValue(record.get('lastName'));
        refs.firstName.setValue(record.get('firstName'));
        refs.age.setValue(record.get('age'));
        refs.email.setValue(record.get('email'));
        refs.guid.setValue(record.get('guid'));
    }
})