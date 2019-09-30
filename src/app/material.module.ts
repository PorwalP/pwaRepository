import { NgModule } from '@angular/core';

import {
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatListModule,
    MatSidenavModule
} from '@angular/material';

import {MatDatepickerModule} from  '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    // imports: [MatButtonModule, MatToolbarModule],
    // exports: [MatButtonModule, MatToolbarModule],
    imports: [MatNativeDateModule,MatDatepickerModule,MatIconModule,MatButtonModule,MatCheckboxModule, MatToolbarModule,FormsModule, MatCardModule,MatFormFieldModule,MatInputModule,MatListModule,MatRadioModule,MatSidenavModule],
 
    exports: [MatNativeDateModule,FormsModule,
    MatDatepickerModule,MatIconModule,MatButtonModule,MatCheckboxModule, MatToolbarModule, MatCardModule,MatFormFieldModule,MatInputModule,MatListModule,MatRadioModule,MatSidenavModule],
     
})

export class MyMaterialModule { }