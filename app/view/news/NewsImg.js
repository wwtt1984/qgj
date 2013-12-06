Ext.define('WebInspect.view.news.NewsImg',{

	extend: 'Ext.Panel',
	xtype: 'newsimg',
	id: 'newsimg',
	
	requires:[
	    'Ext.carousel.Carousel',
        'Ext.Img'
	],
	
	config: {
		
		items:[
		{
			xtype: 'carousel',
			id: 'newscarousel',
			style: 'position: absolute;margin:0; padding:0;width:100%;height:100%;background: #000;',
		    direction: 'horizontal',

            directionLock: true
		},
		{
			xtype: 'panel',
			width: '100%',
			height: '2.2em',
			layout: 'hbox',
			items:[
			{
			    xtype: 'button',
			    iconCls: 'arrow_left',
			    id: 'newsback',
			    height: '100%',
			    left: 0,
			    ui: 'plain',
			    style: 'width:50px;margin:5px 0 0 5px;color:#fff;filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opacity:1;'
			}]
		}]		
	},
	
	
	onImgDataSet: function(values){

		var img = [];
        img = values.simg.split('$');
        var item =[];
        for(var i=0; i<img.length; i++){
        	
			item.push({xtype: 'image',cls: 'my-carousel-item-img',src: img[i]});
		}
		Ext.getCmp('newscarousel').setItems(item);
	}
})