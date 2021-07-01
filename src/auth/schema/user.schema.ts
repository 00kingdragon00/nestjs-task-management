import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { hash } from 'bcrypt';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ unique: true })
  username: string;

  @Prop()
  password: string;

  @Prop()
  salt: string;

  // eslint-disable-next-line @typescript-eslint/ban-types
  validatePassword: Function;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.methods.validatePassword = async function (
  password: string,
): Promise<boolean> {
  const hashPassword = await hash(password, this.salt);
  return hashPassword === this.password;
};
