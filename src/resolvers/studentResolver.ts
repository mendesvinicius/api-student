import { Resolver, Arg, Query, Mutation } from "type-graphql";
import { Student } from "../models/student";
import { CreateStudentInput } from "../inputs/createStudentInput";
import { ReadStudentInput } from "../inputs/readStudentInput";

@Resolver()
export class StudentResolver
{

  //#region Queries
  @Query(() => [Student])
    students(
    @Arg("student", () => ReadStudentInput, { nullable: true })
    students: ReadStudentInput
  )
  {
    if (!students) 
    {
      return Student.find();
    } 
    else 
    {
      const { id, name, cpf, email } = students;
      
      return Student.find({
          where:[ 
            {id}, 
            {name},
            {cpf},
            {email} 
          ]
        });
    }
  }
  //#endregion

  //#region Mutations
  @Mutation(() => Student)
  async createStudent(
    @Arg("data") 
    { name, email, cpf }: CreateStudentInput
    ): Promise<Student> 
  {
    const checkFieldExists = await Student.findOne({
      where: [
        { email }, 
        { cpf }
      ],
    });

    if (checkFieldExists) 
    {
      throw new Error(`student already exists`);
    }

    const student = Student.create({ 
        name, 
        email, 
        cpf 
    });
    await student.save();
    return student;
  }
  //#endregion
}
