import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoPageComponent } from './repo-page.component';
import { GridModule, TableModule, PaginationModule, TableHeaderItem, TableHeader, LinkModule } from 'carbon-components-angular';
import { RepoTableComponent } from '../repo-table/repo-table.component';
import { Apollo, ApolloModule } from 'apollo-angular';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';


describe('RepoPageComponent', () => {
	let component: RepoPageComponent;
	let fixture: ComponentFixture<RepoPageComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [RepoPageComponent, RepoTableComponent],
			imports: [
				GridModule,
				TableModule,
				PaginationModule,
				LinkModule,
				ApolloTestingModule


			]

		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RepoPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
