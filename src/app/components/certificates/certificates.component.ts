import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { CertificatesService } from 'src/app/services/certificates.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent {

  certificates :any[] = [];
  filteredCertificates: any[] = []; // Certificates to display
  serialNumber: string = ''; // Input for national ID search

  constructor(private certificateService:CertificatesService,private http: HttpClient,private sanitizer: DomSanitizer){}

  ngOnInit(): void {
    this.getAllCertificate();
  }

  getAllCertificate(){
    this.certificateService.getAllCertificates().subscribe((res:any)=>{
      this.certificates = res;
      this.filteredCertificates = [];
      console.log('certificates gets:',res)
    })
  }

  searchByNationalId(): void {
    this.filteredCertificates = this.certificates.filter(
      (cert) => cert.serialNumber === this.serialNumber
    );
  }
 

  downloadCertificate(url: string): void {
    const link = document.createElement('a');
    link.href = url;
    link.download = 'certificate.jpg'; // You can dynamically set the filename if needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  
}
