Ext.define('WebInspect.view.Login', {

    extend: 'Ext.Panel',
    xtype: 'login',
    id: 'login',
    requires: [
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Password'
    ],
    
    config:{
        layout: 'fit',
        items:[
        {
            xtype: 'formpanel',
            margin: '10px 0 0 0',
            items: [
            {
                xtype: 'fieldset',
                defaults: {
                    required: true,
                    labelAlign: 'left',
                    labelWidth: '40%'
                },
                items: [
                {
                    xtype: 'textfield',
                    id: 'name',
                    name: 'name',
                    label: '用户名'
//                    value: '何江波',
//                    autoCapitalize: false
                },
                {
                    xtype: 'passwordfield',
                    id: 'password',
                    name: 'password',
//                    value: '123',
                    label: '密码'
                }]
            },
            {
                xtype: 'panel',
                defaults: {
                    xtype : 'button',
                    style: 'min-height: 2.2em;',
                    cls   : 'demobtn',
                    flex  : 1,
                    margin: 10
                },
                layout: {
                    type: 'hbox',
                    align: 'middle'
                },
                items: [
                {
                    text: '登录',
                    id:  'confirm'
               
                }]
//                {
//                    text: '取消',
//                    id: 'cancel'
//                }]
            }]
        }]
    },
    
    initialize: function() {
    
    }
});
                