import { Component, OnInit } from "@angular/core";
import { princessList } from "../princesses";
import { DataService } from "../data.service";

@Component({
  selector: "app-princess-list",
  templateUrl: "./princess-list.component.html",
  styleUrls: ["./princess-list.component.css"]
})
export class PrincessListComponent implements OnInit {

  princesses = this.dataService.princessList;

  constructor(private dataService: DataService) {}

  ngOnInit() {}

  like(princessId) {
    this.princesses[princessId].likes++;
  }

  addPrincess() {
    this.princesses.push({ name: 'Philippe', year: 2019, imageUrl: '', script: "C'est rigolo !", likes: 0});
  }
}
