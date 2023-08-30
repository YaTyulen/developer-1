import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router){
    this.router.navigate(['/']);
  }

  /* Функция для открытия/закрытия меню */
  openCloseMenu() {
    const sidebar = document.querySelector(".sidebar");
    const sidebarOpen = document.querySelector(".sidebar--open");

    if(sidebarOpen === null) {
      if(sidebar !== null) {
        sidebar.classList.add("sidebar--open");
      }
    }
    else {
      if(sidebar !== null) {
        sidebar.classList.remove("sidebar--open");
      }
    }
  }

  /* Закрыть меню */
  closeMenu(){
    const sidebar = document.querySelector(".sidebar");
    const sidebarOpen = document.querySelector(".sidebar--open");

    if(sidebarOpen !== null) {
      if(sidebar !== null) {
        sidebar.classList.remove("sidebar--open");
      }
    }
  }

 /* Очистить активные меню */
  clearMenuItem() {
    const home = document.querySelector(".menu-sidebar__home");
    const incoming = document.querySelector(".menu-sidebar__incoming");
    const tasks = document.querySelector(".menu-sidebar__tasks");
    const activity = document.querySelector(".menu-sidebar__activity");
    const team = document.querySelector(".menu-sidebar__team");

    home?.classList.remove('menu-sidebar__item--active');
    incoming?.classList.remove('menu-sidebar__item--active')
    tasks?.classList.remove('menu-sidebar__item--active')
    activity?.classList.remove('menu-sidebar__item--active')
    team?.classList.remove('menu-sidebar__item--active')
  }

  followLinkHome() {
    const home = document.querySelector(".menu-sidebar__home");
    this.clearMenuItem();
    home?.classList.add('menu-sidebar__item--active');
    this.closeMenu();
  }

  followLinkIncoming() {
    this.clearMenuItem();
    const incoming = document.querySelector(".menu-sidebar__incoming");
    incoming?.classList.add('menu-sidebar__item--active');
    this.closeMenu();
  }

  followLinkTasks() {
    const tasks = document.querySelector(".menu-sidebar__tasks");
    this.clearMenuItem();
    tasks?.classList.add('menu-sidebar__item--active');
    this.closeMenu();
  }

  followLinkActivity() {
    const activity = document.querySelector(".menu-sidebar__activity");
    this.clearMenuItem();
    activity?.classList.add('menu-sidebar__item--active');
    this.closeMenu();
  }

  followLinkTeam() {
    const team = document.querySelector(".menu-sidebar__team");
    this.clearMenuItem();
    team?.classList.add('menu-sidebar__item--active');
    this.closeMenu();
  }

}
