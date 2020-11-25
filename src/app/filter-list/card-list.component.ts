import {
  AfterContentChecked, AfterContentInit,
  AfterViewChecked, AfterViewInit,
  Component,
  DoCheck, OnChanges,
  OnInit, SimpleChanges,
} from '@angular/core';
import users from '../users';
import {User} from '../models/user.model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  users: User[] = users;

  constructor() { }

  ngOnInit(): void {
    // console.log('Init');
  }

  ngDoCheck(): void {
    // console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    // console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    // console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    // console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    // console.log('ngAfterViewChecked');
  }

  format(user: User): string {
    console.log('Function formatName called');
    return `${user.firstname} ${user.lastname.toUpperCase()}`;
  }

  empty(): void { }
}
