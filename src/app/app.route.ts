import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { FeedbackFormComponent } from './pages/feedback-form/feedback-form.component';
export const routes: Routes =
    [
        {
            path: '',
            component: LoginComponent
        },
        {
            path: 'feedback',
            component: FeedbackFormComponent
        },
        { path: '**', redirectTo: '404' }
    ];
