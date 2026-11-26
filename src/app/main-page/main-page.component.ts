import { Component } from '@angular/core';
import { UserProfileComponent } from '../user-profile/user-profile.component';

/** Datenstruktur für ein Benutzerprofil */
interface User {
  id: number;
  name: string;
  description: string;
  imageUrl: string; // URL des Profilbilds
}

/**
 * MainPageComponent
 *
 * Standalone-Komponente für die Hauptseite. Zeigt einen Seitentitel und
 * rendert für jeden Benutzer eine UserProfileComponent innerhalb eines
 * <div>-Containers.
 *
 * Die Liste wird mit dem Control-Flow-Block @for durchlaufen; die Daten jedes
 * Benutzers werden per Property-Binding ([name], [description], [imageUrl])
 * übergeben.
 */
@Component({
  selector: 'app-main-page',
  standalone: true,
  // Standalone-Komponenten importieren ihre Abhängigkeiten direkt hier
  imports: [UserProfileComponent],
  template: `
    <div class="container">
      <!-- Seitentitel -->
      <h1>{{ pageTitle }}</h1>

      <div class="profile-list">
        <!--
          @for erzeugt für jedes Element in "users" eine eigene Profilkarte.
          "track user.id" sagt Angular, woran es ein Element wiedererkennt,
          damit bei Änderungen nur betroffene Karten neu gerendert werden.
        -->
        @for (user of users; track user.id) {
          <app-user-profile
            [name]="user.name"
            [description]="user.description"
            [imageUrl]="user.imageUrl"
          ></app-user-profile>
        } @empty {
          <!-- Wird angezeigt, wenn die Liste leer ist -->
          <p>Keine Benutzer vorhanden.</p>
        }
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding: 2rem;
        font-family: system-ui, sans-serif;
      }

      .profile-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1.5rem;
      }
    `,
  ],
})
export class MainPageComponent {
  /** Titel der Seite */
  pageTitle = 'Benutzerprofile';

  /** Beispieldaten: Liste von Benutzern */
  users: User[] = [
    {
      id: 1,
      name: 'Anna Schmidt',
      description:
        'Frontend-Entwicklerin mit Schwerpunkt Angular. Mag sauberen Code und guten Kaffee.',
      imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      id: 2,
      name: 'Lukas Weber',
      description:
        'Backend-Entwickler, baut REST-APIs mit Node.js und liebt automatisierte Tests.',
      imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      id: 3,
      name: 'Sophie Becker',
      description:
        'UX-Designerin, die Oberflächen entwirft, die einfach zu bedienen sind.',
      imageUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
  ];
}
