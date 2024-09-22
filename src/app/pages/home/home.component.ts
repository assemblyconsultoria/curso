import { Component } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { UserGit } from '../../_models/userGit';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  user: UserGit | undefined;
  username: string = '';
  constructor(private userService: UserService, private toastr: ToastrService) {}

    getGitUser() {
      this.userService.getGitUser(this.username).subscribe((response: UserGit) => {
        this.user = response;
      }, (error) => {
        this.toastr.error(error.error.message);

      });
    }
}
