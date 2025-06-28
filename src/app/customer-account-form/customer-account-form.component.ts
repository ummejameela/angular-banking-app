import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BankDataService, BankRecord } from '../service/bank-data.service'; // import service + interface
import { take } from 'rxjs';

@Component({
  selector: 'app-customer-account-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './customer-account-form.component.html',
  styleUrl: './customer-account-form.component.scss'
})
export class CustomerAccountFormComponent implements OnInit {

  customerAccountForm!: FormGroup;
  formSubmitted = false;
  isEditMode: boolean = false;
  editIndex: number | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private bankService: BankDataService  // ✅ inject the service
  ) {
    this.customerAccountForm = this.fb.group({
      customerName: ['', [Validators.required, Validators.minLength(3)]],
      customerMobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      customerAddress: ['', [Validators.required]],
      accountNumber: ['', [Validators.required, Validators.pattern('^[A-Z]{4}[0-9]{8}$')]],
      accountType: ['', Validators.required],
      branchIfsc: this.fb.control({ value: 'BANK0123ABC', disabled: true }),
      branchAddress: this.fb.control({ value: 'New Sanath Nagar, Vijayawada', disabled: true })
    });
  }

  ngOnInit() {
    this.bankService.edit$.
      pipe(take(1)).subscribe(data => {
        if (data) {
          this.customerAccountForm.patchValue(data.record)
          this.isEditMode = true;
          this.editIndex = data.index

        }
      })
  }

  onSubmit() {
    if (this.customerAccountForm.invalid) {
      this.customerAccountForm.markAllAsTouched();
      return;
    }

    const formData = this.customerAccountForm.getRawValue() as BankRecord;
    
    if (this.isEditMode && this.editIndex !== null) {
      this.bankService.update(this.editIndex, formData);  // ✅ use service
      this.bankService.clearEdit();
      this.isEditMode = false;
      this.editIndex = null;
    } else {
      this.bankService.add(formData);                     // ✅ use service
    }

    this.formSubmitted = true;
    setTimeout(() => this.formSubmitted = false, 3000);


    this.customerAccountForm.reset({
      branchIfsc: 'BANK0123ABC',
      branchAddress: 'New Sanath Nagar, Vijayawada'
    });
    this.router.navigate(['/home/accountDetails']);

  }
}
