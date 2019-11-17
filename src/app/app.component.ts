import { Component } from '@angular/core';
import { ApiCallsService } from './common/ApiCalls/ApiCalls.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiCallsService]
})
export class AppComponent {
  title = 'feedback1';

}
