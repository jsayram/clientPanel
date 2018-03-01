import { Injectable } from '@angular/core';
import { Settings } from '../models/Settings'

@Injectable()
export class SettingsService {
  settings: Settings = {
  	allowRegistration: true, 
  	disableBalanceOnAdd: true,
  	disableBalanceOnEdit: true
  }
  constructor() { 
  	if(localStorage.getItem('settings') != null) {
  		//this is going to be stored in local storage so we have to add the JSON.parse()
  		this.settings = JSON.parse(localStorage.getItem('settings'));
  	}
  }

  getSettings(): Settings {
  	return this.settings;
  }

  changeSettings(settings: Settings) {
  	localStorage.setItem('settings', JSON.stringify(settings));
  }

}
