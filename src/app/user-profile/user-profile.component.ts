import { Component, Input } from '@angular/core';

/**
 * UserProfileComponent
 *
 * Wiederverwendbare Standalone-Komponente, die ein Benutzerprofil anzeigt:
 * Bild, Name und eine kurze Beschreibung.
 *
 * Name und Beschreibung kommen über @Input() von der Elternkomponente
 * (Property-Binding). Die Standardwerte greifen nur, wenn die Elternkomponente
 * nichts übergibt.
 */
@Component({
  selector: 'app-user-profile',
  standalone: true, // braucht kein NgModule, kann direkt importiert werden
  template: `
    <article class="profile-card">
      <!-- Profilbild (Platzhalter-URL) -->
      <img [src]="imageUrl" [alt]="'Profilbild von ' + name" class="avatar" />

      <!-- Name des Benutzers -->
      <h2 class="name">{{ name }}</h2>

      <!-- Kurze Beschreibung -->
      <p class="description">{{ description }}</p>
    </article>
  `,
  styles: [
    `
      .profile-card {
        max-width: 320px;
        padding: 1.5rem;
        border: 1px solid #ddd;
        border-radius: 12px;
        text-align: center;
        font-family: system-ui, sans-serif;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      }

      .avatar {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        object-fit: cover;
      }

      .name {
        margin: 1rem 0 0.5rem;
        font-size: 1.4rem;
      }

      .description {
        margin: 0;
        color: #555;
        line-height: 1.4;
      }
    `,
  ],
})
export class UserProfileComponent {
  /** Name des Benutzers, wird von der Elternkomponente gesetzt */
  @Input() name = 'Max Mustermann';

  /** Kurze Beschreibung, wird von der Elternkomponente gesetzt */
  @Input() description = 'Dies ist eine kurze Beispielbeschreibung.';

  /** URL des Profilbilds (Platzhalter) */
  @Input() imageUrl = 'https://placehold.co/150';
}
