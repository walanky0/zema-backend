import {
  AllowNull,
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/user/entity/User.entity';
import { Message } from './Message.entity';
@Table({
  modelName: 'chat',
})
export class Chat extends Model<Chat> {
  @AllowNull(false)
  @BelongsTo(() => User, {
    as: 'userOne',
  })
  @ForeignKey(() => User)
  @Column
  userOneId: number;

  @AllowNull(false)
  @BelongsTo(() => User, {
    as: 'userTwo',
  })
  @ForeignKey(() => User)
  @Column
  userTwoId: number;

  @HasMany(() => Message)
  messages: Message;
  companion: number;
}
