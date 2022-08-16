import {Entity ,BaseEntity,Column,PrimaryColumn} from "typeorm";

@Entity('person')
export class Person extends BaseEntity{
    @PrimaryColumn()
    id :number

    @Column()
    firstName : string;

    @Column()
    lastName:string;
    
    @Column({
    unique:true
    })
    email:string;

    @Column({
        unique:true,
        length:10
    })
    cardNumber:string;


}
