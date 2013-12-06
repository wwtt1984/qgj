Ext.define('WebInspect.view.Function', {
    extend: 'Ext.Panel',
    xtype: 'functionmain',
    id: 'functionmain',
    
    requires: [
        'WebInspect.view.Title',
        'Ext.carousel.Carousel',
        'Ext.dataview.List'
    ],
    config: {
   
        
    	style: 'background:url(resources/images/bg1.jpg);',
    	layout: 'fit',
        items: [
            {
                xtype: 'maintitle',
                width: '100%',
                height: '100px',
                docked: 'top'
            },
            {
            	xtype: 'carousel',
            	
            	
            	style: 'background: #ddd;',
            	items:[
            	{
            		
            	    xtype: 'list',
            	    id: 'noticelist',
            	    store: 'NoticeStore',
            	    cls: 'noticelist',
            	    

            	    onItemDisclosure: function(record, btn, index) {

               	        Ext.Msg.alert('Tap', 'Disclose more info for ' + record.get('firstName'), Ext.emptyFn);
            	    },
            	    
            	    itemTpl: Ext.create('Ext.XTemplate',
    	                '<div class="rylistcss">',
	                        '<div class="avatar" style="background-image: url({img}); background-size: 45px;background-repeat: no-repeat;">{[this.getNum(values)]}</div>',
			                '<div class="message"><h3>{text}</h3><h4>{content}</h4></div>',
			            '</div>',
			            {
	        	            getNum: function(values){

	        	            	var div = '';
	        	            	
                                if(values.num > 0){
                                	div += '<div class="num"><div style="margin-top:2px;">' + values.num +'</div></div>';
                                }

                                return div;
    	  	                }
			            }		            
                    )   
            	},
            	{
            	    xtype: 'list',
            	    id: 'functionlist',
            	    store: 'FunctionStore',
            	    cls: 'grid',
            	    
            	    itemTpl: Ext.create('Ext.XTemplate',
    	                '<div class="movie">',
	                        '<div class="img" style="background-image: url({image})"></div>',
	                        '<div class="title">{name}</div>',
			            '</div>'	            
                    )   
            	}]
            }
        ]
    },
    
    initialize: function(){
        Ext.getCmp('maintitle').onDataSet();	
    }
});
