import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import {MatSnackBar} from '@angular/material/snack-bar';

import { ACTIONS } from "src/app/constants/actions";

interface Product {
    name: string,
    price: string
}

@Component({
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
    public ACTIONS = ACTIONS;
    public currentAction: string | null = '';
    public form: FormGroup;
    productsAdded: Product[] = [];
    
    constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private _snackBar: MatSnackBar) {
        this.form = this.formBuilder.group({
            'product_name': ['', Validators.required],
            'product_price': ['', Validators.compose([Validators.required, Validators.min(0)])]
        })
    }

    ngOnInit() {
        this.currentAction = this.activatedRoute.snapshot.paramMap.get('action');
    }

    onUploadImage() {

    }

    onSubmit() {
        if(this.form.valid){
            const name = this.form.controls['product_name'].value;
            const price = this.form.controls['product_price'].value;
            const product: Product = {
                name,
                price
            };
            this.productsAdded.push(product);
            // http post call
            console.log(product)
            this.openSnackBar('Product Added Successfully', 'Dismiss');
        }
    }

    getErrorMessage(): string | void { 
        
        if (this.form.controls['product_name']?.hasError('required')) {
            return 'Please enter a value';
        }
        if (this.form.controls['product_price']?.hasError('required')) {
            console.log('asdsads')
            return 'Please enter a value';
        }

    }

    openSnackBar(message: string, action: string) {
        this._snackBar.open(message, action);
      }
}