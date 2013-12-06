Ext.define('WebInspect.view.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'main',
    
    requires: [
        'WebInspect.view.Login',
        'WebInspect.view.Function'
    ],
    config: {

    	navigationBar: {
    		ui: 'light'
            
        },
    
    	style: 'background:url(resources/images/bg1.jpg);',

        items: [
            {
                xtype: 'login',
                title: '登录'
            }
        ]
    }
});
