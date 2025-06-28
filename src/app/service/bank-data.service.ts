import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface BankRecord {
  id: number;                    // you can switch to string/uuid later
  customerName: string;
  customerMobile: number;
  customerAddress: string;
  accountNumber: string;
  accountType: string;
  branchIfsc: string;
  branchAddress: string;
}

const STORAGE_KEY = 'bankRecords';


@Injectable({
  providedIn: 'root'
})
export class BankDataService {

  private readonly _records$ = new BehaviorSubject<BankRecord[]>(this.load());
  readonly records$: Observable<BankRecord[]> = this._records$.asObservable();

  private _edit$ = new BehaviorSubject<{index:number,record:BankRecord} | null>(null)
  readonly edit$ = this._edit$.asObservable();



  constructor() { }
  getAll(): BankRecord[] {
    return [...this._records$.value];  // Return a copy to protect internal data
  }

  /*======================  CRUD  methods  ======================*/
  add(record: BankRecord): void {
    const updated = [...this._records$.value, record];   // immutable copy
    this.save(updated);
  }

  update(index: number, record: BankRecord): void {
    const updated = [...this._records$.value];
    updated[index] = record;
    this.save(updated);
  }
  delete(index: number): void {
    const updated = this._records$.value.filter((_, i) => i !== index);
    this.save(updated);
  }
  /**  Read array from localStorage ONCE at startup */
  private load(): BankRecord[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) as BankRecord[] : [];
    } catch {
      /* malformed JSON or storage blocked */
      return [];
    }
  }
  // write ti localstrorage and save
  private save(arr: BankRecord[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
    this._records$.next(arr);                  // push to every component
  }

  setEdit(index:number,record:BankRecord):void{
    this._edit$.next({index,record})
  }

  clearEdit(){
     this._edit$.next(null)
  }


}
