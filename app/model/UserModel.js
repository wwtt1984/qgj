Ext.define('WebInspect.model.UserModel',{
	extend: 'Ext.data.Model',
    config: {
        fields: [
            'id', 
            'name',
            'password'
        ],
        
        proxy: {
            type: 'localstorage',
            id: 'user'
        }
    }
        
});