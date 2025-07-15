import { Injectable } from '@angular/core';
import { Menu } from '../models/menu';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() {}

    getItems(): Array <Menu> {

      const menu: Array<Menu> = [
        {name: 'inicio',
          url: '#banner'
        },
        {
          name:'sobre mim',
          url: '#about'
        },
        {
          name: 'habilidades',
          url: '#skills'
        },
        {
          name: 'projetos',
          url: '#projects'
        },
        {
          name: 'contato',
          url: '#contact'
        }
      ];
        
      return menu;
    }
}




