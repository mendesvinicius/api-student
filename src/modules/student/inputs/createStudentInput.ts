import { InputType, Field } from "type-graphql";
import { IsEmail, Length } from "class-validator";

@InputType()
export class CreateStudentInput {
    @Field()
    name: string;

    @Field()
    @Length(14, 14, { message: "cpf invalid" })
    cpf: string;

    @Field()
    @IsEmail()
    email: string;
}
