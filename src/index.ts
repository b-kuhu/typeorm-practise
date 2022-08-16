import Express from "express";
import { DataSource} from "typeorm";
import { Banker } from "./entities/Banker";
import {Client} from "./entities/Client";
import { Transaction } from "./entities/Transaction"; 
import { createClient } from "./routes/createClients";
const app = Express();
const dataSource = new DataSource(
        {
           type:"postgres",
           host :"localhost",
           port:5432,
           username:"postgres",
           password:"Kuhub*28",
           database:'perntodo',
           entities:[Client,Banker,Transaction],
           synchronize:true //synchronise all the entities together
        });
         dataSource.initialize()
         .then(()=>{
            console.log('database connected');
         })
         .catch((error) =>{
            console.log(error);
         })

     
     app.use(Express.json());
     app.use(createClient);
      app.listen(8080,()=>{
        console.log('listening to the server at port 8080');
      })