import {
  AllowNull,
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  Default,
  ForeignKey,
  HasMany,
  HasOne,
  Length,
  Model,
  Table,
  Validate,
} from 'sequelize-typescript';
import { Chat } from 'src/chat/entity/Chat.entity';
import { Message } from 'src/chat/entity/Message.entity';
import { City } from 'src/city/entity/City.entity';
import { MIN_PASSWORD_LENGHT } from 'src/core/constants';
import { Friend } from 'src/friend/entity/friend.entity';
import { RequstFriend } from 'src/friend/entity/request.entity';
import { locale } from 'src/locale';
import { Comment } from 'src/post/enity/Comment.entity';
import { Like } from 'src/post/enity/Like.entity';
import { Post } from 'src/post/enity/Post.enity';
import { EducationEnum } from 'src/types/EducationEnum';
import { GenderEnum } from 'src/types/GenderEnum';
import { Vacancy } from 'src/vacancy/entity/vacancy.enity';
import { UserImage } from './UserImage.entity';
import { UserMainImage } from './UserMainImage';

const userDatabaseLocale = locale.user.database;

@Table({
  modelName: 'user',
})
export class User extends Model {
  [x: string]: any;
  // Required
  id: number;

  @AllowNull(false)
  @Column
  name: string;

  @AllowNull(false)
  @Column
  phone: string;

  @AllowNull(false)
  @Validate({
    isEmail: {
      msg: userDatabaseLocale.emailError,
    },
  })
  @Column
  email: string;

  @AllowNull(false)
  @Length({
    min: MIN_PASSWORD_LENGHT,
    msg: userDatabaseLocale.passwordError,
  })
  @Column
  password: string;

  @Default(false)
  @AllowNull(false)
  @Column
  isUpdateProfile: boolean;

  // /Required
  @Column
  surname: string;

  @Column
  patronomic: string;

  @ForeignKey(() => City)
  @BelongsTo(() => City, {
    as: 'currentCity',
  })
  @Column
  currentCityId: number;

  @ForeignKey(() => City)
  @BelongsTo(() => City, {
    as: 'birthCity',
  })
  @Column
  birthCityId: number;

  @Column(DataType.TEXT('long'))
  work: string;

  @Column(DataType.TEXT('long'))
  how_can_help: string;

  @Column(DataType.TEXT('long'))
  need_help: string;

  @Default('null')
  @Column(DataType.ENUM('null', 'male', 'female'))
  gender: GenderEnum;

  @Column(DataType.TEXT('long'))
  interesting: string;

  @Default(18)
  @Column
  age: number;

  @Default('null')
  @Column(
    DataType.ENUM(
      'null',
      'average',
      'secondary_special',
      'unfinished_higher_education',
      'higher',
      'bachelor_degree',
      'master',
      'candidate',
      'doctor',
    ),
  )
  education: EducationEnum;

  @HasMany(() => UserImage)
  images: UserImage[];

  @HasOne(() => UserMainImage)
  mainPhoto: UserMainImage;

  @HasMany(() => Post)
  posts: Post[];

  @HasMany(() => Like)
  likes: Like[];

  @HasMany(() => Comment)
  comments: Comment[];

  @HasMany(() => Friend)
  friends: Friend[];

  @HasMany(() => RequstFriend)
  requests: RequstFriend[];

  @HasMany(() => Vacancy)
  resumes: Vacancy[];

  @HasMany(() => Chat)
  chats: Chat[];

  @HasMany(() => Message)
  messages: Message[];
}
