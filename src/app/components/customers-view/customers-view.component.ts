import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store'; 
import { Observable } from 'rxjs';

import { Customer } from '../../models/customer';
import { CustomerRemove } from '../../actions/customers.actions'; 

@Component({
  selector: 'app-customers-view',
  templateUrl: './customers-view.component.html',
  styleUrls: ['./customers-view.component.scss']
})
export class CustomersViewComponent implements OnInit {

  public customers$: Observable<Customer[]>;

  constructor(
    private store: Store<{ customers: Customer[] }>
  ) {
    this.customers$ = store.pipe(select('customers'));
  }

  public removeCustomer(customerIndex): void {
    this.store.dispatch(new CustomerRemove(customerIndex));
  }

  ngOnInit(): void {
  }

}
