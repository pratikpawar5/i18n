import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const MATERIAL_MODULES = [
  MatCardModule,
  MatTooltipModule,
  MatButtonModule,
  MatInputModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatRadioModule,
]

@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MATERIAL_MODULES,
    CommonModule
  ]
})
export class MaterialModuleModule { }
