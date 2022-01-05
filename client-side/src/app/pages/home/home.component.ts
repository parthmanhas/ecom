import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ACTIONS } from "src/app/constants/actions";

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    public ACTIONS = ACTIONS;
    showFiller = false;
}