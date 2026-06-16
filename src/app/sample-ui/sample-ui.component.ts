import { Component, Input, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-sample-ui',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatProgressBarModule,
    MatBadgeModule,
    MatDividerModule,
    MatSliderModule,
  ],
  template: `
    <div class="host">
      <mat-toolbar color="primary">
        <mat-icon>widgets</mat-icon>
        <span class="toolbar-title">{{ heading }}</span>
        <span class="spacer"></span>
        <button mat-icon-button
          [matBadge]="notifications()"
          matBadgeColor="warn"
          matBadgeSize="small"
          (click)="addNotification()">
          <mat-icon>notifications</mat-icon>
        </button>
      </mat-toolbar>

      <div class="content">
        <div class="cards">

          <mat-card appearance="outlined">
            <mat-card-header>
              <mat-icon mat-card-avatar color="primary">info</mat-icon>
              <mat-card-title>Component Info</mat-card-title>
              <mat-card-subtitle>{{ subheading }}</mat-card-subtitle>
            </mat-card-header>
            <mat-card-content>
              <p class="description">
                This web component is built with Angular&nbsp;22 and Angular Material M3.
                It is registered as a custom element and can be embedded in any portal.
              </p>
              <mat-chip-set>
                @for (tag of tags; track tag.label) {
                  <mat-chip [highlighted]="true">{{ tag.label }}</mat-chip>
                }
              </mat-chip-set>
            </mat-card-content>
          </mat-card>

          <mat-card appearance="outlined">
            <mat-card-header>
              <mat-icon mat-card-avatar>touch_app</mat-icon>
              <mat-card-title>Counter</mat-card-title>
              <mat-card-subtitle>Click to interact</mat-card-subtitle>
            </mat-card-header>
            <mat-card-content>
              <div class="counter-display">{{ count() }}</div>
              <p class="progress-label">Progress: {{ progress() }}%</p>
              <mat-progress-bar mode="determinate" [value]="progress()"></mat-progress-bar>
            </mat-card-content>
            <mat-card-actions align="end">
              <button mat-stroked-button (click)="decrement()" [disabled]="count() <= 0">
                <mat-icon>remove</mat-icon> Decrement
              </button>
              <button mat-flat-button color="primary" (click)="increment()">
                <mat-icon>add</mat-icon> Increment
              </button>
            </mat-card-actions>
          </mat-card>

          <mat-card appearance="outlined">
            <mat-card-header>
              <mat-icon mat-card-avatar>tune</mat-icon>
              <mat-card-title>Slider</mat-card-title>
              <mat-card-subtitle>Drag to adjust value</mat-card-subtitle>
            </mat-card-header>
            <mat-card-content>
              <mat-slider min="0" max="100" step="5" style="width:100%">
                <input matSliderThumb [value]="sliderValue()" (valueChange)="sliderValue.set($event)">
              </mat-slider>
              <p class="slider-value">Value: <strong>{{ sliderValue() }}</strong></p>
            </mat-card-content>
          </mat-card>

        </div>
      </div>
    </div>
  `,
  styles: [`
    .host {
      display: block;
      font-family: Roboto, sans-serif;
    }
    mat-toolbar mat-icon:first-child {
      margin-right: 8px;
    }
    .toolbar-title {
      font-size: 18px;
      font-weight: 500;
    }
    .spacer { flex: 1 1 auto; }
    .content {
      padding: 20px;
    }
    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
    }
    mat-card-content {
      padding-top: 12px !important;
    }
    .description {
      margin-bottom: 14px;
      line-height: 1.5;
      color: var(--mat-sys-on-surface-variant, #555);
    }
    mat-chip-set {
      display: block;
    }
    .counter-display {
      font-size: 56px;
      font-weight: 300;
      text-align: center;
      padding: 8px 0;
      color: var(--mat-sys-primary, #1976d2);
    }
    .progress-label {
      font-size: 13px;
      color: var(--mat-sys-on-surface-variant, #555);
      margin-bottom: 6px;
    }
    .slider-value {
      margin-top: 8px;
      font-size: 14px;
    }
  `]
})
export class SampleUiComponent {
  @Input() heading = 'Sample Web Component';
  @Input() subheading = 'Angular 22 + Material M3';

  count = signal(0);
  notifications = signal(3);
  sliderValue = signal(40);

  progress = computed(() => Math.min(100, this.count() * 10));

  tags = [
    { label: 'Angular 22' },
    { label: 'Material M3' },
    { label: 'Web Component' },
    { label: 'Zoneless' },
  ];

  increment() { this.count.update(v => v + 1); }
  decrement() { this.count.update(v => Math.max(0, v - 1)); }
  addNotification() { this.notifications.update(v => v + 1); }
}
