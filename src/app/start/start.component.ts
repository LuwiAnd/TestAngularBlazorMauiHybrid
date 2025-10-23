import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {

}
