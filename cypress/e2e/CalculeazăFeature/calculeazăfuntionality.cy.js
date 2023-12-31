
import  "../../support/commands";

describe("Verify carbon foot print functionality",()=>{
 
    beforeEach(()=>{
    cy.login();
 })

 


 it("T354 Acces the calculează button to start calculation of the carbon foot print (opens the modal)",()=>{
    //cy.get("p[class='details']").next('button').should("contain.text","Calculează");
    cy.get("button[class='button-try']").contains("Calculează").click();

    //Verify if the modal ovelay is displayed
    cy.get("div[class='Modal_modalOverlay__+l4of']").should('be.visible');

    //Make shure modal is opened
    cy.get("div[class='Modal_modalOverlay_ModalContainer__rmv+z']").should('be.visible');
    
    //Makeing shure modal is visible
    cy.get("div[class='Modal_modalOverlay_ModalContainer__rmv+z']").should((element)=>{
         let width=element.width();
         let height=element.height();
         expect(width).to.be.greaterThan(200);
         expect(height).to.be.greaterThan(200);
    })
 }) 

 it("T353 Verify if it is possible to complete 'Calatorii' section by skipping 'Nu' to each question",()=>{
    //cy.get("p[class='details']").next('button').should("contain.text","Calculează");
    cy.get("button[class='button-try']").contains("Calculează").click();

    //Verify if the modal ovelay is displayed
    cy.get("div[class='Modal_modalOverlay__+l4of']").should('be.visible');

    //Make shure modal is opened
    cy.get("div[class='Modal_modalOverlay_ModalContainer__rmv+z']").should('be.visible');

    //Begin the calculation of the first section
    cy.get("button[class='button-try']").contains("Vreau să incep").click();  
    
    //Click on Bine button
    cy.get("button[class='button-try']").contains("Bine").click();  

    //Next step button should be disabled
    cy.get('button[class="p-button p-component transport-question_transportQuestion_UpArrow__yOzkl p-button-icon-only p-disabled"]')
    .should("have.attr",'disabled');
    //Choose the City
    cy.get('div[class="DropeDown_dropeDown__STHps"] > select').select(1);

    //Make shure next step button is enabled -go to next step
    cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]')
    .should("not.have.attr","disabled")

    ///For the step where the town should be selected
    cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]').click();

     //Next step button should be disabled
     cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only p-disabled"]')
     .should("have.attr",'disabled');

    //Choose the town
    cy.get("div[class='DropeDown_dropeDown__STHps'] > select").select(1);

    //Make shure next step button is enabled
    cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]')
    .should("not.have.attr","disabled");

    //Go to next step
    cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]').click();
    

    cy.get("div[class='transport-question_transportQuestion_Question__4C8L2'] > div > span").eq(1).should('have.text',"Deții o mașină?");
    //Skip the step where user is asked if he owns a car -by selcting option NO
    cy.get('input[type="checkbox"]').eq(1).should('have.attr',"value","Nu").check();


    //Next step should be displayed 
    cy.get("div[class='transport-question_transportQuestion_Question__4C8L2'] > div > span").eq(1).should('have.text',"Ai zburat cu avionul în ultima lună?");

    //Skip the step where user is asked if the user used planes as a way of transportation -by selcting option NO
    cy.get('input[type="checkbox"]').eq(1).should('have.attr',"value","Nu").check();
    
    //Next step should be displayed
    cy.get("div[class='transport-question_transportQuestion_Question__4C8L2'] > div > span").eq(1).should('have.text',"Folosești transportul în comun?");

    //Skip the step where user is asked if the user used planes as a way of transportation -by selcting option NO
    cy.get('input[type="checkbox"]').eq(1).should('have.attr',"value","Nu").check();

    //Go to next step
    cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]').click();

    cy.get("span[class='transport-section_transportSection_Info__rfs4A']").should("be.visible");
    cy.get("span[class='transport-section_transportSection_Info__rfs4A']").should("have.text","Felicitări, ai terminat secțiunea de călătorii. Acum urmează secțiunea de gospodărie.");
 })

    it("T357 Verify if is able to complete  own a car section  by chooseing 'Da', to 'Detii o masina' question ",()=>{
        let random=cy.randomNumber();
        ///////Cmpleting first steps
                            //cy.get("p[class='details']").next('button').should("contain.text","Calculează");
                cy.get("button[class='button-try']").contains("Calculează").click();

                //Verify if the modal ovelay is displayed
                cy.get("div[class='Modal_modalOverlay__+l4of']").should('be.visible');

                //Make shure modal is opened
                cy.get("div[class='Modal_modalOverlay_ModalContainer__rmv+z']").should('be.visible');

                //Begin the calculation of the first section
                cy.get("button[class='button-try']").contains("Vreau să incep").click();  
                
                //Click on Bine button
                cy.get("button[class='button-try']").contains("Bine").click();  

                //Next step button should be disabled
                cy.get('button[class="p-button p-component transport-question_transportQuestion_UpArrow__yOzkl p-button-icon-only p-disabled"]')
                .should("have.attr",'disabled');
                //Choose the City
                cy.get('div[class="DropeDown_dropeDown__STHps"] > select').select(1);

                //Make shure next step button is enabled -go to next step
                cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]')
                .should("not.have.attr","disabled")

                ///For the step where the town should be selected
                cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]').click();

                //Next step button should be disabled
                cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only p-disabled"]')
                .should("have.attr",'disabled');

                //Choose the town
                cy.get("div[class='DropeDown_dropeDown__STHps'] > select").select(1);

                //Make shure next step button is enabled
                cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]')
                .should("not.have.attr","disabled");

                //Go to next step
                cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]').click();
                    
        ///////
        cy.get("div[class='transport-question_transportQuestion_Question__4C8L2'] > div > span").eq(1).should('have.text',"Deții o mașină?");

        //Next step button should be disabled
        cy.get("button[class='p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only p-disabled']").should("have.attr","disabled");

        //Choose 'Da' to the question to begin answering car owner questions 
        cy.get('input[type="checkbox"]').eq(0).should('have.attr',"value","Da").check();

        cy.get("button[class='p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only']").should('not.have.attr','disabled')

        cy.get("button[class='p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only']").click();

        //Check if the next modal has opened
        cy.get("div[class='transport-question_transportQuestion_Question__4C8L2'] > div > span").eq(1).should("have.text","Câți km ai parcurs (în medie) în ultima lună?");

        //introducing random number
        cy.get("input[id='total_km']").type(`${random}`);
        //introducing hardcoded number
        cy.get("input[id='total_km']").type(15);
        cy.get("button[class='p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only']").click();

        //make shure next step is displayed
        cy.get("div[class='transport-question_transportQuestion_Question__4C8L2'] > div > span").eq(1).should('have.text','Ce tip de carburant folosești?');
        
        //select an option from the drop down button reference at what type of carburant is used
        cy.get("div[class='DropeDown_dropeDown__STHps'] > select").select(1);

        cy.get("button[class='p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only']").click();

         //make shure next step is displayed
         cy.get("div[class='transport-question_transportQuestion_Question__4C8L2'] > div > span").eq(1).should('have.text','Cât carburant consumă mașina în medie, pe lună? (litri/kwh)?');

          //introducing random number
        cy.get("input[id='fuel_consumption']").type(`${random}`);
        //introducing hardcoded number
        cy.get("input[id='fuel_consumption']").type(15);

        cy.get("button[class='p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only']").click();

         //make shure next step is displayed
         cy.get("div[class='transport-question_transportQuestion_Question__4C8L2'] > div > span").eq(1).should('have.text','Mai ai o mașină pe care vrei să o adaugi?');

         //Verify if the questions for adding another car appears
         cy.get('input[type="checkbox"]').eq(0).should('have.attr',"value","Da").check();

         cy.get('div[class="transport-question_transportQuestion_Question__4C8L2"] > div >span').eq(1).should("have.text","Câți km ai parcurs (în medie) în ultima lună?");
    })

it("TC369  Verify if is able to complete  own a car section  by chooseing 'Da', to 'Ai zburat cu avionul in ultima luna?' question",()=>{
   //cy.get("p[class='details']").next('button').should("contain.text","Calculează");
cy.get("button[class='button-try']").contains("Calculează").click();

//Verify if the modal ovelay is displayed
cy.get("div[class='Modal_modalOverlay__+l4of']").should('be.visible');

//Make shure modal is opened
cy.get("div[class='Modal_modalOverlay_ModalContainer__rmv+z']").should('be.visible');

//Begin the calculation of the first section
cy.get("button[class='button-try']").contains("Vreau să incep").click();  

//Click on Bine button
cy.get("button[class='button-try']").contains("Bine").click();  

//Next step button should be disabled
cy.get('button[class="p-button p-component transport-question_transportQuestion_UpArrow__yOzkl p-button-icon-only p-disabled"]')
.should("have.attr",'disabled');
//Choose the City
cy.get('div[class="DropeDown_dropeDown__STHps"] > select').select(1);

//Make shure next step button is enabled -go to next step
cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]')
.should("not.have.attr","disabled")

///For the step where the town should be selected
cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]').click();

//Next step button should be disabled
cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only p-disabled"]')
.should("have.attr",'disabled');

//Choose the town
cy.get("div[class='DropeDown_dropeDown__STHps'] > select").select(1);

//Make shure next step button is enabled
cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]')
.should("not.have.attr","disabled");

//Go to next step
cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]').click();


cy.get("div[class='transport-question_transportQuestion_Question__4C8L2'] > div > span").eq(1).should('have.text',"Deții o mașină?");
//Skip the step where user is asked if he owns a car -by selcting option NO
cy.get('input[type="checkbox"]').eq(1).should('have.attr',"value","Nu").check();


//Next step should be displayed 
cy.get("div[class='transport-question_transportQuestion_Question__4C8L2'] > div > span").eq(1).should('have.text',"Ai zburat cu avionul în ultima lună?");
//Chooseing 'Da' for the question
cy.get('input[type="checkbox"]').eq(0).should('have.attr',"value","Da").check();

//Going to the next question
cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]').click();

//
cy.get('div[class="transport-question_transportQuestion_Question__4C8L2"] > div >span').eq(1).should("have.text","Care este orașul de plecare? ");

//Next step button has to be disabled
//cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only p-disabled"]').should('have.attr','dsabled');

//Select the flight start city
cy.get("div[class='DropeDown_dropeDown__STHps'] > select").select(1);

cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]').should('not.have.attr','disabled')
cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]').click();

//Make shure user is at "Care este orasul de plecare" question

cy.get("div[class='transport-question_transportQuestion_Question__4C8L2'] > div > span").eq(1).should('have.text',"Care este orașul destinție?");

cy.get("div[class='DropeDown_dropeDown__STHps'] > select").select(1);

cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]').should('not.have.attr','disabled')
cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]').click();

//Make shure usesr is at final question "Mai ai un zbor cu avionul pe care vrei să-l adaugi?"
cy.get("div[class='transport-question_transportQuestion_Question__4C8L2'] > div > span").eq(1).should('have.text',"Mai ai un zbor cu avionul pe care vrei să-l adaugi?");

//Make shure if option "Da" at 'Mai ai un zbor cu avionul pe care vrei să-l adaugi?' question is choosed the steps will repreat
cy.get('input[type="checkbox"]').eq(0).should('have.attr',"value","Da").check();

//here the button should be pressed to go to the next step but the user is redirected to the first step to add a flight
//cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]').click();

//FIrst step for introducing another flight should appear
cy.get("div[class='transport-question_transportQuestion_Question__4C8L2'] > div > span").eq(1).should('have.text',"Care este orașul de plecare? ");

})
  
it("Verify if is able to complete  own a car section  by chooseing 'Da', to 'Folosești transportul în comun?' question",()=>{
       //cy.get("p[class='details']").next('button').should("contain.text","Calculează");
    cy.get("button[class='button-try']").contains("Calculează").click();

    //Verify if the modal ovelay is displayed
    cy.get("div[class='Modal_modalOverlay__+l4of']").should('be.visible');

    //Make shure modal is opened
    cy.get("div[class='Modal_modalOverlay_ModalContainer__rmv+z']").should('be.visible');

    //Begin the calculation of the first section
    cy.get("button[class='button-try']").contains("Vreau să incep").click();  
    
    //Click on Bine button
    cy.get("button[class='button-try']").contains("Bine").click();  

    //Next step button should be disabled
    cy.get('button[class="p-button p-component transport-question_transportQuestion_UpArrow__yOzkl p-button-icon-only p-disabled"]')
    .should("have.attr",'disabled');
    //Choose the City
    cy.get('div[class="DropeDown_dropeDown__STHps"] > select').select(1);

    //Make shure next step button is enabled -go to next step
    cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]')
    .should("not.have.attr","disabled")

    ///For the step where the town should be selected
    cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]').click();

     //Next step button should be disabled
     cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only p-disabled"]')
     .should("have.attr",'disabled');

    //Choose the town
    cy.get("div[class='DropeDown_dropeDown__STHps'] > select").select(1);

    //Make shure next step button is enabled
    cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]')
    .should("not.have.attr","disabled");

    //Go to next step
    cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]').click();
    

    cy.get("div[class='transport-question_transportQuestion_Question__4C8L2'] > div > span").eq(1).should('have.text',"Deții o mașină?");
    //Skip the step where user is asked if he owns a car -by selcting option NO
    cy.get('input[type="checkbox"]').eq(1).should('have.attr',"value","Nu").check();


    //Next step should be displayed 
    cy.get("div[class='transport-question_transportQuestion_Question__4C8L2'] > div > span").eq(1).should('have.text',"Ai zburat cu avionul în ultima lună?");

    //Skip the step where user is asked if the user used planes as a way of transportation -by selcting option NO
    cy.get('input[type="checkbox"]').eq(1).should('have.attr',"value","Nu").check();
    
    //Next step should be displayed
    cy.get("div[class='transport-question_transportQuestion_Question__4C8L2'] > div > span").eq(1).should('have.text',"Folosești transportul în comun?");

    //Next step button should be disabled
    cy.get("button[class='p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only p-disabled']")

    cy.get('input[type="checkbox"]').eq(0).should('have.attr',"value","Da").check();

    cy.get("button[class='p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only']").should('not.have.attr','disabled');

    //CLick on next step button to go on next step
    cy.get("button[class='p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only']").click();
   
    //Verify if user is redirected to next step
    //cy.get("")
    cy.get("div[class='transport-question_transportQuestion_Question__4C8L2'] > div > span").eq(1).should('have.text',"Câți km ai parcurs (în medie) în ultima lună cu transportul în comun?");

    //check if button is disabled
    cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only p-disabled"').should('have.attr','disabled');
 //  cy.get('button[class=""')
    let random= parseInt(cy.randomNumber());

   cy.get("input[id='total_km']").type(`${random}`);
   cy.get("input[id='total_km']").type(12);

   //Click on next step button to be go at next step that asks what type of public transportation user is using for
   cy.get("button[class='p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only']").click();
   cy.get("div[class='transport-question_transportQuestion_Question__4C8L2'] > div > span").eq(1).should('have.text',"Ce tip de transport în comun folosești?");

   //Select a option from drop down list

   cy.get("div[class='DropeDown_dropeDown__STHps'] > select").select(1);
   cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]').click();

   //make shoure user is at the end step in completing public transportation
   cy.get("div[class='transport-question_transportQuestion_Question__4C8L2'] > div > span").eq(1).should('have.text',"Mai ai un mijloc de transport în comun pe care vrei să-l adaugi?");

   cy.get('input[type="checkbox"]').eq(0).should('have.attr',"value","Da").check();
   
   //First question has to appear again for adding another trip with public transportation
   cy.get("div[class='transport-question_transportQuestion_Question__4C8L2'] > div > span").eq(1).should('have.text',"Câți km ai parcurs (în medie) în ultima lună cu transportul în comun?");


})

   it("Verify if is possible to complete 'Gospodarie' section",()=>{
        //cy.get("p[class='details']").next('button').should("contain.text","Calculează");
            cy.get("button[class='button-try']").contains("Calculează").click();

            //Verify if the modal ovelay is displayed
            cy.get("div[class='Modal_modalOverlay__+l4of']").should('be.visible');

            //Make shure modal is opened
            cy.get("div[class='Modal_modalOverlay_ModalContainer__rmv+z']").should('be.visible');

            //Begin the calculation of the first section
            cy.get("button[class='button-try']").contains("Vreau să incep").click();  
            
            //Click on Bine button
            cy.get("button[class='button-try']").contains("Bine").click();  

            //Next step button should be disabled
            cy.get('button[class="p-button p-component transport-question_transportQuestion_UpArrow__yOzkl p-button-icon-only p-disabled"]')
            .should("have.attr",'disabled');
            //Choose the City
            cy.get('div[class="DropeDown_dropeDown__STHps"] > select').select(1);

            //Make shure next step button is enabled -go to next step
            cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]')
            .should("not.have.attr","disabled")

            ///For the step where the town should be selected
            cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]').click();

            //Next step button should be disabled
            cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only p-disabled"]')
            .should("have.attr",'disabled');

            //Choose the town
            cy.get("div[class='DropeDown_dropeDown__STHps'] > select").select(1);

            //Make shure next step button is enabled
            cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]')
            .should("not.have.attr","disabled");

            //Go to next step
            cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]').click();
            

            cy.get("div[class='transport-question_transportQuestion_Question__4C8L2'] > div > span").eq(1).should('have.text',"Deții o mașină?");
            //Skip the step where user is asked if he owns a car -by selcting option NO
            cy.get('input[type="checkbox"]').eq(1).should('have.attr',"value","Nu").check();


            //Next step should be displayed 
            cy.get("div[class='transport-question_transportQuestion_Question__4C8L2'] > div > span").eq(1).should('have.text',"Ai zburat cu avionul în ultima lună?");

            //Skip the step where user is asked if the user used planes as a way of transportation -by selcting option NO
            cy.get('input[type="checkbox"]').eq(1).should('have.attr',"value","Nu").check();
            
            //Next step should be displayed
            cy.get("div[class='transport-question_transportQuestion_Question__4C8L2'] > div > span").eq(1).should('have.text',"Folosești transportul în comun?");

            //Skip the step where user is asked if the user used planes as a way of transportation -by selcting option NO
            cy.get('input[type="checkbox"]').eq(1).should('have.attr',"value","Nu").check();

            //Go to next step
            cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]').click();

            cy.get("span[class='transport-section_transportSection_Info__rfs4A']").should("be.visible");
            cy.get("span[class='transport-section_transportSection_Info__rfs4A']").should("have.text","Felicitări, ai terminat secțiunea de călătorii. Acum urmează secțiunea de gospodărie.");
      
            /////End of first section
            //cy.randomNumber().as("generatedNumber");
          
      cy.get("button[class='button-try']").click();

      cy.get("div[class='transport-question_transportQuestion_Question__4C8L2'] > div > span").eq(1).should('have.text',"Câtă electricitate ai consumat în această lună? (kwh) ?");
      cy.get("input[id='electricity']").type(12);
      cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]').click();

      cy.get("div[class='transport-question_transportQuestion_Question__4C8L2'] > div > span").eq(1).should('have.text',"Care este valoarea consumului de gaze pentru această lună? (metru cub) ?");
      cy.get("input[id='natural_gas']").type(12);
      cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]').click();
      cy.get("div[class='transport-question_transportQuestion_Question__4C8L2'] > div > span").eq(1).should('have.text',"Care este valoarea consumului de lemne pentru această lună? (metru cub) ? ");
      cy.get("input[id='wood']").type(12);
      cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]').click();
   })

   it("Verify if it is able to complete alimentatie section",()=>{
         //cy.get("p[class='details']").next('button').should("contain.text","Calculează");
         cy.get("button[class='button-try']").contains("Calculează").click();

         //Verify if the modal ovelay is displayed
         cy.get("div[class='Modal_modalOverlay__+l4of']").should('be.visible');

         //Make shure modal is opened
         cy.get("div[class='Modal_modalOverlay_ModalContainer__rmv+z']").should('be.visible');

         //Begin the calculation of the first section
         cy.get("button[class='button-try']").contains("Vreau să incep").click();  
         
         //Click on Bine button
         cy.get("button[class='button-try']").contains("Bine").click();  

         //Next step button should be disabled
         cy.get('button[class="p-button p-component transport-question_transportQuestion_UpArrow__yOzkl p-button-icon-only p-disabled"]')
         .should("have.attr",'disabled');
         //Choose the City
         cy.get('div[class="DropeDown_dropeDown__STHps"] > select').select(1);

         //Make shure next step button is enabled -go to next step
         cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]')
         .should("not.have.attr","disabled")

         ///For the step where the town should be selected
         cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]').click();

         //Next step button should be disabled
         cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only p-disabled"]')
         .should("have.attr",'disabled');

         //Choose the town
         cy.get("div[class='DropeDown_dropeDown__STHps'] > select").select(1);

         //Make shure next step button is enabled
         cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]')
         .should("not.have.attr","disabled");

         //Go to next step
         cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]').click();
         

         cy.get("div[class='transport-question_transportQuestion_Question__4C8L2'] > div > span").eq(1).should('have.text',"Deții o mașină?");
         //Skip the step where user is asked if he owns a car -by selcting option NO
         cy.get('input[type="checkbox"]').eq(1).should('have.attr',"value","Nu").check();


         //Next step should be displayed 
         cy.get("div[class='transport-question_transportQuestion_Question__4C8L2'] > div > span").eq(1).should('have.text',"Ai zburat cu avionul în ultima lună?");

         //Skip the step where user is asked if the user used planes as a way of transportation -by selcting option NO
         cy.get('input[type="checkbox"]').eq(1).should('have.attr',"value","Nu").check();
         
         //Next step should be displayed
         cy.get("div[class='transport-question_transportQuestion_Question__4C8L2'] > div > span").eq(1).should('have.text',"Folosești transportul în comun?");

         //Skip the step where user is asked if the user used planes as a way of transportation -by selcting option NO
         cy.get('input[type="checkbox"]').eq(1).should('have.attr',"value","Nu").check();

         //Go to next step
         cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]').click();

         cy.get("span[class='transport-section_transportSection_Info__rfs4A']").should("be.visible");
         cy.get("span[class='transport-section_transportSection_Info__rfs4A']").should("have.text","Felicitări, ai terminat secțiunea de călătorii. Acum urmează secțiunea de gospodărie.");
   
         /////End of first section (Calatorii)
         //cy.randomNumber().as("generatedNumber");
       
               cy.get("button[class='button-try']").click();

               cy.get("div[class='transport-question_transportQuestion_Question__4C8L2'] > div > span").eq(1).should('have.text',"Câtă electricitate ai consumat în această lună? (kwh) ?");
               cy.get("input[id='electricity']").type(12);
               cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]').click();

               cy.get("div[class='transport-question_transportQuestion_Question__4C8L2'] > div > span").eq(1).should('have.text',"Care este valoarea consumului de gaze pentru această lună? (metru cub) ?");
               cy.get("input[id='natural_gas']").type(12);
               cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]').click();
               cy.get("div[class='transport-question_transportQuestion_Question__4C8L2'] > div > span").eq(1).should('have.text',"Care este valoarea consumului de lemne pentru această lună? (metru cub) ? ");
               cy.get("input[id='wood']").type(12);
               cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]').click();
      ///End of second section Gospodarie

      //Begining of last section Alimentatie
         cy.get("button[class='button-try']").click();

         //First section should be displayed
         cy.get("div[class='transport-question_transportQuestion_Question__4C8L2'] > div > span").eq(1).should('have.text',"Cât de des mănânci carne de vită? (100g porția) ?");

         //chose an option 
         cy.get("div[class='RadioButton_radioButton_Body__LgaFh'] > div >input").should('have.attr','value','0').check();

         cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]').click();

         //
         cy.get("div[class='transport-question_transportQuestion_Question__4C8L2'] > div > span").eq(1).should('have.text',"Cât de des mănânci carne de oaie? (100g porția) ?");

         //chose an option 
         cy.get("div[class='RadioButton_radioButton_Body__LgaFh'] > div >input").should('have.attr','value','0').check();

         cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]').click();

         //
         cy.get("div[class='transport-question_transportQuestion_Question__4C8L2'] > div > span").eq(1).should('have.text',"Cât de des mănânci carne de pui? (100g porția) ?");

         //chose an option 
         cy.get("div[class='RadioButton_radioButton_Body__LgaFh'] > div >input").should('have.attr','value','0').check();

         cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]').click();

         //
         cy.get("div[class='transport-question_transportQuestion_Question__4C8L2'] > div > span").eq(1).should('have.text',"Cât de des mănânci carne de porc? (100g porția) ?");

         //chose an option 
         cy.get("div[class='RadioButton_radioButton_Body__LgaFh'] > div >input").should('have.attr','value','0').check();

         cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]').click();

         //
         cy.get("div[class='transport-question_transportQuestion_Question__4C8L2'] > div > span").eq(1).should('have.text',"Cât de des mănânci carne de pește? (140g porția) ?");

         //chose an option 
         cy.get("div[class='RadioButton_radioButton_Body__LgaFh'] > div >input").should('have.attr','value','0').check();

         cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]').click();

         //
         cy.get("div[class='transport-question_transportQuestion_Question__4C8L2'] > div > span").eq(1).should('have.text',"Cât de des consumi produse lactate? (200ml porția) ?");

         //chose an option 
         cy.get("div[class='RadioButton_radioButton_Body__LgaFh'] > div >input").should('have.attr','value','0').check();

         cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]').click();

         //
         cy.get("div[class='transport-question_transportQuestion_Question__4C8L2'] > div > span").eq(1).should('have.text',"Cât de des consumi brânzeturi? (30g porția) ?");

         //chose an option 
         cy.get("div[class='RadioButton_radioButton_Body__LgaFh'] > div >input").should('have.attr','value','0').check();

         cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]').click();

         //
         cy.get("div[class='transport-question_transportQuestion_Question__4C8L2'] > div > span").eq(1).should('have.text',"Cât de des consumi ouă? (120g porția) ?");

         //chose an option 
         cy.get("div[class='RadioButton_radioButton_Body__LgaFh'] > div >input").should('have.attr','value','0').check();

         cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]').click();

         //
         cy.get("div[class='transport-question_transportQuestion_Question__4C8L2'] > div > span").eq(1).should('have.text',"Cât de des consumi cafea? (120g porția) ?");

         //chose an option 
         cy.get("div[class='RadioButton_radioButton_Body__LgaFh'] > div >input").should('have.attr','value','0').check();

         cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]').click();

         //
         cy.get("div[class='transport-question_transportQuestion_Question__4C8L2'] > div > span").eq(1).should('have.text',"Cât de des consumi legume?(80g porția)  ?");

         //chose an option 
         cy.get("div[class='RadioButton_radioButton_Body__LgaFh'] > div >input").should('have.attr','value','0').check();

         cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]').click();

         //
         cy.get("div[class='transport-question_transportQuestion_Question__4C8L2'] > div > span").eq(1).should('have.text',"Cât de des consumi pâine?(36g porția)  ?");

         //chose an option 
         cy.get("div[class='RadioButton_radioButton_Body__LgaFh'] > div >input").should('have.attr','value','0').check();

         cy.get('button[class="p-button p-component transport-question_transportQuestion_DownArrow__EF+9C p-button-icon-only"]').click();

         cy.get('p[class="transport-question_transportQuestion_CongradualtionText__Gwe+N"]').should('be.visible');

         cy.get('button[class="button-try"]').click();
         //close modal
         cy.get('button[class="p-button p-component modal-section_modalSection_Button__rCHj8 p-button-icon-only"]').click();

         //

   })

})