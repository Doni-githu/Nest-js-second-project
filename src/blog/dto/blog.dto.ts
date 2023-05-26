import { UserDto } from "src/user/dto/user.dto";

export class BlogDto{
    title: string;
    body: string;
    src: string;
    user: UserDto;
}