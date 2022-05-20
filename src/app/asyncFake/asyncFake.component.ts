import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-fake',
  templateUrl: './asyncFake.component.html',
  styleUrls: ['./asyncFake.component.scss']
})
export class AsyncFakeComponent implements OnInit {
  body = ""
  constructor() { 
  }

  setupReadyHook: Promise<boolean> = Promise.resolve(false);

  ngOnInit(): void {
    this.setupReadyHook = (async () => {
      console.log('setup hook')
      await this.delaySetBody()
      return true
    })()
  }


  delaySetBody(): Promise<void> {
    return new Promise((resolve, reject) => {
      // assume this is some useful async action like an http request
      setTimeout(() => {
        this.body = "asyncFake component ready"
        resolve()
      }, 2000)
    })
  }

}
