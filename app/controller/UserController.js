Ext.define('TestExt.controller.UserController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.TestExt.controller.UserController',

    getUserStore: function () {
        var store = Ext.getStore('userStore');
        return store;
    },

    getFilterData: function () {
        var refs = this.getReferences(),
          result = [{
                  property: 'lastName',
                  value: refs.filterLastName.getValue(),
                  anyMatch: true,
                  caseSensitive: false,
                  disableOnEmpty: true,
                  operator: 'like'
              }, {
                  property: 'firstName',
                  value: refs.filterFirstName.getValue(),
                  anyMatch: true,
                  caseSensitive: false,
                  disableOnEmpty: true,
                  operator: 'like'
              }, {
                  property: 'email',
                  value: refs.filterEmail.getValue(),
                  anyMatch: true,
                  caseSensitive: false,
                  disableOnEmpty: true,
                  operator: 'like'
              }, {
                  property: 'age',
                  value: refs.filterMaxAge.getValue(),
                  disableOnEmpty: true,
                  id: 'ageMin',
                  operator: '<='
              }, {
                  property: 'age',
                  id: 'ageMax',
                  value: refs.filterMinAge.getValue(),
                  disableOnEmpty: true,
                  operator: '>='
              }];
        return result;
    },

    onApplyFilter: function () {
        var store = this.getUserStore(),
          filters = this.getFilterData();
        store.clearFilter();
        store.filter(filters);
    },

    onClearFilter: function () {
        var store = this.getUserStore(),
          form = Ext.getCmp('userFilter').getForm();

        store.clearFilter();
        form.setValues({
            lastName: null,
            firstName: null,
            email: null,
            minAge: null,
            maxAge: null
        });
    },

    onDelete: function (grid, rowIndex) {
        Ext.Msg.confirm('Delete User?', 'Are you sure you want to delete a user?', function (result) {
            if (result == 'yes') {
                var store = grid.getStore(),
                  rec = store.getAt(rowIndex);
                store.remove(rec);
                store.commitChanges();
            }
        });
    },

    onEdit: function (grid, rowIndex) {
        var store = grid.getStore(),
          rec = store.getAt(rowIndex),
          win = this.getUserForm('Edit User', rec);
        win.show();
    },

    getUserForm: function (title, rec) {
        return Ext.create('Ext.window.Window', {
            title: title,
            width: 640,
            layout: 'fit',
            id: 'userWin',
            modal: true,
            closable: false,
            items: {
                xtype: 'TestExt.view.UserForm',
                record: rec,
                viewModel: {
                    data: {
                        user: rec
                    }
                },
                border: false
            }
        });
    },

    onCreate: function () {
        var win = this.getUserForm('New User');
        win.show();
    },

    validateRec: function (rec) {
        var validation,
          msg = null;

        validation = rec.getValidation();
        if (!validation.isValid()) {
            var msg = [],
              errData = validation.getData();
            if (errData) {
                Ext.iterate(errData, function (key, value) {
                    if (value !== true) {
                        msg.push(Ext.String.format('{0}: {1}', key, value));
                    }
                });
                msg = msg.join('<br />');
            } else {
                msg = 'Validation error!';
            }
        }

        return msg;
    },

    onSave: function () {
        var controller = this,
          form = Ext.getCmp('userEditForm'),
          win = Ext.getCmp('userWin'),
          vals = form.getValues(),
          isNew = !vals.guid,
          store = this.getUserStore(),
          rec,
          err = null;

        if (isNew) {
            delete vals.guid;
            rec = Ext.create('TestExt.model.UserModel')
            Ext.applyIf(vals, {id: store.getCount() + 1});
        } else {
            rec = store.findRecord('guid', vals.guid);
        }

        Ext.Msg.confirm('Save Changes?', 'Are you sure you want to save the changes?', function (btn) {
            if (btn == 'yes') {
                try {
                    rec.set(vals);
                    err = controller.validateRec(rec);
                    if (err) {
                        store.rejectChanges();
                        Ext.raise(err);
                    }
                    if (isNew) {
                        store.add(rec);
                    }
                    store.commitChanges();
                    win.close();
                    Ext.Msg.show({
                        title: 'Ok',
                        message: isNew ? 'Created' : 'Updated',
                        buttons: Ext.Msg.OK,
                        icon: Ext.Msg.INFO
                    });
                } catch (ex) {
                    Ext.Msg.alert(ex.name, ex.message)
                }
            }
        });
    },

    onCancel: function () {
        var store = this.getUserStore(),
          win = Ext.getCmp('userWin');

        store.rejectChanges();
        win.close();
    },

});