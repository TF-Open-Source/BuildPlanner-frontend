import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-configurations-notifications',
  standalone: true,
  templateUrl: './configurations-notifications.component.html',
  styleUrls: ['./configurations-notifications.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    MatSlideToggleModule,
    MatCheckboxModule
  ]
})
export class ConfigurationsNotificationsComponent implements OnInit {
  notificationsEnabled = false;

  notificationOptions = [
    { label: 'Recibir notificaciones de mensajes', checked: false },
    { label: 'Recibir notificaciones de actualizaciones', checked: false },
    { label: 'Recibir notificaciones de mensajes de correo', checked: false },
    { label: 'Recibir notificaciones de nueva selección de personal', checked: false },
    { label: 'Recibir notificaciones de ofertas de equipos', checked: false }
  ];

  ngOnInit(): void {
    const storedEnabled = localStorage.getItem('notificationsEnabled');
    const storedOptions = localStorage.getItem('notificationOptions');

    if (storedEnabled !== null) {
      this.notificationsEnabled = JSON.parse(storedEnabled);
    }

    if (storedOptions) {
      const parsed = JSON.parse(storedOptions);
      // Validamos que tenga el mismo número de elementos
      if (Array.isArray(parsed) && parsed.length === this.notificationOptions.length) {
        this.notificationOptions = parsed;
      }
    }
  }

  onChange(): void {
    localStorage.setItem('notificationsEnabled', JSON.stringify(this.notificationsEnabled));
    localStorage.setItem('notificationOptions', JSON.stringify(this.notificationOptions));
  }
}
