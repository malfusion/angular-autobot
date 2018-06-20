import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[autobotMarkdown]'
})
export class AutobotMarkdownDirective implements OnInit {
  private _markDownRegex = {
    icon: /!\(([^\)]+)\)/gim, // !(icon)
    image: /!\[(.*?)\]\((.*?)\)/gim, // ![aleternate text](src)
    link: /\[([^\[]+)\]\(([^\)]+)\)(\^?)/gim // [text](link) ^ can be added at end to set the target as 'blank'
  };

  // Bind with an alias
  @Input('autobotMarkdown') autobotMarkdown: string;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.innerHTML = this._parseMarkDown(this.autobotMarkdown);
  }

  _parseMarkDown(text) {
    return text
      .replace(
        this._markDownRegex.image,
        `<img class='botui-message-content-image' src='$2' alt='$1' />`
      )
      .replace(
        this._markDownRegex.icon,
        `<i class='botui-icon botui-message-content-icon fa fa-$1'></i>`
      )
      .replace(this._markDownRegex.link, this._linkReplacer);
  }

  _linkReplacer(match, $1, $2, $3) {
    const _target = $3 ? 'blank' : ''; // check if '^' sign is present with link syntax
    return `<a class='botui-message-content-link' target='${_target}' href='${$2}'>${$1}</a>`;
  }
}
