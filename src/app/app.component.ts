import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterModule,
  ],
  // template: 
  // `
  //   <main>
  //     <a [routerLink]="['/']">
  //       <header class="brand-name">
  //         <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
  //       </header>
  //     </a>
  //     <section class="content">
  //       <router-outlet></router-outlet>
  //     </section>
  //   </main>
  // `,
  template: `
    <a [routerLink]="['/']">
         <header class="brand-name">
           <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
         </header>
       </a>
    <div class="app-shell">
       
      <nav class="sidebar">
        <h2>Min App</h2>
        <ul>
          <li><a routerLink="" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Startsida</a></li>
          <li><a routerLink="/home" routerLinkActive="active">Home (lista)</a></li>

          <li><a routerLink="/blazor/todo" routerLinkActive="active">Todos (Blazor)</a></li>
          <li><a routerLink="/blazor/weather" routerLinkActive="active">Weather (Blazor)</a></li>
        </ul>
      </nav>
      <main class="content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styleUrls: ['./app.component.css'],
  // styles: [`
  //   :host { display:block; height:100vh; }
  //   .app-shell { display:flex; height:100%; }
  //   .sidebar {
  //     width: 220px;
  //     padding: 1rem;
  //     background: #f5f5f5;
  //     border-right: 1px solid rgba(0,0,0,0.05);
  //   }
  //   .sidebar ul { list-style: none; padding: 0; margin: 1rem 0 0 0; }
  //   .sidebar li { margin: 0.5rem 0; }
  //   .sidebar a { color: inherit; text-decoration: none; }
  //   .sidebar a.active { font-weight: 700; }
  //   .content { flex: 1; padding: 1rem; overflow: auto; }
  // `]
})
export class AppComponent {
  title = 'homes';
}
