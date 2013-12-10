
Ext.define('WebInspect.controller.MainControl',{
    extend: 'Ext.app.Controller',
    
    config:{
    	refs: {
    		main: 'main',
    		news: 'main news'
    	},
    	
    	control: {
    		'main':{
				initialize:'mainInit',
//				push: 'onMainPush',
//				pop: 'onMainPop',
				back: 'onMainBackTap'
			},
			'#confirm': {
    			tap: 'onLoginTap'
    		},
    		'#noticelist': {
    			itemtaphold: 'onNoticeListTapHold',
    			itemtap: 'onNoticeListTap'
    		},
    		'#functionlist': {
    			itemtap: 'onFunctionLsitTap'
    		},
    	
    		news: {
    			itemtap: 'onNewsListTap'
    		},
    		'#newsback': {
    			tap: 'onNewsBackTap'
    		}
    	}
    },
    
    mainInit: function(){
    	
//    	Ext.getCmp('noticelist').addCls('hidden-disclosure-list');
    },
    
    da: function(){
      
    },
    
    onMainBackTap: function(view, eOpts){
    	if(view.getActiveItem() == Ext.getCmp('functionmain')){
    		this.getMain().setNavigationBar({hidden: true});
    	}
    	else{
    		this.getMain().setNavigationBar({hidden: false});
    	}
    },
    
    onMainPush: function(view, item){

    	if(item.xtype == 'functionmain'){
    		this.getMain().setNavigationBar({hidden: true});
    	}
    	else{
    		this.getMain().setNavigationBar({hidden: false});
    	}
    },
    
    onMainPop: function(view, item){

    	
    	if(item == Ext.getCmp('news')){
    		this.view = Ext.getCmp('news')
    		this.view.destroy();
    		this.getMain().setNavigationBar({hidden: true});
    	}
    	else{
    		this.getMain().setNavigationBar({hidden: false});
    	}
    },
    
    onLoginTap: function(){
    	
    	var me = this;
    	
    	Ext.Viewport.setMasked({
       		xtype: 'loadmask',       		        
       		message: '登录中,请稍后...'
        });
        
    	WebInspect.app.user = Ext.getCmp('name').getValue();
    	WebInspect.app.password = Ext.getCmp('password').getValue();
    	    	   	
//    	if(WebInspect.app.user && WebInspect.app.password){
//    		 
//    		var results = WebInspect.app.user + '$' + WebInspect.app.password;
//    		Ext.data.proxy.SkJsonp.validate('Login',results,{
//                success: function(response) {
//                	if(response.success == "true"){
//                		Ext.Viewport.setMasked(false);
//                		
//                		var store = Ext.getStore('UserStore');
//                		store.add({name: Ext.getCmp('name').getValue(), password: Ext.getCmp('password').getValue()});
//                		store.sync();
//                		
//				    	if (!this.functionmain) {
//            		    	this.functionmain = Ext.create('WebInspect.view.Function');
//        		    	}
//        		    	
//        		    	Ext.getCmp('noticelist').addCls('hidden-disclosure-list');
//
//        		    	this.getMain().push(this.functionmain);	
//                	}
//                	else{
//                		Ext.Viewport.setMasked(false);
//                        Ext.Msg.alert('登录失败！用户名或密码错误！');
//                	}
//				    		
//                },
//                failure: function() {
//                	Ext.Viewport.setMasked(false);
//                    Ext.Msg.alert('验证失败！');
//                }
//            });
//    	}
//    	else{
//    		Ext.Viewport.setMasked(false);
//    		Ext.Msg.alert('用户名和密码不能为空！');
//    	}
    	Ext.Viewport.setMasked(false);
    	
    	
    	var store = Ext.getStore('UserStore');
        store.add({id: store.getAllCount(), name: Ext.getCmp('name').getValue(), password: Ext.getCmp('password').getValue()});
        store.sync();
                		
        this.functionmain = Ext.create('WebInspect.view.Function');
        
        		    	
        Ext.getCmp('noticelist').addCls('hidden-disclosure-list');

        this.getMain().setNavigationBar({hidden: true});
        this.getMain().push(this.functionmain);	
    	
    },
    
    //noticelist的长按事件，显示“删除”按钮。
    onNoticeListTapHold: function(list, index, target, record, e, eOpts){

    	list.lastTapHold = new Date();
    	Ext.getCmp('noticelist').removeCls('hidden-disclosure-list');        
    },
    
    onNoticeListTap: function(list, index, target, record, e, eOpts ){
    	
    	//判断是否为itemtap
    	if (!list.lastTapHold || (list.lastTapHold - new Date() > 1000)) {
    		
    		//判断是否为disclosure事件，若不是，则执行下列代码
    		if(!e.getTarget('.x-list-disclosure')){
    			//判断“删除”按钮是否已经显示，若已显示，则隐藏
    			if(Ext.getCmp('noticelist').getCls().length == 2){
                	Ext.getCmp('noticelist').addCls('hidden-disclosure-list');
    			}
    			else{
    	    		switch(index){
    		    		case 0:

           	            	this.task = Ext.create('WebInspect.view.Task');        	        

           	        		this.getMain().setNavigationBar({hidden: false});
        	        		this.getMain().push(this.task);	  
    		        		break;
    		    		case 1:

           	                this.news = Ext.create('WebInspect.view.news.News');    
           	                
           	        		this.getMain().setNavigationBar({hidden: false});
        	        		this.getMain().push(this.news);	  
    		        		break;
    	    		}
    			}
    		}
    	}
    	list.lastTapHold = null;
    },
    
    /////////////////////////////////////////////
    //测试
    onFunctionLsitTap: function(list, index, target, record, e, eOpts ){
//    	Ext.data.proxy.SkJsonp.validate('GetInfoList','',{
//            success: function(response) {
//            	alert('请求成功！');
//                if(response.success == "true"){
//                	
//                	
//                }
//                else{
//                	
//                }
//				    		
//            },
//            failure: function() {
//            	alert('请求失败！');
//            }
//    	});
    	
    	if(record.data.name == '内网新闻'){

    		var store = Ext.getStore('NewsStore');

    	    store.getProxy().setExtraParams({
                t: 'GetInfoList',
                results: 'news$jsonp'
            });
            
            Ext.Viewport.setMasked({
       		    xtype: 'loadmask',       		        
       		    message: '努力加载中...'
            });
            
            store.loadPage(1,function(records, operation, success) {Ext.Viewport.setMasked(false)});

            this.news = this.getNews();
            if(!this.news){
                this.news = Ext.create('WebInspect.view.news.News');
            }
            this.news.setStore(store);
           	                
           	this.getMain().setNavigationBar({hidden: false});
        	this.getMain().push(this.news);	  
    	}
    	else if(record.data.name == '综合信息'){

//    		var store = Ext.getStore('InfoStore');
//
//    	    store.getProxy().setExtraParams({
//                t: 'GetInfoList',
//                results: 'info$jsonp'
//            });
//            
//            Ext.Viewport.setMasked({
//       		    xtype: 'loadmask',       		        
//       		    message: '努力加载中...'
//            });
//            
//            store.loadPage(1,function(records, operation, success) {Ext.Viewport.setMasked(false)});
//
//            this.news = this.getNews();
//            if(!this.news){
//                this.news = Ext.create('WebInspect.view.news.News');
//            }
//            this.news.setStore(store);
//           	                
//           	this.getMain().setNavigationBar({hidden: false});
//        	this.getMain().push(this.news);	  
    	}
    	else{
    	
    		var store = Ext.create('Ext.data.Store', {
            	model: 'WebInspect.model.TestModel',

            	data: [
                	{ name: 'Tommy',   id: '01', date: '2013-10-27'  }
            	]
        	});
        
        	this.test = Ext.create('WebInspect.view.Test');        
        		    	
        	Ext.getCmp('test').setStore(store);

        	this.getMain().setNavigationBar({hidden: false});
        	this.getMain().push(this.test);	
    	}
    },
    
    onNewsListTap: function(list, index, target, record, e, eOpts ){
    	var store = Ext.getStore('NewsDetailStore');

    	store.getProxy().setExtraParams({
            t: 'GetInfo',
            results: record.data.stype + '$jsonp',
            sid: record.data.sid
        });

        this.newsdetail = Ext.create('WebInspect.view.news.NewsDetail');
        
        Ext.Viewport.setMasked({
       	    xtype: 'loadmask',       		        
       		message: '努力加载中...'
        });
        
        store.load(function(records, operation, success){
            Ext.Viewport.setMasked(false);
			
			debugger;
            Ext.getCmp('newsdetail').onDataSet(records[0]);  
        }, this);

        
//        Ext.getCmp('newsdetail').onDataSet(store.getAt(0));  
        this.getMain().setNavigationBar({hidden: false});
        this.getMain().push(this.newsdetail);	  
    },
    
    onNewsBackTap: function(){
    	Ext.getCmp('newsdetail').onViewHide();
    }
});