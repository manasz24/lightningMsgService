import { LightningElement,wire } from 'lwc';
//import LMS api
import {MessageContext, publish} from 'lightning/messageService'
//refering the message channel
import SAMPLEMC from "@salesforce/messageChannel/SampleChannel__c"
export default class ComponenetCommunicationA extends LightningElement {
      inputvalue

    @wire(MessageContext)
    context   //indicates all the components which listens to this service


    inputHandler(event){

        this.inputvalue =event.target.value

    }
    

    publishMessage(){

        const message ={
            recordData : {
                value :this.inputvalue
            }
        }
            //publish(messagecontext, messsagchannel, message)
        publish(this.context,SAMPLEMC,message)

    }


}

