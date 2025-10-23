import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blazor-host',
  standalone: true,
  imports: [],
  templateUrl: './blazor-host.component.html',
  styleUrl: './blazor-host.component.css'
})
export class BlazorHostComponent {

  src = 'about:blank';
  trustedSrc: SafeResourceUrl = 'about:blank' as any;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.route.paramMap.subscribe(pm => {
      const page = pm.get('page') ?? '';
      this.src = page ? ('https://localhost:7777/' + page) : 'about:blank';
      this.trustedSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.src);
    });
  }

}
