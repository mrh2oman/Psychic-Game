# Psychic-Game
    A simple HTML game using javascript where the computer randomly selects a letter and the user has ten guess to get it right. If they are right, their win count increases by one. If they are wrong, their loss count increases by one.  Either way the computer will reveal the answer if you are correct or if you have run out of guesses and the game will restart automatically.
![Alt text](/assets/images/Psych.jpg "Psych")

 #Features

 Uses a NodeJS interface

 Customers can -
    Purchase products from the MortyRoad inventory

 1. Managers can: 
   * View all the products for sale
   * View what items have a low inventory
![Alt text](/images/ViewInvLowInv.png "View Products and View Items with Low Inventory")

   * Add to existing inventory levels
   * Create a new product with an inventory level
   ![Alt text](/images/IncInvAddItem.png "View Products and View Items with Low Inventory")


#Setup

    Clone this repo to your desktop and run NPM install to install all the dependencies

    Initialize the mortyroadDB.sql file in MySql Workbench


    Run node mortyroadCustomer.js 
                OR
    Run node mortyroadManager.js

#Usage

    After you have cloned this repo to your desktop, initialized the mortyroadDB.sql and ran npm install you can start the program by traveling to the root directory running either of the following commands - 

    node mortyroadCustomer.js 
                OR
    node mortyroadManager.js


