Ext.define('WebInspect.store.FunctionStore', {
    extend: 'Ext.data.Store',

    config: {
        model: 'WebInspect.model.FunctionModel',
        data:[
            {id: '01', name: '内网新闻', image: 'resources/images/function/aa.png'},
    		{id: '02', name: '综合信息', image: 'resources/images/function/bb.png'},
    		{id: '03', name: '通知公告', image: 'resources/images/function/cc.png'},
    		{id: '04', name: '水情信息', image: 'resources/images/function/dd.png'},
    		{id: '05', name: '雨情信息', image: 'resources/images/function/contact.png'},
    		{id: '06', name: '工情信息', image: 'resources/images/function/ee.png'},
    		{id: '07', name: '通讯录', image: 'resources/images/function/ff.png'}
        ],
                
        autoLoad: true
    }
});