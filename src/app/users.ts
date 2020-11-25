import {User} from './models/user.model';

export default [
  new User({ id: 1, firstname: 'John', lastname: 'Doe', age: 21, job: 'Développeur' }),
  new User({ id: 2, firstname: 'Maria', lastname: 'Smith', age: 18, job: 'Designer' }),
  new User({ id: 3, firstname: 'Bob', lastname: 'Wellington', age: 24, job: 'Développeur' }),
  new User({ id: 4, firstname: 'Paul', lastname: 'Dupont', age: 30, job: 'Designer' }),
  new User({ id: 5, firstname: 'Léa', lastname: 'Durieux', age: 26, job: 'Développeuse' })
];
