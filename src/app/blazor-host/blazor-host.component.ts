import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-blazor-host',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blazor-host.component.html',
  styleUrls: ['./blazor-host.component.css']
})
export class BlazorHostComponent {
  private blazorBase = 'https://localhost:7229';   // ändra port/host här vid behov
  src = 'about:blank';
  trustedSrc: SafeResourceUrl = 'about:blank' as any;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.route.paramMap.subscribe(pm => {
      const page = pm.get('page') ?? '';
      this.src = page ? `${this.blazorBase}/${page}` : 'about:blank';
      this.trustedSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.src);
    });
  }
}
