({
    handleMessage : function(component, message) {

        if(message !=null && message.getParam("recordData") !=null){
            component.set("v.messageReceived",message.getParam("recordData").value)
        }

    },

    inputHandler :function(component,event){
        console.log(event.target.value)
        component.set("v.messageValue",event.target.value)
    },
    publishMessage:function(component){
        let msg=component.get("v.messageValue")
        let message = {
            recordData:{
                value:msg
            }

        }

        component.find("SampleMessageChannel").publish(message)

    }

})
