import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    ModalModule.forRoot()
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
