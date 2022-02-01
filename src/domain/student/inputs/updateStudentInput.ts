import { InputType, Field } from "type-graphql";

@InputType()
export class UpdateStudentInput {
    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    cpf?: string;

    @Field({ nullable: true })
    email?: string;
}
