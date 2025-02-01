import { Component } from '@angular/core';

@Component({
  selector: 'app-guid-mem',
  templateUrl: './guid-mem.component.html',
  styleUrls: ['./guid-mem.component.css']
})
export class GuidMemComponent {

  downloadFile(): void {
    // Replace 'file_path' with the actual path to your file
    const filePath = '../../../assets/files/file1.docx'; 
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', filePath);
    link.setAttribute('download', 'filename');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  downloadFile2(): void {
    // Replace 'file_path' with the actual path to your file
    const filePath = '../../../assets/files/file2.xlsx'; 
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', filePath);
    link.setAttribute('download', 'filename');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
