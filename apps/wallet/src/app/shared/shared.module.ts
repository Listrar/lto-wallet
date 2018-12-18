import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import {
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatRippleModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatTableModule,
  MatDialogModule,
  MatIconRegistry
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import {
  ContentSectionModule,
  CredentialsFormModule,
  CopyableTextModule,
  LoadingSpinnerModule,
  TransactionDetailsModule,
  TransactionsListModule
} from './components';

import { AmountDividePipeModule, TypeLabelPipeModule, IsYouPipeModule } from './pipes';

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    ContentSectionModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatRippleModule,
    MatDialogModule,
    MatTooltipModule,
    CredentialsFormModule,
    MatSnackBarModule,
    CopyableTextModule,
    FormsModule,
    MatSidenavModule,
    MatTableModule,
    LoadingSpinnerModule,
    AmountDividePipeModule,
    TypeLabelPipeModule,
    IsYouPipeModule,
    TransactionDetailsModule,
    TransactionsListModule
  ]
})
export class SharedModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'anchor',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/anchor.svg')
    );
  }
}
