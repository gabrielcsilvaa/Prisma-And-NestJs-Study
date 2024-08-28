import { IsNotEmpty, Length } from "class-validator";

export class CreateTesteMemberBody {
    @IsNotEmpty({message:'o campo nao pode estar vazio'})
    @Length(5,100)
    name: string;
    @IsNotEmpty({message: 'o campo nao pode estar vazio'})
    function: string;
}