import { IsNotEmpty } from "class-validator";

export class CreateTesteMemberBody {
    @IsNotEmpty()
    name: string;
    @IsNotEmpty({message: 'o campo nao pode estar vazio'})
    function: string;
}