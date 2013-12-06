Ext.define('WebInspect.model.TaskModel',{
	extend: 'Ext.data.Model',
    config: {
       fields: [
            'StepID', 
            'TaskID',
            'ProcessName',
            'NodeName',
            'OwnerAccount',
            
            'ReceiveAt',
            'Comments',
            'TimeoutDeadline',
            'CreatAt',
            'Decription',
            
            'State',           
            'SerialNum',
            'AgentAccount'
        ]
    }
        
});