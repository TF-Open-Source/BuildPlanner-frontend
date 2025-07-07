import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormsModule} from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {TranslateModule, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-configurations-notifications',
  standalone: true,
  templateUrl: './configurations-notifications.component.html',
  styleUrls: ['./configurations-notifications.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    TranslateModule
  ]
})
export class ConfigurationsNotificationsComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,
              private translate: TranslateService,) { }
  notificationsEnabled = false;

  notificationOptions = [
    { label: 'CONFIG.NOTIF.OPTIONS.MSG', checked: false },
    { label: 'CONFIG.NOTIF.OPTIONS.UPDATES', checked: false },
    { label: 'CONFIG.NOTIF.OPTIONS.EMAIL', checked: false },
    { label: 'CONFIG.NOTIF.OPTIONS.HIRING', checked: false },
    { label: 'CONFIG.NOTIF.OPTIONS.OFFERS', checked: false }
  ];

  ngOnInit(): void {
    const storedEnabled = localStorage.getItem('notificationsEnabled');
    const storedChecked = localStorage.getItem('notificationCheckedMap');

    if (storedEnabled !== null) {
      this.notificationsEnabled = JSON.parse(storedEnabled);
    }

    if (storedChecked) {
      const checkedMap = JSON.parse(storedChecked);
      this.notificationOptions.forEach(option => {
        if (checkedMap[option.label] !== undefined) {
          option.checked = checkedMap[option.label];
        }
      });
    }
  }

  onChange(): void {
    localStorage.setItem('notificationsEnabled', JSON.stringify(this.notificationsEnabled));

    const checkedMap: Record<string, boolean> = {};
    this.notificationOptions.forEach(option => {
      checkedMap[option.label] = option.checked;
    });

    localStorage.setItem('notificationCheckedMap', JSON.stringify(checkedMap));
  }
}
