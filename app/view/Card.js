Ext.define('WebInspect.view.Card', {
    extend: 'Ext.Panel',
    xtype: 'maincard',
    id: 'maincard',
    
    requires: [
        'WebInspect.view.Login',
        'WebInspect.view.Function'
    ],
    config: {

    	layout: 'card',
    
    	style: 'background:url(resources/images/bg1.jpg);',

        items: [
            {
                xclass: 'WebInspect.view.Login'
            },
            {
                xclass: 'WebInspect.view.Function'
            }
        ]
    }
});
