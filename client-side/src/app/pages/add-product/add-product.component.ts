import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { nanoid } from "nanoid";
import { Store } from "src/app/util/store/store";

@Component({
    templateUrl: './add-product.component.html'
})
export class AddProductComponent implements OnInit{

    public form: FormGroup;
    public images: File[] = [];

    constructor(private fb: FormBuilder, private store: Store) {
        this.form = this.fb.group({
            price: [],
            name: [],
            dateAdded: [{value: Date(), disabled: true}]
        })
    }

    ngOnInit() {
        
    }

    onProductAdd() {
        const product = this.form.value;
        product.id = nanoid();
        this.store.addProductToStore(product);
        console.log(product)
    }

    processFile(imageInput: any) {
        const files: File[] = imageInput.files;
        const reader = new FileReader();
    
        reader.addEventListener('load', (event: any) => {
    
        //   this.selectedFile = new ImageSnippet(event.target.result, file);
    
        //   this.imageService.uploadImage(this.selectedFile.file).subscribe(
        //     (res) => {
            
        //     },
        //     (err) => {
            
        //     })
        });
    
        // reader.readAsDataURL(file);
      }

}