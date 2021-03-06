import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { City } from 'src/city/entity/City.entity';
import { User } from 'src/user/entity/User.entity';

@Table({
  modelName: 'vacancy',
})
export class Vacancy extends Model<Vacancy> {
  @Column
  title: string;
  @Column
  salary: number;

  @Column
  workExperience: number;

  @Column(DataType.TEXT('long'))
  description: string;

  @BelongsTo(() => City, {
    as: 'city',
  })
  @ForeignKey(() => City)
  @Column
  cityId: number;

  city: City;

  @Column
  phone: string;

  @Column
  email: string;

  @ForeignKey(() => User)
  @BelongsTo(() => User, {
    as: 'user',
  })
  userId: number;

  user: User;
}
