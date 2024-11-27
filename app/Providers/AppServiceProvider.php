<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
use Illuminate\Routing\UrlGenerator;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(UrlGenerator $url): void
    {
        // Enforce HTTPS if the environment variable ENFORCE_SSL is true
        if (env('ENFORCE_SSL', false)) {
            $url->forceScheme('https');
        }

        // Set the default string length for database migrations
        Schema::defaultStringLength(191);
    }
}
