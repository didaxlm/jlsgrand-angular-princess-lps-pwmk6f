import { Injectable } from "@angular/core";
import { princessList } from "./princesses";

@Injectable()
export class DataService {
  princessList = princessList;

  constructor() {}
}
