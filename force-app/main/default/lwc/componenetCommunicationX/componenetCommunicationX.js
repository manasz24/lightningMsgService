
import { LightningElement, wire } from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/SampleChannel__c"
import {APPLICATION_SCOPE, MessageContext, subscribe, unsubscribe} from 'lightning/messageService'
export default class ComponenetCommunicationX extends LightningElement {
    receivedmessage
    subscription
    @wire(MessageContext)
    context


    // connectedCallback(){

    //     this.subscribeMessage()

    // }    


        //subscribe(messagecontext, messagechannel,listener,subscriberoption)

        subscribeMessage(){
        this.subscription=subscribe(this.context,SAMPLEMC,(message)=>{this.handleMessage(message)},{scope:APPLICATION_SCOPE})
    }

    handleMessage(message){
        this.receivedmessage=message.recordData.value? message.recordData.value : 'No Message Received'
    }


    unsubscribeMessage(){
        unsubscribe(this.subscription)
        this.subscription =null

    }

}