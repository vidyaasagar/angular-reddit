import {
  Component,
  OnInit,
  Input, // <-- added,
  HostBinding
} from '@angular/core';
import { Article } from './article.model'; // <-- added

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;

  constructor() {
    // article is populated by the Input now,
    // so we don't need anything here
  }

  voteUp(): boolean {
    this.article.voteUp();
    // JavaScript, by default, propagates the click event to all the parent components.
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    // To fix that, we need to make the click event handler to return false .
    return false;
  }

  ngOnInit() {}
}
