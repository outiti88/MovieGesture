import { LightningElement } from 'lwc';
import methodName from '@salesforce/apex/MovieGestureController.methodName';

export default class MovieGesture extends LightningElement {

    isModalOpen = false;

    openModal(){
        this.isModalOpen = true;
    }
    
    closeModal(){
        this.isModalOpen = false;
    }
}