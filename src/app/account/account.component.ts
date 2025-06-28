import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BankDataService, BankRecord } from '../service/bank-data.service';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {

  records: BankRecord[] = [];

  paginatedRecords: BankRecord[] = [];
  pageSize: number = 5;
  currentPage: number = 1;
  totalPages: number = 1;

  private router = inject(Router);

  constructor(
    private route: ActivatedRoute,
    private bankService: BankDataService // ✅ Inject service
  ) {}

  ngOnInit() {
    this.loadRecords();

    this.route.queryParams.subscribe(params => {
      const page = +params['page'] || 1;
      this.currentPage = page;
      this.paginate();
    });
  }

  loadRecords() {
    this.records = this.bankService.getAll(); // ✅ Load from service
    this.totalPages = Math.ceil(this.records.length / this.pageSize);
    this.paginate();
  }

  paginate() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedRecords = this.records.slice(start, end);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { page },
        queryParamsHandling: 'merge'
      });
    }
  }

  deleteRecord(index: number) {
    const globalIndex = (this.currentPage - 1) * this.pageSize + index;
    this.bankService.delete(globalIndex);  // ✅ Delete via service
    this.loadRecords();                    // ✅ Refresh data
  }

  editRecord(index: number) {
    const globalIndex = (this.currentPage - 1) * this.pageSize + index;
    this.bankService.setEdit(globalIndex,this.records[globalIndex])
    this.router.navigate(['/home/customerAccountForm']);


  }
}
