import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sync',
  templateUrl: './sync.component.html',
  styleUrls: ['./sync.component.scss']
})
export class SyncComponent implements OnInit {
  body = ""
  constructor() { }

  ngOnInit(): void {
    this.body = "sync component ready"
  }

}
