import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PortfolioService } from '../../shared/services/portfolio.service';
import { ContactService } from '../../core/services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;
  serverMessage = '';

  constructor(
    private fb: FormBuilder,
    public portfolio: PortfolioService,
    private contactService: ContactService
  ) {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(4)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;
    this.serverMessage = '';

    const { fullName, email, subject, message } = this.contactForm.value;

    this.contactService.sendMessage({
      name: fullName,
      email,
      subject,
      message
    }).subscribe({
      next: (res) => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.serverMessage = res.message || 'Thank you! Your message has been saved to the database successfully.';
        this.contactForm.reset();
      },
      error: (err) => {
        this.isSubmitting = false;
        this.submitError = true;
        this.serverMessage = err.error?.message || 'Unable to connect to backend server on port 8080. Please ensure the Spring Boot service is active.';
      }
    });
  }
}
