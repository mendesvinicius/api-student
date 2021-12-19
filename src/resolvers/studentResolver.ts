import { Resolver, Query } from "type-graphql";

@Resolver()
export class StudentResolver
{
    @Query(() => String)
    hello()
    {
      return "Hello Student";
    }
}
