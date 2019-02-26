Ext.define('TestExt.controller.UserController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.TestExt.controller.UserController',

    getUserStore: function () {
        var refs = this.getReferences(),
          grid = refs.userGrid,
          store = grid.getStore();

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
        var store = this.getUserStore();
        var filters = this.getFilterData();
        store.clearFilter();
        store.filter(filters);
    },

    onClearFilter: function () {
        var refs = this.getReferences(),
          store = this.getUserStore();

        store.clearFilter();

        refs.filterLastName.setValue(null);
        refs.filterFirstName.setValue(null);
        refs.filterEmail.setValue(null);
        refs.filterMaxAge.setValue(null);
        refs.filterMinAge.setValue(null);
    },

    onDelete: function (grid, rowIndex) {
        var store = grid.getStore(),
          rec = store.getAt(rowIndex);
        store.remove(rec);
        store.commitChanges();
    },

    onEdit: function (grid, rowIndex) {
        var store = grid.getStore(),
          rec = store.getAt(rowIndex),
          win = this.getUserForm('Edit User', rec);

        console.log(this);

        win.show();
    },
    
    getUserForm: function(title, rec) {
        return Ext.create('Ext.window.Window', {
            title: title,
            width: 640,
            layout: 'fit',
            modal: true,
            items: {
                xtype: 'TestExt.view.UserForm',
                userRecord: rec,
                border: false
            }
        });
    },

    onCreate: function () {
        var win = this.getUserForm('New User');
        win.show();
    },

    onSave: function(a,b,c,d,e) {
        var refs = this.getReferences();
        console.log(this);
    }


});