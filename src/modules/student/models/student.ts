import { Field, ID, ObjectType } from "type-graphql";
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@ObjectType()
@Entity()
export class Student extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Field(() => String)
    @Column()
    name: string;

    @Field(() => String)
    @Column()
    cpf: string;

    @Field(() => String)
    @Column()
    email: string;

    @Field()
    @CreateDateColumn()
    created_at: Date;

    @Field()
    @UpdateDateColumn()
    updated_at: Date;
}

export default Student;
