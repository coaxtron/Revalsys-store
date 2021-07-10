import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductModel } from '../../model/product.model';

@Component({
  selector: 'app-p-tile',
  templateUrl: './p-tile.component.html',
  styleUrls: ['./p-tile.component.scss']
})
export class PTileComponent implements OnInit {

  @Input() public  product: any;

  @Output() clicked = new EventEmitter<MouseEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  public onClick(event: MouseEvent): void {
    this.clicked.emit(event);
    event.stopPropagation();
  }

}
