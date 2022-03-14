import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITheme } from './interfaces/theme';

@Injectable()
export class ThemeService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<ITheme[]> {
    return this.http.get<ITheme[]>('http://localhost:3000/api/themes');
  }
}
