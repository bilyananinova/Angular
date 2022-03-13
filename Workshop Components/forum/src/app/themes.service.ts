import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITheme } from './interfaces/theme';
import { Observable } from 'rxjs';

@Injectable()
export class ThemesService {
  constructor(private http: HttpClient) { }


  getAllThemes(): Observable<ITheme[]> {

    let themesResponse = this.http.get<ITheme[]>('http://localhost:3000/api/themes');
    console.log(themesResponse);
    return themesResponse;
    
  }
}
