import { NgModule } from '@angular/core';
import { PhotoFormComponent } from './photo-form.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        PhotoFormComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule
    ]
})
export class PhotoFormModule {}