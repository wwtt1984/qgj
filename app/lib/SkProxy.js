Ext.define('Ext.data.proxy.SkProxy', {
    extend: 'Ext.data.proxy.JsonP',
    alias: 'proxy.sk',
		
    config: {
        //url: 'http://localhost/htxcService/Data_Ht.ashx',
		//url: 'http://61.175.134.26:8090/htxcService/Data_Ht.ashx',
		url: 'http://bpm.qgj.cn/test/Data.ashx',
        callbackKey: 'callback'
    },
	
    buildRequest: function(operation) {
    	
		debugger;
		var request = this.callParent(arguments);
		var url = request.getUrl();
		this.putIOS(url);
        return request;
		
    },
	
	putIOS:function(url)
	{
		
	}

});