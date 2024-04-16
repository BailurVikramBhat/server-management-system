import { Component, Input, OnInit } from '@angular/core';
import { ServerApiService } from '../server-api.service';
import { Server } from '../../model/server';
@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrl: './server-list.component.css',
})
export class ServerListComponent implements OnInit {
  @Input() servers: Server[] = [];
  isLoading: boolean = true;
  constructor(private serverApiService: ServerApiService) {}

  ngOnInit(): void {
    setTimeout(() => {
      console.log('initialised.');
      this.serverApiService.getServers().subscribe((data) => {
        console.log(data);
        this.servers = data;
        this.isLoading = false;
      });
    }, 2500);
  }
}
