import { BadRequest } from '@bcwdev/auth0provider/lib/Errors.js';
import { fakeMenu } from '../db/FakeMenu.js';

class MenusService {
  async getBurgerById(burgerId) {
    const burger = fakeMenu.burgers.find((b) => b.id == burgerId);
    if (!burger) {
      throw new BadRequest('Invalid Id');
    }
    return burger;
  }

  //
  async createBurger(formData) {
    formData.id = Math.floor(Math.random() * 100000);
    formData.name = 'TestBurgerHereTung';
    formData.price = 349587234;
    fakeMenu.burgers.push(formData);
    return formData;
  }
  async getAllMenuItems() {
    const res = fakeMenu;
    return res.burgers;
  }
}

export const menusService = new MenusService();
