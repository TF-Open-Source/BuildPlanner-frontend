import { Routes } from '@angular/router';
import { ConfigurationsComponent } from './configurations.component';
import { ConfigurationsNotificationsComponent } from './configurations-notifications/configurations-notifications.component';
import { ConfigurationsPrivacyComponent } from './configurations-privacy/configurations-privacy.component';
import { ConfigurationsRegionComponent } from './configurations-region/configurations-region.component';
import { ConfigurationsTermsComponent } from './configurations-terms/configurations-terms.component';
import { ConfigurationsPolicyComponent } from './configurations-policy/configurations-policy.component';
import { ConfigurationsInfoComponent } from './configurations-info/configurations-info.component';

export const configurationsRoutes: Routes = [
  {
    path: 'configurations',
    component: ConfigurationsComponent,
    children: [
      { path: '', redirectTo: 'notifications', pathMatch: 'full' },
      { path: 'notifications', component: ConfigurationsNotificationsComponent },
      { path: 'privacy', component: ConfigurationsPrivacyComponent },
      { path: 'region', component: ConfigurationsRegionComponent },
      { path: 'terms', component: ConfigurationsTermsComponent },
      { path: 'policy', component: ConfigurationsPolicyComponent },
      { path: 'info', component: ConfigurationsInfoComponent }
    ]
  }
];
