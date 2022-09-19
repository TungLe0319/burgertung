import { renderSync } from "sass";
import { menusService } from "../services/MenusService.js";
import BaseController from "../utils/BaseController.js";

export  class MenusController extends BaseController {
  constructor() {
    super('api/burgerMenu');
    this.router
      .get('', this.getAllMenuItems)
      .get('/:burgerId', this.getBurgerById)
      // //     ^ param name
      .post('', this.createBurger)
      // .delete('/:teamId', this.removeTeam);
  }
   async getAllMenuItems(req, res, next) {
  try {
      const menuItems = await menusService.getAllMenuItems()
      res.send(menuItems)
    } catch (error) {
   next (error)
    }
    
  }

async createBurger(req, res, next){
try{
const formData= req.body
const burger = await menusService.createBurger(formData)
res.send(burger)
} 
catch (error) {
next(error)
}
}


async getBurgerById(req, res, next){
try{
const burgerId=req.params.burgerId
const burger = await menusService.getBurgerById(burgerId)
res.send(burger)
} 
catch (error) {
next(error)
}
}

 
}