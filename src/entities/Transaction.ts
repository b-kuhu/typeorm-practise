
import {BaseEntity,Column,Entity,JoinColumn,ManyToOne,PrimaryGeneratedColumn} from "typeorm";
import { Client } from "./Client";
export enum TransactionsTypes{
    DEPOSIT ='deposit',
    WITHDRAW = 'withdraw'
}
@Entity('transactions')
export class Transaction extends BaseEntity{
 
    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type:"enum",
        enum:TransactionsTypes
    })
    type:string;

    @Column({
        type:"numeric"
    })
    amount:number;

    @ManyToOne(
          ()=> Client ,// type => Photo or ()=>photo  is a function that returns the class of the entity with which we want to make our relationship 
          client=>client.transactions 
    )
    @JoinColumn({
        name:'client_id'
    })
    client:Client
}