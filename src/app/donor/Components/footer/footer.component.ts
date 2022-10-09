import { Component, OnInit } from '@angular/core';
import { DeveloperInfoService } from 'src/app/admin/Services/developer-info.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  DeveloperName : string = '';
  Year : number = 0;
  ProjectName : string = ''
  constructor(private developerInfo : DeveloperInfoService) { }

  ngOnInit(): void {
    // getting the developer name and year from developer service...
    this.DeveloperName = this.developerInfo.DeveloperName;
    this.Year = this.developerInfo.Year;
    this.ProjectName = this.developerInfo.ProjectName;
  }

}
