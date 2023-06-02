import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestService } from '../../test.service';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  data = this.service.getData();

  constructor(private service: TestService) {}
}
