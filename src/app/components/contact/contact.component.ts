import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {
    document.body.style.overflow = 'auto';
   }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,
      {
        class: 'modal-dialog-centered'
      });
  }

  closeModal() {
    this.modalRef.hide();
  }

}
