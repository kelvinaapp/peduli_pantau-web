import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'pasien',
    loadChildren: () => import('./pasien/pasien.module').then( m => m.PasienPageModule)
  },
  {
    path: 'edukasi',
    loadChildren: () => import('./edukasi/edukasi.module').then( m => m.EdukasiPageModule)
  },
  {
    path: 'faskes',
    loadChildren: () => import('./faskes/faskes.module').then( m => m.FaskesPageModule)
  },
  {
    path: 'monitoring',
    loadChildren: () => import('./monitoring/monitoring.module').then( m => m.MonitoringPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'add-admin',
    loadChildren: () => import('./add-admin/add-admin.module').then( m => m.AddAdminPageModule)
  },
  {
    path: 'pasien-edit',
    loadChildren: () => import('./pasien-edit/pasien-edit.module').then( m => m.PasienEditPageModule)
  },
  {
    path: 'pasien-detail',
    loadChildren: () => import('./pasien-detail/pasien-detail.module').then( m => m.PasienDetailPageModule)
  },
  {
    path: 'log-harian',
    loadChildren: () => import('./log-harian/log-harian.module').then( m => m.LogHarianPageModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./form/form.module').then( m => m.FormPageModule)
  },
  {
    path: 'form-add',
    loadChildren: () => import('./form-add/form-add.module').then( m => m.FormAddPageModule)
  },
  {
    path: 'log-detail',
    loadChildren: () => import('./log-detail/log-detail.module').then( m => m.LogDetailPageModule)
  },
  {
    path: 'edukasi-add',
    loadChildren: () => import('./edukasi-add/edukasi-add.module').then( m => m.EdukasiAddPageModule)
  },
  {
    path: 'edukasi-edit',
    loadChildren: () => import('./edukasi-edit/edukasi-edit.module').then( m => m.EdukasiEditPageModule)
  },
  {
    path: 'faskes-add',
    loadChildren: () => import('./faskes-add/faskes-add.module').then( m => m.FaskesAddPageModule)
  },
  {
    path: 'monitor-log',
    loadChildren: () => import('./monitor-log/monitor-log.module').then( m => m.MonitorLogPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'location-log',
    loadChildren: () => import('./location-log/location-log.module').then( m => m.LocationLogPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
