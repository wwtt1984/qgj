Ext.define('WebInspect.view.Title', {
	extend: 'Ext.Panel',
	xtype: 'maintitle',
	id: 'maintitle',
	
	requires: [
        'Ext.XTemplate'
    ],
    
	config:{
		tpl:  Ext.create('Ext.XTemplate',
		  '<div style="height:100%;width:100%;">',
		      '<div style="position:absolute;height:100%;width:100%;background-color:#fff;filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacity:0;"></div>',
              '<div style="height: 60px; width:60px;float:left;margin:20px;background:url(resources/images/contact.png); background-position:center center;background-size:4.2em auto;border-radius: .4em;"></div>',
              '<div style="height: 100%; min-width: 150px; float: left; color: #fff;">',
                '<div style="height:50%;margin:27px 0 0 0;font-size: 18px;width:100%;">李先生</div>',
		        '<div style="height:50%;margin:6px 0 0 0;width:100%;font-size:15px;">15999999999</div>',
              '</div>',
              '<div style="height: 25px; width: 80px; float: right; color: #fff;text-align:center;font-size:15px;margin:40px 5px 0 0;padding:3px 15px 3px 15px;"><img src="resources/images/vpn.png" style="width:20px; height:18px;margin:0px 0 0px 0;float:left;"/><div style="margin:0 0 0 0;float:left;">vpn</div></div>',
		  '</div>'
		)
	},
	
	onDataSet: function(){
		this.setData([]);
	}	
});