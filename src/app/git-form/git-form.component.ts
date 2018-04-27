import { Component, OnInit,Output } from '@angular/core';
import { GitSearchService } from '../git-search.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-git-form',
  templateUrl: './git-form.component.html',
  styleUrls: ['./git-form.component.css']
})
export class GitFormComponent implements OnInit {

  username: string;
  gitSearchService:GitSearchService;


  submitThisUser(){
    this.gitSearchService.getGitUser(this.username);
  }

  constructor(gitSearchService:GitSearchService) {
    this.gitSearchService = gitSearchService;
   }

  ngOnInit() {
  }

}
