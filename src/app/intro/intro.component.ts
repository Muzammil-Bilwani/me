import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  scrollDown() {
    console.log("scroll")
    let scrollHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    )
    console.log(scrollHeight)
    window.scroll({
      top: window.screen.height - 150,
      behavior: 'smooth'
    })

  }

  ngOnInit() { }
}
