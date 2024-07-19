import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() { }

  private __getElementById(id: string): HTMLElement {
    const elementById = document.getElementById(id)!;
    return elementById;
  }

  scrollToElement(element: HTMLElement) {
    element!.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  scrollToElementById(id: string) {
    const elementID = this.__getElementById('' + id);
    this.scrollToElement(elementID);
  }
}
