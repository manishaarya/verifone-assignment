import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  @Input() placeholder = 'Search';

  @Output() onSearch: EventEmitter<string> = new EventEmitter();

  public queryString = '';

  public fetchDataList = new Subject<string>();

  constructor() { }

  ngOnInit(): void {
    this.fetchDataList
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((value) => {
        this.onSearch.emit(value);
      });
  }

  ngOnDestroy() {
    this.fetchDataList.unsubscribe();
  }
}
