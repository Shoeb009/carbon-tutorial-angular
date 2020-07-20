import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-info-card',
	templateUrl: './info-card.component.html',
	styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {
	@Input() heading;
	@Input() content;
	splitHeading;

	constructor() { }

	ngOnInit() {

		this.splitHeading = this.createArrayFromPhrase(this.heading);
		console.log(this.heading);
		console.log(this.splitHeading);
		
	}
	createArrayFromPhrase(phrase) {
		const splitPhrase = phrase.split(" ");
		const thirdWord = splitPhrase.pop();
		return [splitPhrase.join(" "), thirdWord];
	}

}
