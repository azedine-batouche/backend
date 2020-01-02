import { User } from './user';

export class Character {
    characterId: number;
    characterName: string;
    category: string;
    power: string;
    share: boolean;
    user: User;
}
