import { Resolver, Arg, Query, Mutation } from "type-graphql";
import { Student } from "../models/student";
import {
    CreateStudentInput,
    ReadStudentInput,
    UpdateStudentInput,
} from "../inputs";

@Resolver()
export class StudentResolver {
    //#region Queries
    @Query(() => [Student])
    readStudents(
        @Arg("student", () => ReadStudentInput, { nullable: true })
        students?: ReadStudentInput
    ) {
        if (!students) {
            return Student.find({
                skip: 0,
                take: 10,
            });
        } else {
            const { id, name, cpf, email } = students;

            return Student.find({
                where: [{ id }, { name }, { cpf }, { email }],
                skip: 0,
                take: 10,
            });
        }
    }
    //#endregion

    //#region Mutations
    @Mutation(() => Student)
    async createStudent(
        @Arg("data")
        { name, email, cpf }: CreateStudentInput
    ): Promise<Student> {
        const checkFieldExists = await Student.findOne({
            where: [{ email }, { cpf }],
        });

        if (checkFieldExists) {
            throw new Error(`student already exists`);
        }

        const student = Student.create({
            name,
            email,
            cpf,
        });
        await student.save();
        return student;
    }

    @Mutation(() => Student)
    async updateStudent(
        @Arg("id") id: string,
        @Arg("data") data: UpdateStudentInput
    ): Promise<Student> {
        const student = await Student.findOne({
            where: {
                id,
            },
        });

        if (!student) {
            throw new Error(`The user with id: ${id} does not exist!`);
        }

        Object.assign(student, data);
        await student.save();
        return student;
    }

    @Mutation(() => Boolean)
    async deleteStudent(@Arg("id") id: string): Promise<boolean> {
        const student = await Student.findOne({
            where: {
                id,
            },
        });

        if (!student) {
            throw new Error(`The user with id: ${id} does not exist!`);
        }

        await student.remove();
        return true;
    }
    //#endregion
}
