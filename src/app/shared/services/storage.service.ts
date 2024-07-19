import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  hashKey = "Abc@123";
  storageSubject = new Subject<string>();

  constructor() { }

  watchStorage(): Observable<any> {
    return this.storageSubject.asObservable();
  }

  setSessionStorage(key: string, data: any): void {
    try {
      sessionStorage.setItem(key, JSON.stringify(data));
      this.storageSubject.next('setSession');
    } catch (e) {
      console.error('Error saving data to SessionStorage', e);
    }
  }

  getSessionStorage(key: string): any {
    try {
      return JSON.parse(sessionStorage.getItem(key)!);
    } catch (e) {
      console.error('Error getting data from sessionStorage', e);
      return null;
    }
  }

  removeSessionStorage(key: string): void {
    try {
      sessionStorage.removeItem(key);
      this.storageSubject.next('removeSession');
    } catch (e) {
      console.error('Error removing data from sessionStorage', e);
    }
  }

  getlocalStorage(key: string): any {
    try {
      const item = localStorage.getItem(key);
      return item != (null || undefined) ? JSON.parse(this.decrypt(item)!) : null;
    } catch (e) {
      console.error('Error getting data from localStorage', e);
      return null;
    }
  }

  setlocalStorage(key: string, data: any): void {
    try {
      localStorage.setItem(key, this.encrypt(JSON.stringify(data)));
      this.storageSubject.next(key);
    } catch (e) {
      console.error('Error saving data to localStorage', e);
    }
  }

  removelocalStorage(key: string): void {
    try {
      localStorage.removeItem(key);
      this.storageSubject.next('removeLocal');
    } catch (e) {
      console.error('Error removing data from localStorage', e);
    }
  }

  clearLocalStorage() {
    localStorage.clear();
  }

  private encrypt(txt: string): string {
    return CryptoJS.AES.encrypt(txt, this.hashKey).toString();
  }

  private decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, this.hashKey).toString(CryptoJS.enc.Utf8);
  }
}
