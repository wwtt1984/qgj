Ext.define('WebInspect.view.news.News', {
    extend: 'Ext.List',
    xtype: 'news',
    id: 'news',
    
    requires: [
        'Ext.plugin.ListPaging',
        'Ext.plugin.PullRefresh'
    ],
    
    config: {
    	
    	title: '新闻通知',

//    	store: 'NewsStore',            	    
            	    
        cls: 'history',
	    
	    loadingText: '努力加载中...',
	    scrollToTopOnRefresh: false,
	    
	    plugins: [
        { 
            xclass: 'Ext.plugin.ListPaging',
            loadMoreText: '加载更多...',
            noMoreRecordsText: '没有更多记录了...',
            autoPaging:true
        },
        { 
            xclass: 'Ext.plugin.PullRefresh',
            pullText: '下拉刷新...',
            releaseText: '松开进行刷新...',
            loadingText: '正在刷新...',
            loadedText: '刷新完成.',
            lastUpdatedText: '刷新时间:&nbsp;'
        }],
        
        emptyText: '<p class="no-searches">没有符合要求的记录</p>',
	    
	    itemTpl: Ext.create('Ext.XTemplate',
	        '<div class="listitem" style="min-height:7em;">',	            
	            '<div class="listheader" style="min-height:2em;font-size:18px;line-height:1.6em;">{stitle}</div>',
//	            '<div style="min-height: 10em; width: 100%;>',
	            '<div style="min-height: 10em; width: 100%;"><img src="{simg}" style="height:10em;width:100%; margin:0 0 0 0;padding:3px;" /></div>',
//	            '</div>',
	            '<div class="listtext" style="font-size:15px;">{spubdate}({sauthor})</div>',
	        '<div>'
	    )     	
    }
});