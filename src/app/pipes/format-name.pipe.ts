import {Pipe, PipeTransform} from '@angular/core';
import {User} from '../models/user.model';

@Pipe({name: 'formatName'})
export class FormatNamePipe implements PipeTransform {
  transform(user: User): string {
    console.log('FormatNamePipe called');
    return `${user.firstname} ${user.lastname.toUpperCase()}`;
  }
}
