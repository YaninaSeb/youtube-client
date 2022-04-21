import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss']
})
export class CreateCardComponent implements OnInit {

  createCardForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.createCardForm = this.fb.group({
      titleCard: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      descriptionCard: ['', [Validators.maxLength(255)]],
      imgCard: ['', [Validators.required, Validators.pattern('https?://[a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+(jpe?g|png|gif)') ]],
      linkVideoCard: ['', [Validators.required, Validators.pattern('https?://(www\.)?(youtu\.be\/|youtube\.com\/)[a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+') ]],
      creationDateCard: ['', [Validators.required, this.dateValidator]]
    });
  }

  get _title() {
    return this.createCardForm.controls['titleCard'] as FormControl;
  }

  get _description() {
    return this.createCardForm.controls['descriptionCard'] as FormControl;
  }

  get _img() {
    return this.createCardForm.controls['imgCard'] as FormControl;
  }

  get _linkVideo() {
    return this.createCardForm.controls['linkVideoCard'] as FormControl;
  }

  get _creationDate() {
    return this.createCardForm.controls['creationDateCard'] as FormControl;
  }

  dateValidator(control: FormControl): { [key: string]:boolean } | null {
    const datePublished = new Date(control.value).getTime();
    const dateNow = Date.now();
    const diferentMilisec = dateNow - datePublished;
    
    if (diferentMilisec < 0) {
      return { 'date' : true };
    }
    return null;
  }

  onSubmitCreateCard(form: any) {
    this.router.navigate(['/search']);
    form.reset();
  }

}
