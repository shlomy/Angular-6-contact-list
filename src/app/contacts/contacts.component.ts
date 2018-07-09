import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['contacts.component.css']
})
export class ContactsComponent implements OnInit {
  @Input() name: string;
  users = [];
  results: any[];
  max: number = 9;
  color = 'yellow';

  constructor(private http: HttpClient) {
  }

  toggle(): void {
    this.max += 9;
  }

  ngOnInit(): void {
    this.http.get('https://randomuser.me/api/?results=100&format=json').subscribe(data => {
      this.users = data['results']

    });
  }

}
