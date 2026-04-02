import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../../services/search';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {

  searchText: string = '';

  constructor(private searchService: SearchService) {}

  onSearch() {
    this.searchService.setSearch(this.searchText);
  }

}
