import { useEffect, useState } from "react";
import "./ChatBot.css";
import axios from "axios";
import { getAllBotKeyWords, getAllAnimalKeyWords } from "../API";




const ChatBot = () => {

    const [userInput, setUserInput] = useState("");
    const [userInputScreen, setUserInputScreen] = useState("");
    const [botResponse, setBotResponse] = useState("");
    const [botKeyWords, setBotKeyWords] = useState("");
    const [animalKeyWords, setAnimalKeyWords] = useState("");

    useEffect(()=>{

        getAllBotKeyWords(setBotKeyWords);
        getAllAnimalKeyWords(setAnimalKeyWords);



    },[]);

    

    const returnUserInput = (e) => {

        e.preventDefault();

        console.log(userInput);


    }
    


    const botLogic = (e) => {

        e.preventDefault();

        setUserInputScreen(userInput);

        let responseCount = 0;

        botKeyWords?.map(botKeyWord => {

            if(botKeyWord["keyWordType"]==='GREETING' && botKeyWord["keyWord"].toLowerCase()===userInput.toLowerCase()){

                setBotResponse("Hello, I am Paw Bot. What can I help you with?");
                responseCount++;

            }

            

            if(userInput.toLowerCase().includes(botKeyWord["bot_animalKeyWords"][0]?.keyWord.toLowerCase())
                && userInput.toLowerCase().includes(botKeyWord["bot_animalKeyWords"][1]?.keyWord.toLowerCase())
                && userInput.toLowerCase().includes(botKeyWord["bot_animalKeyWords"][2]?.keyWord.toLowerCase())){

                    setBotResponse("Yes, I can help you get to the animal page");

                responseCount++;



                }

                else if(userInput.toLowerCase().includes(botKeyWord["bot_animalKeyWords"][0]?.keyWord.toLowerCase())
                && userInput.toLowerCase().includes(botKeyWord["bot_animalKeyWords"][1]?.keyWord.toLowerCase())
                ){

                    setBotResponse("Would you like help getting to the animal page?");

                responseCount++;



                }


        

        })

        if(responseCount==0){





            setBotResponse("Im sorry, could you repeat that?");
        }






    }








    return(
        <>
           
        <main className="mainContainer">

            <section className="conversationContaier">

                <ul className="conversation">

                    <li className="userInputScreen"><span>{userInputScreen}</span></li>
                    <li className="botResponse"><span>{botResponse}</span></li>


                </ul>

                
                


            </section>

            <form onSubmit={botLogic}>
                <input type ="text" placeholder="say something" onChange={(e)=>{setUserInput(e.target.value)}} ></input>
                <input type="submit"></input>

            </form>
            
            
            
            
        </main>    
            
            
        
        </>
        


    )
    





}


export default ChatBot;