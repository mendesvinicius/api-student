import { InputType, Field } from "type-graphql";

@InputType()
export class CreateStudentInput 
{
  @Field()
  name: string;

  @Field()
  cpf: string;

  @Field()
  email: string;
}
