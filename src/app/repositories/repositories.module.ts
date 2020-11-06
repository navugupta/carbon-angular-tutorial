import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositoriesRoutingModule } from './repositories-routing.module';
import { RepoPageComponent } from './repo-page/repo-page.component';

import { GridModule, LinkModule, PaginationModule, TableModule } from 'carbon-components-angular';
import { RepoTableComponent } from './repo-table/repo-table.component';

@NgModule({
	declarations: [RepoPageComponent, RepoTableComponent],
	imports: [
		CommonModule,
		GridModule,
		PaginationModule,
		TableModule,
		RepositoriesRoutingModule,
		LinkModule
	]
})
export class RepositoriesModule {
}
