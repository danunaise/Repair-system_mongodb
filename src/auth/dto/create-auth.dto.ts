export class CreateUserDto {
  readonly username: string;
  readonly password: string;
  readonly role: string;
  readonly firstname: string;
  readonly lastname: string;
  readonly department: string;
  readonly email: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
