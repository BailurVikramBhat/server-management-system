import { Component, Input } from '@angular/core';
import { Server } from '../../model/server';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css',
})
export class ServerComponent {
  @Input() server: Server = {
    id: 342122,
    name: 'default name',
    description: 'funny description',
    online: true,
  };
}
