import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoTableComponent } from './repo-table.component';
import { TableModule, LinkModule, PaginationModule, } from 'carbon-components-angular';
import { ApolloModule } from 'apollo-angular';
import ApolloClient from 'apollo-client';
import { ApolloTestingModule, ApolloTestingController } from 'apollo-angular/testing';


describe('RepoTableComponent', () => {
	let component: RepoTableComponent;
	let fixture: ComponentFixture<RepoTableComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [RepoTableComponent],
			imports: [
				TableModule,
				LinkModule,
				PaginationModule,
				ApolloTestingModule

			]

		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RepoTableComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
