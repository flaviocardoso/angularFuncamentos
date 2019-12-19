import { NgModule } from '@angular/core';
import { PhotoModule } from './photo/photo.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoDetailModule } from './photo-detail/photo-deitail.module';

@NgModule({
    imports: [
        PhotoModule,
        PhotoListModule,
        PhotoFormModule,
        PhotoDetailModule
    ]
})
export class PhotosModule {}
