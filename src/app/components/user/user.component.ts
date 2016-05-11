import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS }    from '@angular/http';
import { UserService } from '../../services/user.service';
import { IUser } from '../../models/user';

@Component({
  selector: 'user',
  templateUrl: 'app/components/user/user.html',
  providers:  [
    HTTP_PROVIDERS
  ]
})

export class UserComponent implements OnInit {
  private userService: UserService;
  private users: IUser[];
  private errorMessage: string;

  constructor (_userService: UserService) {
    this.userService = _userService;
  }

  public ngOnInit(): void {
    this.getUsers();
  }

  public getUsers(): void {
    this.userService.getUsers()
                     .subscribe(
                       (users: IUser[]) => this.users = users,
                       (error: any) =>  this.errorMessage = <any>error);
  }

}
