import {
  USER_IMAGES_REPOSITORY,
  USER_MAIN_IMAGE_REPOSITORY,
  USER_REPOSITORY,
} from 'src/core/providers-names';
import { User } from './entity/User.entity';
import { UserImage } from './entity/UserImage.entity';
import { UserMainImage } from './entity/UserMainImage';

export const userProviders = [
  {
    provide: USER_REPOSITORY,
    useValue: User,
  },
  {
    provide: USER_IMAGES_REPOSITORY,
    useValue: UserImage,
  },
  {
    provide: USER_MAIN_IMAGE_REPOSITORY,
    useValue: UserMainImage,
  },
];
