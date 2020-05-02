import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-responsive-table',
  templateUrl: './responsive-table.component.html',
  styleUrls: ['./responsive-table.component.scss']
})
export class ResponsiveTableComponent implements OnInit {

  rows = [
    { name: '(Loading)...', gender: '', company: '' }
  ];
  columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];
  selected = [];

  rawEvent: any;
  contextmenuRow: any;
  contextmenuColumn: any;

  constructor() { }

  ngOnInit(): void {
    this.fetch(data => {
      this.rows = data;
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/100k.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  onTableContextMenu(contextMenuEvent) {
    console.log(contextMenuEvent);

    this.rawEvent = contextMenuEvent.event;
    if (contextMenuEvent.type === 'body') {
      this.contextmenuRow = contextMenuEvent.content;
      this.contextmenuColumn = undefined;
    } else {
      this.contextmenuColumn = contextMenuEvent.content;
      this.contextmenuRow = undefined;
    }

    contextMenuEvent.event.preventDefault();
    contextMenuEvent.event.stopPropagation();
  }

}
