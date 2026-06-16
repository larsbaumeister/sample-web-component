import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { SampleUiComponent } from './app/sample-ui/sample-ui.component';

(async () => {
  const app = await createApplication({
    providers: [
      provideZonelessChangeDetection(),
      provideAnimations(),
    ],
  });

  const SampleUiElement = createCustomElement(SampleUiComponent, { injector: app.injector });
  customElements.define('sample-ui', SampleUiElement);
})();
