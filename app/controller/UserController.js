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

    onDelete: function (grid, rowIndex, colIndex) {
//        var rec = this.getView().getStore().getAt(rowIndex);
//        Ext.Msg.alert('Delete', 'Delete' + rec.name.last);
        Ext.Msg.alert('Clear', 'ClearFilter');
    },

    onEdit: function () {
//        var rec = this.getView().getStore().getAt(rowIndex);
//        Ext.Msg.alert('Edit', 'Edit' + rec.name.last);
        Ext.Msg.alert('Clear', 'ClearFilter');
    },

    onCreate: function () {
        Ext.Msg.alert('Create', 'Create');
    }


});