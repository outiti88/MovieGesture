public with sharing class MovieGestureController {
   @AuraEnabled
   public static string methodName(){
       try {
           return 'Test';
       } catch (Exception e) {
           throw new AuraHandledException(e.getMessage());
       }
   }
}
