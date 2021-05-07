import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../usuarios-panel/customer';
import { CustomerService } from '../usuarios-panel/customer.service';



@Component({
  selector: 'app-editarform',
  templateUrl: './editarform/editarform.component.html',
  styleUrls: ['./editarform//editarform.component.css']
})
export class CustomerComponent implements OnInit {

  private customer: Customer = new Customer()

  constructor(private customerService: CustomerService,
    private router: Router) { }

  ngOnInit(): void {
  }

}