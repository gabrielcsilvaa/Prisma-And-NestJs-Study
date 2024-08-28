export abstract class testeMembersRepository {
    abstract create(name: string, memberFunction:string): Promise<void>
}