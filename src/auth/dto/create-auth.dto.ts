export class CreateUserDto {
  readonly username: string;
  readonly password: string;
  readonly role: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}