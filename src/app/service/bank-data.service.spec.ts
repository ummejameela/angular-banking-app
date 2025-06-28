import { TestBed } from '@angular/core/testing';

import { BankDataService } from './bank-data.service';
import { receiveMessageOnPort } from 'worker_threads';

describe('BankDataService', () => {
  let service: BankDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankDataService);
    localStorage.clear();

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a record', () => {
    const record = {
      id: 677,
      customerName: 'Hemanth kUmar',
      customerMobile: 9987878789,
      customerAddress: 'vijayawada',
      accountNumber: 'BANK12345678',
      accountType: 'savings',
      branchIfsc: 'djsdjsd',
      branchAddress: 'vijayawada'
    };
    service.add(record);
    const records = service.getAll()
    expect(records.length).toBe(1);
    expect(records[0]).toEqual(record)
  })


it('should update  a record',() => {
  service.add( {
      id: 677,
      customerName: 'Hemanth kUmar',
      customerMobile: 9987878789,
      customerAddress: 'vijayawada',
      accountNumber: 'BANK12345678',
      accountType: 'savings',
      branchIfsc: 'djsdjsd',
      branchAddress: 'vijayawada'
    });

  service.update(0, {
      id: 677,
      customerName: 'Hemanth kUmar',
      customerMobile: 9987878789,
      customerAddress: 'vijayawada',
      accountNumber: 'BANK12345678',
      accountType: 'savings',
      branchIfsc: 'djsdjsd',
      branchAddress: 'vijayawada'
    });
    const records =service.getAll();
    expect(records[0].customerName).toBe('Hemanth kUmar')
})


it('should delete  arecord',() => {
  service.add({
      id: 677,
      customerName: 'Hemanth kUmar',
      customerMobile: 9987878789,
      customerAddress: 'vijayawada',
      accountNumber: 'BANK12345678',
      accountType: 'savings',
      branchIfsc: 'djsdjsd',
      branchAddress: 'vijayawada'
    });
    service.delete(0);
    const records = service.getAll()
    expect(records.length).toBe(0)
})

it('should be return empty array if no records in localstorage',() => {
  expect(service.getAll()).toEqual([])
})

});


