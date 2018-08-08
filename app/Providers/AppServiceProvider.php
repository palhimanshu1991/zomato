<?php

namespace App\Providers;

use App\Restaurant;
use App\Review;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
//        Relation::morphMap([
//            'reviews' => Review::class,
//            'restaurants' => Restaurant::class,
//        ]);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
