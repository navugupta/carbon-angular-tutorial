import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from './info-card/info-card.component';
import { InfoSectionComponent } from './info-section/info-section.component';
import { GridModule } from 'carbon-components-angular';
import { ApplicationModule, GlobeModule, PersonFavoriteModule } from '@carbon/icons-angular';

@NgModule({
	declarations: [InfoCardComponent, InfoSectionComponent],
	exports: [
		InfoSectionComponent
	],
	imports: [
		CommonModule,
		PersonFavoriteModule,
		GlobeModule,
		ApplicationModule,
		GridModule
	]
})
export class InfoModule {
}
