import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HeaderData } from 'src/app/models/header-data.model';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public headerData: HeaderData = {
    icon: 'mail',
    title: 'Contact'
  }

  public contactForm: UntypedFormGroup;
  public name: UntypedFormControl = new UntypedFormControl("", [Validators.required]);
  public email: UntypedFormControl = new UntypedFormControl("", [Validators.required, Validators.email]);
  public message: UntypedFormControl = new UntypedFormControl("", [Validators.required, Validators.maxLength(256)]);
  public honeypot: UntypedFormControl = new UntypedFormControl("");
  public loading = false;

  public constructor(private readonly formBuilder: UntypedFormBuilder, private readonly mailService: MailService, private readonly snackbar: MatSnackBar) {
    this.contactForm = this.formBuilder.group({
      name: this.name,
      email: this.email,
      message: this.message,
      honeypot: this.honeypot
    });
  }

  public onContactFormSubmit(): void {
    if(this.contactForm.valid && this.honeypot.value === '') {
      this.contactForm.disable();
      const formData: any = new FormData();
      formData.append("name", this.contactForm.get("name")?.value);
      formData.append("email", this.contactForm.get("email")?.value);
      formData.append("message", this.contactForm.get("message")?.value);
      this.loading = true;
      this.mailService.sendMail(formData).subscribe(response => {
        this.loading = false;
        this.contactForm.enable();
        this.snackbar.open(response.message, '×', { panelClass: `${response.success? 'success':'error'}`, verticalPosition: 'top' });

      })
    }
  }
}
