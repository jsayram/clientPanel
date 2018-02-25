import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/Client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: Client[];

  constructor(private clientService : ClientService) { 
  }

  ngOnInit() {
  	//this will return an observable and observables need to be subcribed to
  	this.clientService.getClients().subscribe(clients => this.clients = clients);
  }
}
