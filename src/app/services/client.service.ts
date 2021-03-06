import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

//import interface from the models folder
import { Client } from '../models/Client';

@Injectable()
export class ClientService {
  clientCollection: AngularFirestoreCollection<Client>;
  clientDoc: AngularFirestoreDocument<Client>;
  clients: Observable<Client[]>; 
  client: Observable<Client>;

  constructor(private afs: AngularFirestore) { 
  		this.clientCollection = this.afs.collection('clients', ref => ref.orderBy('lastName', 'asc'));
  }
  getClients(): Observable<Client[]> {
  	//get clients with the id
  	this.clients = this.clientCollection.snapshotChanges().map(changes => {
  		return changes.map(action =>{
	        const data = action.payload.doc.data() as Client; 
	  		data.id = action.payload.doc.id;
	  		return data;
  		});		
  	});
  	return this.clients;
  } 

  newClient(client: Client){
  	this.clientCollection.add(client);
  }

  getClient(id: string) : Observable<Client> {
  	this.clientDoc = this.afs.doc<Client>(`clients/${id}`);
  	this.client = this.clientDoc.snapshotChanges().map(action =>{
  		if(action.payload.exists === false) {
  			return null;
  		}else {
  			const data = action.payload.data() as Client;
  			data.id = action.payload.id;
  			return data; 
  		}
  	});
  	return this.client; 
  }

  updateClient(client: Client) {
    this.clientDoc = this.afs.doc(`clients/${client.id}`);
    this.clientDoc.update(client);
  }
  deleteClient(client: Client) {
    this.clientDoc = this.afs.doc(`clients/${client.id}`);
    this.clientDoc.delete();
  }

}
